const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require("moment");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const crypto = require("crypto");

// ---------------- MathJax snippet loader (from external file) ----------------
// Load snippet from the same folder as this script: _scripts/mathjax.html
const MATHJAX_PATH = path.join(__dirname, "mathjax.html");
function loadMathjaxSnippet() {
  try {
    return fs.readFileSync(MATHJAX_PATH, "utf8");
  } catch (e) {
    console.log(`MathJax snippet not found at ${MATHJAX_PATH}; skipping.`);
    return ""; // no injection
  }
}
const mathjaxSnippet = loadMathjaxSnippet();

// ---------------- Notion Client ----------------
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

// ---------------- Helpers ----------------
function escapeCodeBlock(body) {
  const regex = /```([\s\S]*?)```/g;
  return body.replace(regex, function (match, htmlBlock) {
    return "\n{% raw %}\n```" + htmlBlock.trim() + "\n```\n{% endraw %}\n";
  });
}

function convertInlineEquationToBlock(body) {
  const regex = /\n^[ \t]*\$\$\n([\s\S]*?)\n[ \t]*\$\$\n/gm;
  return body.replace(regex, function (match, equation) {
    return "\n{% raw %}\n$$\n" + equation.trim() + "\n$$\n{% endraw %}\n\n";
  });
}

function undefinedReplacer(body) {
  const regex = /undefined- ([\s\S]*?)/g;
  return body.replace(regex, function (match, block) {
    return "- " + block.trim();
  });
}

function getHash(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

// ---- Image handling: keep external links, download Notion file links only ----
const FILE_HOST_WHITELIST = [
  "prod-files-secure.s3.us-west-2.amazonaws.com",
  "s3.us-west-2.amazonaws.com",
  "prod-files-secure.notion-static.com",
];

function isExternalImageLink(rawUrl) {
  try {
    const u = new URL(rawUrl);
    if (!/^https?:$/.test(u.protocol)) return false;
    return !FILE_HOST_WHITELIST.includes(u.hostname);
  } catch {
    return false;
  }
}

async function headForExt(url) {
  try {
    const head = await axios.head(url, { maxRedirects: 2 });
    const ct = head.headers["content-type"] || "";
    if (ct.includes("jpeg")) return ".jpg";
    if (ct.includes("png")) return ".png";
    if (ct.includes("gif")) return ".gif";
    if (ct.includes("webp")) return ".webp";
  } catch {}
  return ".png";
}

async function downloadTo(filename, url) {
  await fs.promises.mkdir(path.dirname(filename), { recursive: true });
  const res = await axios.get(url, { responseType: "stream", maxRedirects: 3 });
  await new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    res.data.pipe(file);
    file.on("finish", resolve);
    file.on("error", reject);
  });
}

async function transformImagesInMarkdown(md, ftitle) {
  const matches = [...md.matchAll(/!\[(.*?)\]\((.*?)\)/g)];
  if (matches.length === 0) return md;

  const mediaSubpath = `/assets/img/${ftitle}`;
  const localDir = path.join("assets/img", ftitle);
  await fs.promises.mkdir(localDir, { recursive: true });

  const replacements = [];
  for (let i = 0; i < matches.length; i++) {
    const alt = matches[i][1] || "";
    const src = matches[i][2];

    if (isExternalImageLink(src)) {
      replacements.push(`![${alt}](${src})`);
      continue;
    }

    try {
      const ext = await headForExt(src);
      const localName = `${i}${ext}`;
      const absPath = path.join(localDir, localName);
      await downloadTo(absPath, src);
      replacements.push(`![${alt}](${mediaSubpath}/${localName})`);
    } catch (e) {
      replacements.push(`![${alt}](${src})`);
    }
  }

  let cursor = 0;
  let out = "";
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    out += md.slice(cursor, m.index);
    out += replacements[i];
    cursor = m.index + m[0].length;
  }
  out += md.slice(cursor);
  return out;
}

// ---- Incremental sync state ----
const STATE_PATH = path.join(process.cwd(), ".cache/notion-sync.json");
function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE_PATH, "utf8")); }
  catch { return { pages: {}, last_run: null }; }
}
function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}
function iso(s) { return s ? new Date(s).toISOString() : null; }

// ---------------- MAIN ----------------
(async () => {
  const root = "_posts";
  fs.mkdirSync(root, { recursive: true });

  const databaseId = process.env.DATABASE_ID;

  let response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "공개",
      checkbox: { equals: true },
    },
  });
  const allPages = response.results;
  while (response.has_more) {
    response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: response.next_cursor,
      filter: { property: "공개", checkbox: { equals: true } },
    });
    allPages.push(...response.results);
  }

  const state = loadState();
  const currentById = new Map(allPages.map(p => [p.id, p]));

  const changed = [];
  for (const p of allPages) {
    const prev = state.pages[p.id]?.last_edited_time;
    const now = p.last_edited_time;
    if (!prev || new Date(now) > new Date(prev)) changed.push(p);
  }

  for (const r of changed) {
    const id = r.id;
    let date = moment(r.created_time).format("YYYY-MM-DD");
    const pdate = r.properties?.["날짜"]?.["date"]?.["start"];
    if (pdate) date = moment(pdate).format("YYYY-MM-DD");

    let title = id;
    const ptitle = r.properties?.["게시물"]?.["title"];
    if (ptitle?.length > 0) title = ptitle[0]?.["plain_text"];

    const safeTitle = (title || id).replaceAll(" ", "-");
    const ftitle = `${date}-${safeTitle}.md`;
    const filePath = path.join(root, ftitle);

    const mdblocks = await n2m.pageToMarkdown(id);
    let md = n2m.toMarkdownString(mdblocks)["parent"];
    if (!md || md.trim() === "") {
      console.log(`Skip (empty): ${ftitle}`);
      continue;
    }

    md = escapeCodeBlock(md);
    md = convertInlineEquationToBlock(md);
    md = undefinedReplacer(md);
    md = await transformImagesInMarkdown(md, ftitle);

    // --- full front matter restored ---
    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `date: ${date}`,
      `notion_id: ${id}`,
      'tags: []',
      'categories: []',
      'math: true',
      '---',
      ''
    ].join('\n');

    const finalContent = `${frontmatter}${md}\n${mathjaxSnippet}`;

    let shouldWrite = true;
    if (fs.existsSync(filePath)) {
      const oldHash = getHash(fs.readFileSync(filePath, "utf8"));
      const newHash = getHash(finalContent);
      if (oldHash === newHash) shouldWrite = false;
    }

    if (shouldWrite) {
      fs.writeFileSync(filePath, finalContent);
      console.log(`Updated: ${ftitle}`);
    } else {
      console.log(`Unchanged: ${ftitle}`);
    }

    const lastEdit = r.last_edited_time;
    state.pages[id] = { last_edited_time: iso(lastEdit), outfile: filePath };
  }

  const aliveIds = new Set(allPages.map(p => p.id));
  for (const [pid, meta] of Object.entries(state.pages)) {
    if (!aliveIds.has(pid)) {
      try {
        if (meta.outfile && fs.existsSync(meta.outfile)) {
          fs.unlinkSync(meta.outfile);
          console.log(`Removed (not in Notion): ${path.basename(meta.outfile)}`);
        }
      } catch (e) {
        console.log(`Remove failed: ${meta.outfile}`, e?.message || e);
      }
      delete state.pages[pid];
    }
  }

  state.last_run = new Date().toISOString();
  saveState(state);
})();

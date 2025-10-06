// notion-import.js
// Requirements: @notionhq/client, notion-to-md, axios, moment
// PURPOSE
// 1) External image (e.g., Imgur) links are kept as-is (do NOT download) so they render on the web directly.
//    Only Notion-hosted file URLs are downloaded locally.
// 2) Incremental sync: Only pages changed since last run are processed; removed pages are deleted locally.
// 3) YAML front matter generated (restored from original fields).

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

// ---- Property helpers for YAML/front matter ----
function escapeYAML(s = "") { return String(s).replace(/"/g, '\"'); }
function yamlList(arr) {
  if (!arr || !arr.length) return "[]";
  const items = arr.map(v => `"${escapeYAML(v)}"`).join(", ");
  return `[${items}]`;
}
function getProp(props, names) {
  if (!props) return null;
  const low = names.map(n => String(n).toLowerCase());
  for (const [k, v] of Object.entries(props)) {
    if (low.includes(String(k).toLowerCase())) return v;
  }
  return null;
}
function getCheckbox(props, names) { const p = getProp(props, names); return p?.checkbox === true; }
function getMulti(props, names) { const p = getProp(props, names); return p?.multi_select ? p.multi_select.map(o => o.name) : []; }
function getSelectAsArray(props, names) { const p = getProp(props, names); return p?.select?.name ? [p.select.name] : []; }
function getPlainText(props, names) {
  const p = getProp(props, names); if (!p) return "";
  if (p.type === "rich_text" && p.rich_text) return p.rich_text.map(t => t.plain_text).join("");
  if (p.type === "title" && p.title) return p.title.map(t => t.plain_text).join("");
  if (typeof p[p.type] === "string") return p[p.type];
  return "";
}
function getImageUrl(props, names) {
  const p = getProp(props, names); if (!p) return null;
  if (p.files && p.files.length) { const f = p.files[0]; return f.external?.url || f.file?.url || null; }
  if (p.url) return p.url;
  return null;
}
function extractFirstImage(md) {
  const m = /!\[(.*?)\]\((.*?)\)/.exec(md);
  return m ? { alt: m[1] || "", url: m[2] || "" } : null;
}
async function processImageURLForYaml(url, fileBase, baseName = "cover") {
  if (!url) return "";
  if (isExternalImageLink(url)) return url;
  try {
    const ext = await headForExt(url);
    const mediaSubpath = `/assets/img/${fileBase}`;
    const localDir = path.join("assets/img", fileBase);
    await fs.promises.mkdir(localDir, { recursive: true });
    const filename = path.join(localDir, `${baseName}${ext}`);
    await downloadTo(filename, url);
    return `${mediaSubpath}/${baseName}${ext}`;
  } catch { return url; }
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
    if (!/^https?:$/.test(u.protocol)) return false; // treat non-http(s) as non-external
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

function shortHash(str){return crypto.createHash("sha1").update(String(str)).digest("hex").slice(0,10);} 
function normalizeImageKey(rawUrl){
  try{ const u=new URL(rawUrl); const base=path.basename(u.pathname||""); return base.toLowerCase(); }catch{ return String(rawUrl); }
}
function extFromUrl(rawUrl){ try{ const u=new URL(rawUrl); const ext=path.extname(u.pathname||"").toLowerCase(); return ext || null; }catch{ return null; } }

async function transformImagesInMarkdown(md, fileBase, prevImages){
  const matches = [...md.matchAll(/!\[(.*?)\]\((.*?)\)/g)];
  if (matches.length === 0) return { md, images: prevImages || [] };

  const mediaSubpath = `/assets/img/${fileBase}`;
  const localDir = path.join("assets/img", fileBase);
  await fs.promises.mkdir(localDir, { recursive: true });

  // Build maps from previous manifest for reuse
  const prevByNorm = new Map();
  for (const it of (prevImages||[])) { if (it && it.kind === 'local' && it.norm) prevByNorm.set(it.norm, it); }

  const newManifest = [];
  const replacements = [];
  const currentNorms = new Set();

  for (let i = 0; i < matches.length; i++) {
    const alt = matches[i][1] || "";
    const src = matches[i][2];

    if (isExternalImageLink(src)) {
      // External → keep as-is; do NOT store in manifest to avoid leaking URLs/tokens
      replacements.push(`![${alt}](${src})`);
      continue;
    }

    const norm = normalizeImageKey(src);
    currentNorms.add(norm);
    let fileName;
    let targetPath;

    // Try reuse previous mapping
    const prev = prevByNorm.get(norm);
    if (prev && prev.file) {
      fileName = path.basename(prev.file);
      targetPath = path.join(localDir, fileName);
      // If file missing (cleaned or first time), re-download
      if (!fs.existsSync(targetPath)) {
        const ext = extFromUrl(src) || await headForExt(src);
        fileName = fileName || `${i}-${shortHash(norm)}${ext || '.png'}`;
        targetPath = path.join(localDir, fileName);
        await downloadTo(targetPath, src);
      }
    } else {
      // New local image
      const ext = extFromUrl(src) || await headForExt(src);
      fileName = `${i}-${shortHash(norm)}${ext || '.png'}`;
      targetPath = path.join(localDir, fileName);
      await downloadTo(targetPath, src);
    }

    newManifest.push({ kind: 'local', norm, file: `${mediaSubpath}/${fileName}` });
    replacements.push(`![${alt}](${mediaSubpath}/${fileName})`);
  }

  // Delete removed local images (present in prev but not in current)
  for (const it of (prevImages||[])) {
    if (it && it.kind === 'local' && it.norm && !currentNorms.has(it.norm)) {
      const p = it.file ? it.file.replace(/^\//, '') : null; // stored as "/assets/..."
      const abs = p ? path.join(process.cwd(), p) : null;
      try { if (abs && fs.existsSync(abs)) fs.unlinkSync(abs); } catch {}
    }
  }

  // Rebuild string with replacements in place
  let cursor = 0; let out = "";
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    out += md.slice(cursor, m.index);
    out += replacements[i];
    cursor = m.index + m[0].length;
  }
  out += md.slice(cursor);
  return { md: out, images: newManifest };
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
  const root = "_posts"; // output directory for markdown posts
  fs.mkdirSync(root, { recursive: true });

  const databaseId = process.env.DATABASE_ID;

  // 1) Fetch ALL current pages (for deletion detection)
  let response = await notion.databases.query({
    database_id: databaseId,
  });
  const allPages = response.results;
  while (response.has_more) {
    response = await notion.databases.query({
    database_id: databaseId,
    start_cursor: response.next_cursor,
  });
    allPages.push(...response.results);
  }

  // 2) Load previous state & build maps
  const state = loadState();
  // Sanitize any existing image cache to remove source URLs/tokens
  for (const pid of Object.keys(state.pages || {})) {
    const imgs = state.pages[pid]?.images;
    if (Array.isArray(imgs)) {
      state.pages[pid].images = imgs
        .filter(it => it && it.kind === 'local' && it.file && it.norm)
        .map(it => ({ kind: 'local', norm: it.norm, file: it.file }));
    }
  }
  // One-time full rebuild flag (no env var needed). If not yet done, process ALL pages once.
  const forceFullOnce = state.__full_rebuild_done !== true;
  const currentById = new Map(allPages.map(p => [p.id, p]));

  // 3) Determine changed pages (if first run, process all)
  const publishedPages = allPages.filter(p => getCheckbox(p.properties || {}, ["공개", "published", "Publish", "Visible", "Public"]));
  const changed = forceFullOnce ? publishedPages.slice() : [];
  if (!forceFullOnce) {
    for (const p of publishedPages) {
      const prev = state.pages[p.id]?.last_edited_time;
      const now = p.last_edited_time;
      if (!prev || new Date(now) > new Date(prev)) changed.push(p);
    }
  }

  // 4) Render only changed pages
  for (const r of changed) {
    const id = r.id;

    // date: prefer a custom date property named "날짜" if present, else created_time
    let date = moment(r.created_time).format("YYYY-MM-DD");
    const pdate = r.properties?.["날짜"]?.["date"]?.["start"];
    if (pdate) date = moment(pdate).format("YYYY-MM-DD");

    // title: use title property named "게시물"
    let title = id;
    const ptitle = r.properties?.["게시물"]?.["title"]; // array of rich text
    if (ptitle?.length > 0) title = ptitle[0]?.["plain_text"];

    // filename
    const safeTitle = (title || id).replaceAll(" ", "-");
    const fileBase = `${date}-${safeTitle}`;
    const ftitle = `${fileBase}.md`;
    const filePath = path.join(root, ftitle);

    // --- handle rename (old file -> new file) ---
    const prevMeta = state.pages[id];
    if (prevMeta?.outfile && prevMeta.outfile !== filePath) {
      // 1) remove previous markdown file
      try {
        if (fs.existsSync(prevMeta.outfile)) {
          fs.unlinkSync(prevMeta.outfile);
          console.log(`Removed (renamed): ${path.basename(prevMeta.outfile)}`);
        }
      } catch (e) {
        console.log("Rename cleanup (md) failed:", e?.message || e);
      }

      // 2) move/merge image folder: assets/img/<oldBase> -> assets/img/<fileBase>
      try {
        const oldBase = path.basename(prevMeta.outfile, ".md");
        const oldDir = path.join("assets/img", oldBase);
        const newDir = path.join("assets/img", fileBase);

        if (fs.existsSync(oldDir)) {
          if (!fs.existsSync(newDir)) {
            fs.renameSync(oldDir, newDir);
            console.log(`Moved images: ${oldBase} -> ${fileBase}`);
          } else {
            // merge file-by-file without overwriting
            for (const name of fs.readdirSync(oldDir)) {
              const src = path.join(oldDir, name);
              const dst = path.join(newDir, name);
              if (!fs.existsSync(dst)) fs.renameSync(src, dst);
            }
            try { fs.rmdirSync(oldDir, { recursive: true }); } catch {}
            console.log(`Merged images into: ${fileBase}`);
          }

          // update image manifest paths in state
          if (Array.isArray(prevMeta.images)) {
            const oldPrefix = `/assets/img/${oldBase}/`;
            const newPrefix = `/assets/img/${fileBase}/`;
            prevMeta.images = prevMeta.images.map(it =>
              it && it.kind === "local" && it.file
                ? { ...it, file: it.file.replace(oldPrefix, newPrefix) }
                : it
            );
            state.pages[id].images = prevMeta.images;
          }
        }
      } catch (e) {
        console.log("Rename cleanup (images) failed:", e?.message || e);
      }
    }

    // blocks → markdown
    const mdblocks = await n2m.pageToMarkdown(id);
    let md = n2m.toMarkdownString(mdblocks)["parent"];
    if (!md || md.trim() === "") {
      console.log(`Skip (empty): ${ftitle}`);
      continue;
    }

    // text transforms
    md = escapeCodeBlock(md);
    md = convertInlineEquationToBlock(md);
    md = undefinedReplacer(md);

    // image transforms (external kept, notion files downloaded)
    const prevImages = state.pages[id]?.images || [];
    const imgResult = await transformImagesInMarkdown(md, fileBase, prevImages);
    md = imgResult.md;

    // --- collect metadata for front matter ---
    const props = r.properties || {};
    const published = !!getCheckbox(props, ["공개", "published", "Publish", "Visible", "Public"]);
    const pin = !!getCheckbox(props, ["pin", "Pin", "핀", "고정", "고정핀"]);
    const tagsArr = getMulti(props, ["tags", "Tags", "태그"]);
    const catsArr = getMulti(props, ["categories", "Categories", "카테고리"]).concat(
      getSelectAsArray(props, ["category", "Category", "카테고리"]))
    const fmcatsArr = getMulti(props, ["fmcats", "FMCats", "FM Categories"]);
    const pcatsArr = getMulti(props, ["pcats", "PCats", "Parent Categories", "상위카테고리"]);
    const descText = getPlainText(props, ["description", "Description", "설명", "요약", "excerpt", "desc"]);

    const propImageUrl = getImageUrl(props, ["image", "Image", "이미지", "대표이미지", "썸네일", "thumbnail"]);

    const firstImg = extractFirstImage(md);
    let imageSource = propImageUrl || r.cover?.external?.url || r.cover?.file?.url || (firstImg?.url || null);

    let imageFinal = "";
    let imageAltFinal = "";
    if (imageSource) {
      imageFinal = await processImageURLForYaml(imageSource, fileBase, "cover");
      imageAltFinal = getPlainText(props, ["image_alt", "alt", "이미지 ALT", "이미지Alt", "이미지alt", "대체텍스트"]) || firstImg?.alt || title;
    }

    // --- YAML front matter ---
    const frontLines = [
      '---',
      `layout: post`,
      `title: "${escapeYAML(title)}"`,
      `date: ${date}`,
      `draft: ${(!published).toString()}`,
      `published: ${published.toString()}`,
      `pin: ${pin.toString()}`,
    ];
    if (imageFinal) {
      frontLines.push('image:');
      frontLines.push(`  path: "${escapeYAML(imageFinal)}"`);
      frontLines.push(`  alt: "${escapeYAML(imageAltFinal)}"`);
    }
    frontLines.push(`description: "${escapeYAML(descText)}"`);
    frontLines.push(`tags: ${yamlList(tagsArr)}`);
    frontLines.push(`categories: ${yamlList(catsArr)}`);
    frontLines.push('math: true');
    frontLines.push('---', '');
    const frontmatter = frontLines.join('\n');

    const finalContent = `${frontmatter}${md}
${mathjaxSnippet}`;

    // Write only if content changed
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

    // update state for this page
    // Save sanitized image manifest (no src)
    const sanitizedImages = (imgResult.images || [])
      .filter(it => it && it.kind === 'local' && it.file && it.norm)
      .map(it => ({ kind: 'local', norm: it.norm, file: it.file }));
    state.pages[id] = { last_edited_time: iso(r.last_edited_time), outfile: filePath, images: sanitizedImages };
  }

  // 5) Remove files for pages no longer in Notion (deleted/archived or 공개=false)
  if (allPages.length === 0) { console.log('Notion returned 0 pages; skip deletion to preserve existing _posts.'); } else {
    const aliveIds = new Set(publishedPages.map(p => p.id));
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
  }

  // 6) Save checkpoint
  state.__full_rebuild_done = true; // ensure full rebuild happens only once
  state.last_run = new Date().toISOString();
  saveState(state);
})();

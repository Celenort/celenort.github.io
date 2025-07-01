const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require("moment");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const mathjaxScript = `
<script>
  window.MathJax = {
    tex: {
      macros: {
        R: "\\\\mathbb{R}",
        N: "\\\\mathbb{N}",
        Z: "\\\\mathbb{Z}",
        Q: "\\\\mathbb{Q}",
        C: "\\\\mathbb{C}",
        proj: "\\\\operatorname{proj}",
        rank: "\\\\operatorname{rank}",
        im: "\\\\operatorname{im}",
        dom: "\\\\operatorname{dom}",
        codom: "\\\\operatorname{codom}",
        argmax: "\\\\operatorname*{arg\\,max}",
        argmin: "\\\\operatorname*{arg\\,min}",
        "\\{": "\\\\lbrace",
        "\\}": "\\\\rbrace",
        sub: "\\\\subset",
        sup: "\\\\supset",
        sube: "\\\\subseteq",
        supe: "\\\\supseteq"
      },
      tags: "ams",
      strict: false, 
      inlineMath: [["$", "$"], ["\\\\(", "\\\\)"]],
      displayMath: [["$$", "$$"], ["\\\\[", "\\\\]"]]
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"]
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
`;
// or
// import {NotionToMarkdown} from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

function escapeCodeBlock(body) {
  const regex = /```([\s\S]*?)```/g;
  return body.replace(regex, function (match, htmlBlock) {
    return "\n{% raw %}\n```" + htmlBlock.trim() + "\n```\n{% endraw %}\n";
  });
}
function convertInlineEquationToBlock(body) {
  const regex = /\n^[ \t]*\$\$\n([\s\S]*?)\n[ \t]*\$\$\n/gm;
  return body.replace(regex, function (match, equation) {
    return "\n{% raw %}\n$$\n" + equation.trim() + "\n$$\n{% endraw %}\n";
  });
}
function undefinedReplacer(body) {
  const regex = /undefined- ([\s\S]*?)/g;
  return body.replace(regex, function (match, block) {
    return "- " + block.trim();
  });
}

function replaceTitleOutsideRawBlocks(body) {
  const rawBlocks = [];
  const placeholder = "%%RAW_BLOCK%%";
  body = body.replace(/{% raw %}[\s\S]*?{% endraw %}/g, (match) => {
    rawBlocks.push(match);
    return placeholder;
  });

  const regex = /\n#[^\n]+\n/g;
  body = body.replace(regex, function (match) {
    return "\n" + match.replace("\n#", "\n##");
  });

  rawBlocks.forEach(block => {
    body = body.replace(placeholder, block);
  });

  return body;
}

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
  // ensure directory exists
  const root = "_posts";
  fs.mkdirSync(root, { recursive: true });

  const databaseId = process.env.DATABASE_ID;
  let response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "공개",
      checkbox: {
        equals: true,
      },
    },
  });

  const pages = response.results;
  while (response.has_more) {
    const nextCursor = response.next_cursor;
    response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: nextCursor,
      filter: {
        property: "공개",
        checkbox: {
          equals: true,
        },
      },
    });
    pages.push(...response.results);
  }

  for (const r of pages) {
    const id = r.id;
    // date
    let date = moment(r.created_time).format("YYYY-MM-DD");
    let pdate = r.properties?.["날짜"]?.["date"]?.["start"];
    if (pdate) {
      date = moment(pdate).format("YYYY-MM-DD");
    }
    // title
    let title = id;
    let ptitle = r.properties?.["게시물"]?.["title"];
    if (ptitle?.length > 0) {
      title = ptitle[0]?.["plain_text"];
    }
    //desc
    let desc = " ";
    let pdesc = r.properties?.["description"]?.["rich_text"];
    if (pdesc?.length > 0) {
      desc = pdesc[0]?.["plain_text"];
    }
    // alt
    let alt = " ";
    let palt = r.properties?.["alt text"]?.["rich_text"];
    if (palt?.length > 0) {
      alt = palt[0]?.["plain_text"];
    }
    //pin
    let pin = "false";
    let ppin = r.properties?.["pin"]?.["checkbox"];
    if(ppin) {
      pin = "true";
    }
    //thumb
    let thumb = true;
    let tthumb = r.properties?.["nothumb"]?.["checkbox"];
    if(tthumb) {
      thumb = false;
    }
    // tags
    let tags = [];
    let ptags = r.properties?.["태그"]?.["multi_select"];
    for (const t of ptags) {
      const n = t?.["name"];
      if (n) {
        tags.push(n);
      }
    }
    // categories
    let cats = [];
    let pcats = r.properties?.["카테고리"]?.["multi_select"];
    for (const t of pcats) {
      const n = t?.["name"];
      if (n) {
        cats.push(n);
      }
    }

    // frontmatter
    let fmtags = "";
    let fmcats = "";
    if (tags.length > 0) {
      fmtags += "\ntags: [";
      for (const t of tags) {
        fmtags += t + ", ";
      }
      fmtags += "]";
    }
    if (cats.length > 0) {
      fmcats += "\ncategories: [";
      for (const t of cats) {
        fmcats += t + ", ";
      }
      fmcats += "]";
    }
    const ftitle = `${date}-${title.replaceAll(" ", "-")}.md`;
    const mediadir = path.join("/assets/img", ftitle);
    let imagefm=``;
    if (thumb) {
      imagefm=`image:\n  path: 0.png\n  alt: ${alt}`;
    }
    const fm = `---
layout: post
date: ${date}
title: "${title}"${fmtags}${fmcats}
media_subpath: ${mediadir}
${imagefm}
description: ${desc}
pin: ${pin}
---

`;
    const mdblocks = await n2m.pageToMarkdown(id);
    let md = n2m.toMarkdownString(mdblocks)["parent"];
    if (md === "") {
      continue;
    }
    md = escapeCodeBlock(md);
    //md = replaceTitleOutsideRawBlocks(md);
    
    md = convertInlineEquationToBlock(md);
    md = undefinedReplacer(md);


    let index = 0;
    let edited_md = md.replace(
      /!\[(.*?)\]\((.*?)\)/g,
      function (match, p1, p2, p3) {
        const dirname = path.join("assets/img", ftitle);
        if (!fs.existsSync(dirname)) {
          fs.mkdirSync(dirname, { recursive: true });
        }
        const filename = path.join(dirname, `${index}.png`);

        axios({
          method: "get",
          url: p2,
          responseType: "stream",
        })
          .then(function (response) {
            let file = fs.createWriteStream(`${filename}`);
            response.data.pipe(file);
          })
          .catch(function (error) {
            console.log(error);
          });
        const imgname = `${index}.png`;

        let res;
        if (p1 === "") res = "";
        else res = `_${p1}_`;

        return `![${index++}](/${imgname})${res}`; // here is the place that we must edit.
      }
    );
    //edited_md = convertInlineEquationToBlock(edited_md);
    const finalContent = fm + edited_md + "\n" + mathjaxScript;
    fs.writeFile(path.join(root, ftitle), finalContent, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
})();

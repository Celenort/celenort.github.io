---
layout: post
title: "[기초회로이론] Chap 03 - Resistive Circuits"
date: 2023-12-09
draft: false
published: true
pin: false
description: ""
tags: []
categories: ["Lecture", "기초회로이론"]
math: true
---

> 📣 Disclaimer : Dorf’s Introduction to Electric Circuits Global Ed. 를 바탕으로 작성된 정리입니다


{: .prompt-info }


### 3.1 Kirchhoff’s Law

- node : places where elements are connecting together (shares same voltage)
- branch : (=circuit element, every two-terminal elements) that shares same current.

<script>
  window.MathJax = {
    tex: {
      macros: {
        R: "\\mathbb{R}",
        N: "\\mathbb{N}",
        Z: "\\mathbb{Z}",
        Q: "\\mathbb{Q}",
        C: "\\mathbb{C}",
        proj: "\\operatorname{proj}",
        rank: "\\operatorname{rank}",
        im: "\\operatorname{im}",
        dom: "\\operatorname{dom}",
        codom: "\\operatorname{codom}",
        argmax: "\\operatorname*{arg\,max}",
        argmin: "\\operatorname*{arg\,min}",
        "\{": "\\lbrace",
        "\}": "\\rbrace",
        sub: "\\subset",
        sup: "\\supset",
        sube: "\\subseteq",
        supe: "\\supseteq"
      },
      tags: "ams",
      strict: false, 
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]]
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"]
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

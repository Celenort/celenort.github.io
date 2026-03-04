---
layout: post
title: "[신호 및 시스템] Lec 01 - Introduction"
date: 2026-03-03
draft: false
published: true
pin: false
description: ""
tags: ["Signal", "System"]
categories: ["Lecture", "신호 및 시스템"]
math: true
---

### Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 박성준 교수님의 신호 및 시스템 (26 Spring) 강의록입니다.


### Required background knowledge

- Calculus
- Trigonometric identities
- Complex numbers
- Linear algebra

### What is Signal?

- Signal : Mathematical function of one or more independent values
- Independent variables : $x, y, t$, etc …
- In this lecture we will focus on 1-D independent variables
- practical answer : anything we define (or interpret) as a signal
	- Applied as input or output of systems

### What is System?

- Systems are described from input/output perspective
- A system can be defined as relation of I/O
- Can be represented as a function that maps a function to another function
- eg) RLC / Damper-Spring system

### Practical usage of Signals and Systems

- Noise removal
- Image deblurring

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

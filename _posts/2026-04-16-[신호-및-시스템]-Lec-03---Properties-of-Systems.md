---
layout: post
title: "[신호 및 시스템] Lec 03 - Properties of Systems"
date: 2026-04-16
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


## Linearity

- For two valid inputs $x_1(t), x_2(t)$ and their respective output $y_1(t) = H\{x_1(t)\}$, $y_2(t) = H\{x_2(t)\}$, a linear system satisfy below for arnitary $\alpha, \beta$

{% raw %}
$$
H\{\alpha x_1(t) + \beta x_2(t)\} = \alpha y_1(t) + \beta y_2(t)
$$
{% endraw %}



## Time-invariance

- A system is time invarient if it satisfies equation for any time shift $t_0 (n_0)$

{% raw %}
$$
y(t-t_0) = H\{x(t-t_0)\}
$$
{% endraw %}


- $y(t-t_0)$ : substitute $t \leftarrow t-t_0 $ for all $t$ in $y(t)$
- $H\{x(t-t_0)\}$ : only put $x(t-t_0)$ for system’s input
- The system is time-invarient if the system is commutative with time delay

## Causality

- A system is causal if the output at any time depends only on values of the input at the present time and in the past
- If the output $y(t)$ uses $x(t') \ t'>t$ for any instant of time $t$, the system is not causal

## BIBO stability

- Bounded input bounded output stable
- A system is BIBO stable if the input to the system is bounded, then the output is also bounded.
- for any input $x(t)$ that satisfies $\vert x(t) \vert < B$ for all time $t$ with a positive $B$, then there exists a constant $B_y>0$ s.t. $\vert y(t)\vert < B_y$ for all $t$

## Memoryless

- A system is memoryless if its output for each value of the independent time variable is dependent only on the input at that same time
- If the output $y(t) $ uses only $x(t)$ for any time $t$, the system is memoryless

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

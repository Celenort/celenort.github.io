---
layout: post
title: "[기초회로이론] Chap 01 - Electric Circuit Variables"
date: 2026-03-05
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-03-05-[기초회로이론]-Chap-01---Electric-Circuit-Variables/0-c2ca448d93.png"
  alt: "[기초회로이론] Chap 01 - Electric Circuit Variables"
description: ""
tags: []
categories: ["Lecture", "기초회로이론"]
math: true
---

> 📣 Disclaimer : Dorf’s Introduction to Electric Circuits Global Ed. 를 바탕으로 작성된 정리입니다


{: .prompt-info }


### 1.2 Electric Circuits and Current

- Mostly considers a general ‘two-terminal electrical element’

{% raw %}
$$
i={dq \over dt}
$$
{% endraw %}


- DC (direct current) : current of constant magnitude (also expresses terms that are invarient over time. eg : DC voltage)
- AC (alternating current) : Current that changes its sign (eg : sinusodial current)

### 1.3 Systems of Units

- SI base units : Length($m$), Mass($kg$), Time($s$), Electric current($A$), Thermodynamic temperature($K$)
- Derived units : Frequency(Hz, $s^{-1}$), Work/Energy($J$, $N\cdot m$), Power($W$, $J/s$), Electrical Charge($C$, $A\cdot s$), Electric potential($V$, $W/A$), Electric resistance($\Omega$, $V/A$), Electrical conductance($S$(siemens), $A/V$), Electric capacitance($F$, $C/V$)
- SI prefixes :  tera/giga/mega/kilo/ o / milli / micro / nano / pico … ($\times 10^3$)

### 1.4 Voltage

- Direction of voltage is given by its polarities (+, -) Plus to minus.
- $v_{+-}$, recall the battery

{% raw %}
$$
v={dw\over dq}
$$
{% endraw %}



### 1.5 Power and Energy


{% raw %}
$$
p={dw\over dt}=vi
$$
{% endraw %}


- if the direction of current and direction of (+  to - terminal which we assigned previously), is the power **received** by the element.
- Conversely, it is the power **supplied** by the element

![](/assets/img/2026-03-05-[기초회로이론]-Chap-01---Electric-Circuit-Variables/0-c2ca448d93.png)


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

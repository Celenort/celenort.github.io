---
layout: post
title: "[기초회로이론] Chap 02 - Circuit Elements"
date: 2026-03-10
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-03-10-[기초회로이론]-Chap-02---Circuit-Elements/3-c2ca448d93.png"
  alt: "[기초회로이론] Chap 02 - Circuit Elements"
description: ""
tags: []
categories: ["Lecture", "기초회로이론"]
math: true
---

> 📣 Disclaimer : Dorf’s Introduction to Electric Circuits Global Ed. 를 바탕으로 작성된 정리입니다


{: .prompt-info }


### 2.2 Engineering Linear Models

- A **linear element** satisfies the properties of both **superposition** and **homogeneity**
- superposition : if $i_1 \rightarrow v_1$ / $i_2 \rightarrow v_2$, it is necessary that the exitation $i_1+i_2$ will provide $v_1+v_2$.
- homogeneity (Scalability) : $i\rightarrow v$, $ki\rightarrow kv$
- Linearity does not necessarily mean 1st order polynomial

### 2.3 Active and Passive Circuit Elements

- Passive element : consumes energy (absorbs)
- Active element : supplies energy
- Same convention of sign of when we considered before

### 2.4 Resistors 

- Always passive element (can be active if and only if R<0 but it is impossible)

{% raw %}
$$
R={\rho L \over A}
$$
{% endraw %}



defined as constant resistance R, as Ohm’s Law, $v=Ri$, as we all know.

- Ohm’s law only applies at Ohmic substances
- Resistance (ratio of V over i) slightly increases on AC current because in higher frequency, electrons tend to move on the surface of the conductor which decreases effective area A
- siemens (S) : Ohm’s law can also be written as : $i=Gv$, where $G$ is conductance (or mhos, inverted $\Omega$ symbol but seldomly used.
- $G={1\over R}$

### 2.5 Independent Sources

- voltage or current independent source is a generator not dependent on other circuit variables.

	![](/assets/img/2026-03-10-[기초회로이론]-Chap-02---Circuit-Elements/3-c2ca448d93.png)

- Independent voltage source. $i(t)$can be $-\infty$ to $+\infty$

	![](/assets/img/2026-03-10-[기초회로이론]-Chap-02---Circuit-Elements/3-c2ca448d93.png)


Independent current source. $v(t)$ can be any value.


Every independent source is ideal, conceptual.

- Some batteries can be modeled as independent voltage source within certain conditions (small range of current)
- Short circuit(Closed) : Special case of ideal voltage source (no resistance)

	![](/assets/img/2026-03-10-[기초회로이론]-Chap-02---Circuit-Elements/3-c2ca448d93.png)

- Open circuit : Special case of ideal current source ($v(t)$can be any value)

	![](/assets/img/2026-03-10-[기초회로이론]-Chap-02---Circuit-Elements/3-c2ca448d93.png)


### 2.6 Voltmeters and Ammeters

- in case of ideal ammeter and voltmeter, it can be considered as ideal short / open circuit, respectively.
- Black (or dark) pole denotes the ‘minus’ polarity

### 2.7 Dependent Sources

- Voltage or current of one circuit element is proportional to volt or current of second circuit element.

	![](/assets/img/2026-03-10-[기초회로이론]-Chap-02---Circuit-Elements/3-c2ca448d93.png)


CCCS, VCVS, VCCS, CCVS

- for some three-terminal element can be dissected (or interpreted) with combination of two-terminal elements including dependent sources.

### 2.8 Resisitive Transducers

- transducers convert physical quantities to electrical quantities. (a.k.a. sensor)

### 2.9 Switches

- SPST(Single pole single throw) switch : open / close state
- SPDT(Single pole double throw) switch : Break before make, Make before break switches
- make before break switch is often used when circuit is not defined when the switch passes thru.

	![](/assets/img/2026-03-10-[기초회로이론]-Chap-02---Circuit-Elements/3-c2ca448d93.png)


	![](/assets/img/2026-03-10-[기초회로이론]-Chap-02---Circuit-Elements/3-c2ca448d93.png)


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

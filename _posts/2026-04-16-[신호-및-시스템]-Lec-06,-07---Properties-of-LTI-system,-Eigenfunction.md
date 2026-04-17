---
layout: post
title: "[신호 및 시스템] Lec 06, 07 - Properties of LTI system, Eigenfunction"
date: 2026-04-16
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-04-16-[신호-및-시스템]-Lec-06,-07---Properties-of-LTI-system,-Eigenfunction/0-0046315fba.png"
  alt: "[신호 및 시스템] Lec 06, 07 - Properties of LTI system, Eigenfunction"
description: ""
tags: ["Signal", "System"]
categories: ["Lecture", "신호 및 시스템"]
math: true
---

### Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 박성준 교수님의 신호 및 시스템 (26 Spring) 강의록입니다.


### Properties of convolution

- Commutative property

{% raw %}
$$
x[n] * h[n] = h[n] * x[n]
$$
{% endraw %}



{% raw %}
$$
x(t) * h(t) = h(t) * x(t)
$$
{% endraw %}



### DT LTI system

- Make multiple copies of $x[n]$, give delays to the signal, add scalar multiplication with impulse reseponse of corresponding given delay, summation of all weighted delayed input is the output $y[n]$

![](/assets/img/2026-04-16-[신호-및-시스템]-Lec-06,-07---Properties-of-LTI-system,-Eigenfunction/0-0046315fba.png)

- Distributive property

{% raw %}
$$
x[n] * (h_1[n] + h_2[n]) = x[n]* h_1[n] + x[n]*h_2[n]
$$
{% endraw %}


- Associative property : Don’t need to care about the order of calculation

### LTI systems without memory

- Application to impulse response :

{% raw %}
$$
\begin{aligned}h[n] = 0 \text{ for }n\neq 0 \\ h(t)= 0 \text{ for }t\neq 0 \end{aligned}
$$
{% endraw %}


- Shape of impulse response must be impulse (since input of impulse response is impulse)

### Causality of LTI systems

- Application to impulse response :

{% raw %}
$$
\begin{aligned}h[n] = 0 \text{ for }n< 0 \\ h(t)= 0 \text{ for }t< 0 \end{aligned}
$$
{% endraw %}



### Invertibility of LTI systems

- If LTI system is invertible, then its inverse system is also LTI and also $g(t) * h(t) = \delta(t)$
- Think of Invertibility of function. i.e. $y=cos(t), y=x^2$ is not invertible

### Stability of LTI systems

- Sum of impulse response over time is finite, the system is BIBO stable

{% raw %}
$$
\sum_{k=-\infty}^\infty \vert h[k] \vert <\infty, \int_{-\infty}^\infty \vert h(\tau) \vert d\tau <\infty
$$
{% endraw %}


- Proof :

{% raw %}
$$
\begin{aligned} &\text{if } \vert x[k] \vert < B \text{ for all } n \\ &\vert y[n]\vert = \vert \sum_{k=-\infty}^\infty h[k]x[n-k] \vert \leq \sum_{k=-\infty}^\infty \vert h[k]\vert \vert x[n-k]\vert \leq B \sum_{k=-\infty}^\infty \vert h[k]\vert \end{aligned}
$$
{% endraw %}


- Therefore $\sum_{k=-\infty}^\infty \vert h[k]\vert <\infty$ is a sufficient condition for stability

{% raw %}
$$
\begin{aligned} \text{For any }\vert h[k]\vert \text{ such that } \sum_{k=-\infty}^\infty\vert h[k]\vert=\infty \\ \text{consider } x[n]=\begin{cases}0, & h[n]=0 \\ {h[-n] \over \vert h[-n] \vert} & \text{otherwise}\end{cases} \end{aligned}
$$
{% endraw %}



{% raw %}
$$
\begin{aligned}y[n] &= \sum_{k=-\infty}^\infty h[k]x[n-k] = \sum_{k=-\infty}^\infty h[k] {h[k-n] \over \vert h[k-n] \vert } \\ y[0] &= \sum_{k=-\infty}^\infty \vert h[k] \vert = \infty\end{aligned}
$$
{% endraw %}


- Therefore $\sum_{k=-\infty}^\infty \vert h[k] \vert <\infty$ is a necessary condition

### (Complex) sinusoidal input to LTI system

- Let $x_1(t) = e^{j\omega t}, x_2(t) = e^{j\omega (t+a)}$
- Due to linearity,

$y_2(t) = y_1(t+a) = e^{j\omega a} y_1(t)$ ← Plug in $t=0$


$y_1(a) = e^{j\omega a} y_1(0), \therefore y_1(t) = y_1(0) e^{j\omega t}$


### Eigenfunctions of LTI system

- Nonzero function $\phi(t)$ such that $H\{\phi(t)\} = \lambda \phi(t)$ for some scalar eigenvalue $\lambda$,
- $\phi(t)$ : Eigenfunction, $\lambda$ : Eigenvalue for corresponding eigenfunction
- $\lambda = y(0)$ is the corresponding eigenvalue for $x(t) = e^{j\omega t}$

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

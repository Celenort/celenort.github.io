---
layout: post
title: "[컴선설] Lec 04-2 Least Square solution"
date: 2026-04-16
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-04-16-[컴선설]-Lec-04-2-Least-Square-solution/0-6445c1625b.png"
  alt: "[컴선설] Lec 04-2 Least Square solution"
description: ""
tags: ["C++", "Linear Algebra"]
categories: ["Lecture", "컴선설"]
math: true
---

# Three methods of approaching least-square


## Partial derivative

- Let error  function as total squared sum of residual of each term

{% raw %}
$$
E(a_0, a_1, a_2) = [y_1-(a_0+a_1x_1+a_2x_1^2)]^2+ [y_2-(a_0+a_1x_2+a_2x_2^2)]^2+[y_3-(a_0+a_1x_3+a_2x_3^2)]^2+[y_4-(a_0+a_1x_4+a_2x_4^2)]^2
$$
{% endraw %}


- Each partial derivative term must be zero

{% raw %}
$$
{\partial E(a_0, a_1, a_2) \over \partial a_i} = 0
$$
{% endraw %}


- Collecting all results and construct a matrix

![](/assets/img/2026-04-16-[컴선설]-Lec-04-2-Least-Square-solution/0-6445c1625b.png)


### Matrix

- Construct a matrix $A$ with given condition

![](/assets/img/2026-04-16-[컴선설]-Lec-04-2-Least-Square-solution/1-8c509e783c.png)


{% raw %}
$$
A^TA{\bf x} = A^T{\bf b}
$$
{% endraw %}



### Likelihood

- Let the likelihood of Follows Normal distribution

{% raw %}
$$
L(a_0, a_1) = N(y_1, \sigma^2)N(y_2, \sigma^2) = \alpha_1 \exp(-{1\over 2}({y-y_1\over \sigma})^2)\alpha_2 \exp(-{1\over 2}({y-y_2\over \sigma})^2)
$$
{% endraw %}


- Maximum likelihood → maximizes probability : minimizes exponential term

### Weighted maximum likelihood approach

- Each term $f(x_i) \sim N(y_i, \sigma_i^2)$ (with different stdev
- Consider a matrix $W$

{% raw %}
$$
W = \text{diag}(1/\sigma_1^2, 1/\sigma_2^2, \cdots, 1/\sigma_n^2)
$$
{% endraw %}



{% raw %}
$$
A^TWA{\bf x} = A^T W {\bf b}
$$
{% endraw %}


- which is…

![](/assets/img/2026-04-16-[컴선설]-Lec-04-2-Least-Square-solution/2-29c8fabda0.png)


with all sigma must be changed to sigma^2 


$\sigma_i \rightarrow \sigma_i^2$


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

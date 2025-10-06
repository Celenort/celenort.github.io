---
layout: post
title: "[동역학] Tangential, Normal components of moving particle"
date: 2022-09-14
draft: false
published: true
pin: false
image:
  path: "/assets/img/2022-09-14-[동역학]-Tangential,-Normal-components-of-moving-particle/0-accf102caa.jpg"
  alt: "[동역학] Tangential, Normal components of moving particle"
description: ""
tags: ["동역학"]
categories: ["Lecture", "기타"]
math: true
---

## Tangential and normal components


{% raw %}
$$
\boldsymbol{v} = v \boldsymbol{e_t} \\
\boldsymbol {a} = {dv \over dt} \boldsymbol{e_t} + {v^2 \over \rho} \boldsymbol{e_n}
$$
{% endraw %}


- 증명을 위해, $d\vec{e_t} / d\theta$ 를 구해보자.
- $\Delta \theta$ 동안 tangential 방향의 unit vector를 이용해 삼각형을 만들면, 두 벡터의 차가 $\Delta e_t$임.

{% raw %}
$$
\Delta e_t = 2\sin{\Delta \theta / 2}
$$
{% endraw %}



{% raw %}
$$
\lim\limits_{\Delta \theta \rightarrow 0} {\Delta \vec{e_t} \over \Delta \theta} = \lim\limits_{\Delta \theta \rightarrow 0} {\sin{\Delta \theta / 2} \over \Delta \theta / 2} \vec{e_n} = \vec{e_n}
$$
{% endraw %}



{% raw %}
$$
\vec {e_n} = {d\vec{e_t}\over d\theta}
$$
{% endraw %}



Proof :


{% raw %}
$$
\vec a = {d\vec{v} \over dt} = {dv\over dt} \vec{e_t} + v {d\vec{e_t} \over dt}
$$
{% endraw %}



{% raw %}
$$
= {dv\over dt} \vec{e_t} + v {d\vec{e_t} \over d\theta} {d\theta \over ds} {ds \over dt}
$$
{% endraw %}



by geometrical insight,


{% raw %}
$$
\rho d\theta = ds
$$
{% endraw %}



{% raw %}
$$
\vec{a}= {dv\over dt} \vec{e_t} + v \cdot {1\over \rho} \cdot v \cdot \vec{e_n}
$$
{% endraw %}



{% raw %}
$$
\therefore \vec{a} = {dv \over dt} \vec{e_t} + {v^2\over \rho} \vec{e_n}
$$
{% endraw %}



### Tangential and Normal compoenets in 3-dimension


{% raw %}
$$
\vec{e_b} = \vec{e_t}\times \vec{e_n}
$$
{% endraw %}



{% raw %}
$$
\vec{e_b} : \text{binormal}
$$
{% endraw %}



## Polar Coordinate x, v, a

- Radial 방향과 theta가 커지는 방향을 각각 $\vec{e_r} ,\vec{e_\theta}$라고 하자.
- 삼각형을 그려 벡터의 뺄셈을 생각해 보면,

{% raw %}
$$
{d \vec{e_r} \over d\theta} = \vec{e_\theta}, {d\vec{e_\theta} \over d\theta} = -\vec{e_r}
$$
{% endraw %}



{% raw %}
$$
\boldsymbol{x} = r\vec{e_r}
$$
{% endraw %}



{% raw %}
$$
\boldsymbol{v} = {d\boldsymbol{x}\over dt} = \dot{r} \vec{e_r} + r\dot{e_r}
$$
{% endraw %}



{% raw %}
$$
\dot{e_r} = {d\vec{e_r} \over d \theta} {d\theta \over dt} = \dot{\theta} \cdot \vec{e_\theta}
$$
{% endraw %}



{% raw %}
$$
\therefore \boldsymbol{v} = \dot{r} \vec{e_r} + r\dot{\theta} \vec{e_\theta}
$$
{% endraw %}



같은 방법으로,


{% raw %}
$$
\vec{a} = {d \vec{v} \over dt} = \ddot{r} \vec{e_r} + \dot{r} \dot{e_r} + \dot{r} \dot{\theta} \vec{e_\theta} + r\ddot{\theta} \vec{e_\theta} + r\dot{\theta} \dot{e_\theta}
$$
{% endraw %}



{% raw %}
$$
= \ddot{r} e_r + \dot{r}\dot{\theta} e_\theta + \dot{r} \dot{\theta} e_\theta + r\ddot{\theta}e_\theta - r{\dot{\theta} }^2 e_r \\ = (\ddot{r}-r{\dot{\theta } }^2 )e_r + (r\ddot{\theta}+2\dot{r}\dot{\theta}) e_\theta
$$
{% endraw %}



![](/assets/img/2022-09-14-[동역학]-Tangential,-Normal-components-of-moving-particle/0-accf102caa.jpg)


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

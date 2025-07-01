---
layout: post
date: 2021-12-06
title: "[일반화학] Lec 08 - Chemical Equilibrium"
tags: [화학, 평형상수, Van't Hoff equation]
categories: [Lecture, 일반화학]
media_subpath: /assets/img/2021-12-06-[일반화학]-Lec-08---Chemical-Equilibrium.md
image:
  path: 0.png
  alt:  
description:  
pin: false
---


## Chemical Equilibrium


![0](/0.png)

- 농도 변하는 부분 : Potentially reversible 하지만 실제로는 irreversible
- 평형 도달 : Foward, Reverse 반응의 반응속도가 동일할 때 평형에 도달했다고 간주
- 평형상태에서 반응속도가 0인 것은 아님. 정, 역반응의 생성속도가 동일해 평형상태에 도달한 것 처럼 보임(동적 평형)

### 평형 상수 (Equilibrium Constant)


![1](/1.png)

- 평형상수 = 평형에서의 농도의 계수 제곱의 비 (몰농도 단위) 온도에 대한 Term이므로 온도도 기입.
- Kc (농도 평형상수), Kp (압력 평형상수) 는 관계 있으며, $RT^n$배, n=반응물 계수합 - 생성물 계수합
- 왜 저런 식이 나왔냐 : 열역학적으로 Gibbs Free Energy가 다른 pressure에서 어떻게 되는지를 정리하면 됨. (기체)

### Solid, Liquid에서의 Equilibria

- 고체, 액체의 경우 몰농도에 비례하는 Term이 아님. 항상 1로 일정. (포함시키지 않는다고 생각)

### 수용액에서의 G 값의 계산


{% raw %}
$$
G_{A(aq), m}(p) = G_{A(aq), m}^0 + RTln({[A]\over c_0})
$$
{% endraw %}


- Pure 한 상태의 증기압 평형 :

{% raw %}
$$
G_{A, m}^* (l) = G_{A, m}^0 (g)+RTln({p_A^*\over p})
$$
{% endraw %}


- Impure 한 상태의 증기압 평형 (pure 한 상태보다 증기압 감소)

{% raw %}
$$
G_{A, m} (l) = G_{A, m}^0 (g)+RTln({p_A\over p})
$$
{% endraw %}


- 정리하면 : $G_{A, m} (l) = G_{A, m}^* (l)+RTln(\chi_A)$
- 순수한 수용액과 용액의 Gibbs Free Energy 차이는 RTln 몰분율

### Q : Reaction Quotient

- Q < K : 정반응
- Q = K : 평형
- Q > K : 역반응

### Van’t Hoff Equation


{% raw %}
$$
ln(K(T)) = -{\Delta H_{rxn}\over R} \cdot {1\over T} + \text{const}
$$
{% endraw %}



![2](/2.png)

- 기울기에 $ΔH_{rxn}$ 이 포함되어 있으므로, 발열일 경우 slope 양수, 흡열일 경우 slope 음수

### 용해도 차이를 이용한 추출


![3](/3.png)



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

---
layout: post
title: "[일반화학] Lec 01 - Fundamentals"
date: 2021-10-23
draft: false
published: true
pin: false
image:
  path: "/assets/img/2021-10-23-[일반화학]-Lec-01---Fundamentals/0-5c20dcbcfb.png"
  alt: "[일반화학] Lec 01 - Fundamentals"
description: ""
tags: ["화학"]
categories: ["Lecture", "일반화학"]
math: true
---

## 원자 구성요소의 발견 역사


### 전자의 발견

- 음극선에 전압을 걸어 원자가 전자와 다른것들로 이루어졌다는 사실 발견
- 음극선의 전하 부호 확인 : 전기장을 인가하여 +극쪽으로 쏠림
- CRT schematic : 음극선의 방향, B, E의 방향이 서로 직교하도록 하여 전자가 직진하도록 함.

![](/assets/img/2021-10-23-[일반화학]-Lec-01---Fundamentals/0-5c20dcbcfb.png)


### 전자 전하(비전하)의 정량적 측정

- 밀리컨의 기름방울 실험 : 기름방울을 분사하여 전기장이 있는 판 속에 넣음

![](/assets/img/2021-10-23-[일반화학]-Lec-01---Fundamentals/1-278cadb5c5.png)

- X-Ray에 의해 기름방울에 전하가 대전됨.
- Mg=QE라는 식에 의해 모든 전하량 Q는 기본전하량 $1.602 × 10^{-19}C$의 배수라는 사실 확인함. 즉 전자의 전하량을 구함.

### 원자핵에 관한 가설 : J.J Thomson’s ‘plum pudding model’

- 전자는 발견됨, 원자가 중성이므로 (+) 전하를 띈 원자핵을 생각하면서, 푹신한 (+)극 띈 원자핵에 -극 띄는 전자가 박혀있다고 가설 세움

### 러더퍼드의 알파입자 산란실험

- 알파입자(헬륨 원자핵)을 얇은 금속박에 산란

![](/assets/img/2021-10-23-[일반화학]-Lec-01---Fundamentals/2-bd473197c4.png)

- 극히 일부의 알파입자가 산란, 혹은 되튕겨져 나옴
- 원자에서 원자핵이 차지하는 부피는 극히 적고, 밀도는 매우 크다는 사실을 알게 됨

### 현대의 원자론

- Atom Contains
1. electrons
2. protons : 질량은 electron과 거의 10000배 가량 차이가 남 / $H^+$을 의미.
3. neutrons : no electrical charge / neutron이 미세하게 proton보다 질량이 큼

## 원자론 개요


### 원자의 표기법


{% raw %}
$$
{}^Z _AX
$$
{% endraw %}


- A : Mass number, 중성자 + 양성자의 수
- z : Atomic number, 양성자 수
- X : Element Symbol, 원소기호

### 동위원소 (isotope)

- 양성자수, 전자수는 같으나 중성자수가 다름. 화학적 성질은 거의 대부분 같고, 이동특성이 다름.
- 구별이 안되므로 고르게 존재한다고 봄.
- 수소 : 중수소-Deuterium, 삼중수소-Tritium
- 탄소 : Carbon-13 / 탄소 동위원소 측정법 (1:99)
	- 태양 복사에 의해 지표 상에서는 비율이 유지,
	- 유기물 내부에서는 비율이 점차 감소.

### 원자 질량의 정의 (Atomic Mass Unit, AMU)

- Carbon-12의 질량을 12amu로 정의.
- ex) Carbon-13의 경우 중성자가 1개 더 많으므로 13.003355amu임.
- 원자의 평균 질량은 자연에서의 분포 비율을 곱하여 가중평균으로 나타냄.
- ex) Carbon의 평균 질량은 98.89% x 12 + 1.11% x 13.0034 = 12.01 amu
- ex2) Br : $^{79}Br : 50.7\%  \ ^{81}Br : 49.3\%$ 이므로 Br의 원자량은 80이라고 함.

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

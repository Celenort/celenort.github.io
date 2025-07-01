---
layout: post
date: 2022-04-17
title: "[선형계획법] Simplex method"
tags: [Linear programming, Simplex method, ]
categories: [Lecture, 기타, ]
media_subpath: /assets/img/2022-04-17-[선형계획법]-Simplex-method.md

description:  
pin: false
---


### Simplex Algorithm (Linear Programming)

- 목적함수 $ Z = c_1 x_1 + c_2 x_2 + \cdot\cdot\cdot + b $ 을 Maximize, Minimize하는 것이 목표.
- Minimize하는 경우는 $ Z' = -Z $ 를 이용하여 -Z를 최대화하는 문제로 바꾸기.
- Constraint를 행렬의 row로 표현하는 것이 핵심.
- 기본조건은 $ x_1, x_2, x_3 $ 등은 모두 0보다 크거나 같아야 함
- 첫번째 row는 목적함수를 집어넣는데, $ Z - c_1 x_1 - c_2 x_2 - \cdot\cdot\cdot - b $ 형식으로 b가 있어도 -로 만들어주는게 포인트.
- Constraint : $ a_1 x_1 + a_2 x_2 = b_1 (a_1, a_2,  b_1) $
- Constraint : $ a_1 x_1 + a_2 x_2 \geq b_2 $ 의 경우 Slack Variable을 도입하여 Equality로 만들어주기.
- 만약 Inequality의 방향이 반대라면 -1을 곱하여 방향을 바꾸어 주고, $b_n$ 즉 상수는 Inequality의 우변에 남기는 것이 포인트
- 이후 Augmented Matrix를 만들고, 이를 Simplex Tableu라고 부름. 여기서 맨 위의 목적함수 식에서 음의 계수를 가지는 애를 다 양의 계수나 0으로 바꾸면 완성.

### Basic, Non-basic

- Basic column 이란 한개의 element 제외하고 모든 Column의 element가 0인 열. 그렇지 않으면 Non-basic

### Feasible

- 모든 Constraint들을 만족하는 변수들의 tuple solution
- Feasible 중에서 n var, m equation에서 n-m개의 변수 값이 0인 경우 basic Feasible solution
- Some Optimal Solution (몇몇 최적해) 들은 Basic Feasible SOlution이다. 즉 Basic Feasible solution을 잘 찾아봤을 때 그 중에 옵티멀 한 솔루션이 존재한다는 뜻.

### 과정

1. Check : Nonbasic var = 0, Basic var : b/a_i 하였을 때 나오는 원래의 var들이 feasible한지. 만약 Feasible Solution이 아니라면 artificial Var를 도입해야함. Feasible Solution이 아닌걸 체크하려면, 도입한 slack variable의 값이 음수가 나올 경우 feasible area에 안들어간것이다. (애초에 처음에는 slack var만 basic이고 원래 변수는 nonbasic인게 맞음.)
2. 1st row에서 음수중 가장 절댓값 큰 Column을 택한 후 각 row 별로 b/a_i를 하고, 그중 가장 작은값(절댓값이 아니라 음수여도 음수 택함.) 을 Pivot으로 택한 후, 해당 Column에 대해서 Gauss Elimination을 진행.
3. 이후 Basic column의 Var의 값으로 목적함수에 대입해 Z를 찾아냄. Nonbasic이면 0. 이 때 Basic인데도 0인 경우, 즉 b=0이 된 경우 (다른 말로 n variable, m equation이면, n-m개의 0이 나와야되는데 그 이상의 0이 나온 경우) : Degenerated Case로 이동.
4. 여전히 음수인 1st row의 원소가 있다면 2를 반복.

### 초깃값이 Feasible SOlution이 아닌 경우

- 필히 1개의 Constraint를 만족하지 못해서 해당 문제가 생겼을 것.
- 예를 들어 $ c_1 x_1 + c_2 x_2 + y_1 = b$  (y는 slack var) 에서 문제가 생겼을 경우 먼저 y에 대해서 식을 정리한다.
- 그 다음 $ y_1 = b - (c_1 x_1 + c_2 x_2) + k_1 $ (k는 artificial var)을 대입하여 $y_1$이 음수가 되지 않도록 한다.
- 그다음 $y_1$에 대한 row를 추가하고, 목적함수 Z를 Z 틸다로 바꿔줘야 한다.
- $ \tilde Z = Z-My_1 $ : M은 매우 큰 양수.
- 이 때 유의할 점은 Z틸다 역시 Z를 표기할 떄 처럼 표시해줘야 한다는 것이다. 첫번째 row를 Z틸다에 대한 식으로 바꿔준 다음,
- 맨 아래에 artificial Var를 추가한 식에 대한 row를 추가해준다.
- 이후 위를 반복하는데, 당연히 M과 $y_1$은 추가한 변수이기 떄문에 얘네가 없어지면서 초기값이 feasible area로 들어가는 것이 목표이다.
- 선택할 때 새로 추가한 애 말고 걔랑 비슷한 row ($y_1$이 0이고 나머지는 똑같은 row의 원소)를 Pivotting 하자.
- 이렇게 Pivot하면 $y_1$ column과 맨아래 추가한 row가 둘의 교집합 제외하고 전부 0으로 바뀐다. 또한 M이 들어갔던 목적함수의 식 또한 모두 M이 없어진 채로 소거된다. 이 다음 2 반복.

### Degenerated Solution

- 일단 한 단 계 진행 → 여전히 Degenerate할듯?
- 이 상태에서 한단계 진행하되, Degenerate의 이유가 됐던 Row가 아닌 다른 Row를 Pivot 한다. (했던거 그대로 하면 거기 짱박힐듯.)


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
        argmin: "\\operatorname*{arg\,min}"
      },
      tags: "ams",
      strict: false
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"]
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

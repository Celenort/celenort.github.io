---
layout: post
date: 2023-12-09
title: "[제어공학개론] Lec 05 - Transfer function to S.S representation"
tags: [control, lecture-note, linear algebra, system, ]
categories: [Electrical Engineering, control theory, ]
media_subpath: assets/img/2023-12-09-[제어공학개론]-Lec-05---Transfer-function-to-S.S-representation.md
image:
  path: 0.png
  alt:  
description: 제어공학에서 전달 함수(T.F)를 상태 공간(S.S) 표현으로 변환하는 방법을 설명하며, 예시로 주어진 T.F를 통해 상태 공간 표현의 행렬 A, B, C, D를 도출합니다. 또한, 분자 다항식이 포함된 경우와 몫이 있는 경우의 처리 방법을 다루고, 행렬의 전치가 T.F에 미치는 영향을 설명합니다.
pin: false
---


{% raw %}


## conversion of transfer function to state-space representation (s.s Realization)

- How to convert transfer function to state-space representation?

> $\text{given, } T(s) = \frac{2}{s^3+3s^2+2s-1}$  
> $y^{(3)} + 3\ddot y + 2 \dot y - y = 2 u$  
> $\text{let } x_1= y, x_2 = \dot y, x_3 = \ddot y$

- ss representation of T. F

> $\dot x_1 = x_2, \dot x_2 = x_3, \dot x_3 = -3x_3-2x_2+x_1+2u$  
> $A = \begin{bmatrix}0 & 1 & 0\\ 0 & 0 & 1 \\ 1 & -2 & -3 \end{bmatrix}$  
> $B = \begin{bmatrix}0 \\ 0 \\ 2\end{bmatrix}$  
> $C = \begin{bmatrix}1 & 0 & 0\end{bmatrix}$  
> $D = [0]$


## if there's numerator polynomial?

- Let's modify some of the terms in T.F above

> $T(s) = \frac{s^2+s+2}{s^3+3s^2+2s-1}$  
> $y^{(3)} + 3\ddot y + 2 \dot y - y = \ddot u + \dot u +2 u$  
> $\text{first, let } x_1= y, x_2 = \dot y, x_3 = \ddot y$

- Transfer function을 2개의 Transfer function의 곱으로 나타내기 (num, denom)

> $T(s) =T_1(s)\cdot T_2(s)= \frac{1}{s^3+3s^2+2s-1} \cdot \frac{s^2+s+2}{1}$  
> $u(t) \rightarrow \bar y(t) \rightarrow y(t)$

- 중간 변수의 설정으로, 다음과 같은 식이 만들어짐

> $y^{(3)} + 3\ddot y + 2 \dot y - y = \bar y$  
> $\text{(real) } y = \ddot{\bar y} +\dot{\bar y} + 2\bar y$

- ss representation of T. F

> $\therefore, \bar y = [x_1, x_2, x_3]^T$  
> $y = x_3 + x_2 + x_1$  
> $A = \begin{bmatrix}0 & 1 & 0\\ 0 & 0 & 1 \\ 1 & -2 & -3 \end{bmatrix}$  
> $B = \begin{bmatrix}0 \\ 0 \\ 1\end{bmatrix}$  
> $C = \begin{bmatrix}2 & 1 & 1\end{bmatrix}$  
> $D = [0]$

- B : $[0, 0, 1]^T$ since 중간 결과 = $1 \cdot \bar y$
- 결국 T.F의 numerator는 발산여부에 관여하지 않는것을 간접적으로 알 수 있음. 왜냐하면 numerator는 B matrix를 수정하게 되는데, 이를 수정하여도 A는 건들여지지 않으므로, A의 characteristic polynomial의 값에 관여하지 않음.

### if there's quotient in Transfer function?

- consider

> $T(s) = \frac{5s^4+2s^3+5s+6}{s^4+2s} = 5+ \frac{2s^3-5s+6}{s^4+2s}$

- D = 5 (입력 신호가 5배의 gain을 얻어 그대로 출력 신호에 전달됨)

### Transpose of a matrix changes T. F?

- Transfer function in matrix form

> $TF(s) = C(sI-A)^{-1}B$  
> $= B^T (sI-A)^{-T}C^T$

- Then, differential equation follows

> $\dot x = A^T x + C^T u$  
> $y = B^T x$


{% endraw %}


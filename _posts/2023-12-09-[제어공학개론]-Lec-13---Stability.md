---
layout: post
date: 2023-12-09
title: "[제어공학개론] Lec 13 - Stability"
tags: [control, lecture-note, linear algebra, system, from_velog, ]
categories: [Electrical Engineering, control theory, ]
media_subpath: assets/img/2023-12-09-[제어공학개론]-Lec-13---Stability.md
image:
  path: 0.png
  alt:  
description: 제어공학의 안정성에 대한 강의에서는 리ャプノ프 안정성, BIBO 안정성, 그리고 리ャ프노프 방정식의 중요성을 다루고 있다. 리ャ프노프 안정성은 특정 평형점에 대한 안정성을 평가하며, 비선형 시스템에서는 여러 평형점에 대해 각각의 안정성을 고려해야 한다. BIBO 안정성은 입력이 유계할 때 출력도 유계해야 함을 의미하며, 이는 A 행렬이 Hurwitz일 때 성립한다.
pin: false
---


{% raw %}


## Types of Stability

- Lyapnov Stability (for autonomus stability) $\dot x = Ax$
- Input/Output Stability

> $\dot x = Ax + Bu$  
> $y = Cx+Du$  
> or G(s) (Input, output이 defined 된)


## Lyapnov Stability

- Lyapnov stability는 stability 판별의 대상이 system 전체가 아닌 특정 equibrilium point임.
- for linear system, $\dot x = Ax = 0$에서 equibrilium point는 (0,0) 하나만 존재함. ($\det A \neq 0$)
- 그런 이유에서 linear system에서는 Lyapnov stability가 system 전체에 대한 stability로 간주되기도 함.
- but multiple equiv point가 존재할 수 있는 non-linear system에서는 각 point에 대한 stability를 의미.
- Definition of Lyapnov Stability Criterion

> $x^* \text{ is stable if }$  
> $\text{for any }\epsilon>0, \text{there exists } \delta >0$  
> $\text{such that } ||x(0)-x^|| <\delta, ||x(t)-x^||<\epsilon, \forall t>0$

- Definition of Attractive Point

> $x^* \text{is attractive if } \lim\limits_{t\rightarrow \infty } x(t) = x^*$

- Stable + Attractive Equiv Point : Asymptotically Stable
- Q. Stable하지 않으나, Attractive한 Point가 존재하는가? (O)
- 특수한 비선형 system을 생각할 수 있음. 무조건 한바퀴를 돌고 수렴하는 아이를 생각할 수 잇음.
- 입실론 델타 조건에 벗어나므로..
- stable, not attractive는 존재. 계속 round 주위를 도는 것
- Asymptotically Stable

> $\leftrightarrow A \text { Hurwitz}$  
> eigenvalue들이 모두 음수에 있다는 것은 결국 0으로 죽어나간다는 것을 의미하므로 attractivity는 쉬움  
> stability 또한 norm을 취하여 보이면 점점 그 크기가 줄어 원점으로 수렴한다는 것을 알 수 있음.


### Lyapnov Equation

- Lyapnov Equation을 만족하는 A는 asymptotically stable

> $\forall Q>0, \exists P > 0 \text{s.t.}$  
> $A^T P + PA = -Q$  
> Linear equation이며, P는 symmetric(positive definite이려면) 하므로 미지수는 3개.

- A의 C.P를 풀어서 Pole의 real part를 직접 계산하는 것 보다 Lyapnov Equation을 계산하는 것이 컴퓨터가 더 쉬워함.

### Physical meaning

- Lyapnov Function

> $V(x) := x^TPx, P>0$  
> $V(0) = 0$  
> $V(x)>0, x\neq 0$  
> state transition matrix V (orthonormal matrix)를 고려  
> $Vz = x$  
> $x^TPx = z^Td^T P Vz  = z^T D z = \sum_{i=1}^n \lambda_i z_i^2$  
> 이를 평면에 그려보면 ellipse 형태를 띄게 됨.  
> $\frac{d}{dt} V(x(t))<0$  
> $= \dot x^T P x + x^T P \dot x$  
> $= x^T A^T P x + x^T P A x$  
> $= x^T (A^T P + PA) x= -x^T Q x < 0$  
> $\because Q > 0$

- 즉 V(x)는 결국 0이 됨.

### Analytic Solution of P

- $P = \displaystyle\int_0^\infty e^{A^T s} Q e^{As}ds$

> $A^T P + PA = \int_0^\infty A^T e^{A^Ts}Q e^{As} + e^{A^T s} Q e^{As}A ds$  
> $= \int_0^\infty \frac{d}{ds}(e^{A^T s}Q e^{As})ds = \bigg[e^{A^Ts}Qe^{As}\bigg]_0^\infty = -Q$  
> $s\rightarrow \infty, \text{value}\rightarrow 0 \because \text{Hurwitz}$  
> $s \rightarrow 0, e^{A\cdot 0} = I$  
> 어차피 Arbitary Q>0에 대한 것이므로 Q를 지우고 다음과 같이 표현가능  
> $A^T P + PA <0$  
> (Negative Definite)


## BIBO Stability

- 입력 $u(t)$가 Bounded일 때 출력 $y(t)$가 항상 Bounded이면 이를 "BIBO Stable"이라 한다.

> $\leftrightarrow \text{A is Hurwitz}$  
> pf)  
> $||y(t)|| = ||Ce^{At}x_0+C\int_0^t e^{A(t-s)}Bu(s)ds||$  
> $\leq ||Ce^{At}x(0)|| + ||C||\int_0^t ke^{\lambda_\text{max}(t-s)}||B||ds \cdot \max_t ||u(t)||$  
> $=\text{(Converge) + (Converge) + Bounded Input}$

- Principle eigenvalue at matrix exponent

> $||e^{At}|| \leq ke^{\lambda_\text{max} t}$  
> $k\neq 1$  
> $\lambda_\text{max} = \max \text{Re}(\lambda_i(A))$


{% endraw %}


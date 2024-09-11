---
layout: post
date: 2023-12-09
title: "[제어공학개론] Lec 11 - Observability"
tags: [control, lecture-note, linear algebra, system, from_velog, ]
categories: [Electrical Engineering, control theory, ]
media_subpath: assets/img/2023-12-09-[제어공학개론]-Lec-11---Observability.md
image:
  path: 0.png
  alt:  
description: 제어공학에서 관측 가능성은 입력 신호와 출력만으로 상태를 알아낼 수 있는지를 정의하며, 관측 가능성 행렬과 그람 행렬을 통해 시스템의 관측 가능성을 평가할 수 있다. PBH 테스트는 고유값에 대해 행렬의 랭크를 확인하여 관측 불가능한 상태를 식별하는 방법이다.
pin: false
---


{% raw %}


## Definition of Observability

- Definition:

> Model, $u[0,T]$(a.k.a. trajectory of input signal), $y[0,T]$(also history of output)만을 이용하여 $x(0)$를 알아낼 수 있다.

- Examples of unobservable cases

> 1.$$\dot x_1 = -x_1$$  
> $$\dot x_2 = x_1+x_2$$  
> $$y = x_1$$

	- $x_2$ is not observable state
	2.$$\dot x_1 = x_1$$
	$$\dot x_2 = x_2$$
	$$y = x_1+x_2$$
	- Applying Solution of (2) at y
	$$y = e^t x_1(0) + e^T x_2(0)$$
	- Unable to distinguish $x_1, x_2$

## Observability matrix

- Derivation (naive)

> let B=0 , D=0  
> $$\dot x = Ax$$  
> $$y = Cx$$differenating output y (1 time to (n-1) times)  
> $$\dot y = CAx$$  
> $$\ddot y = CA^2x$$  
> $$y^{(n-1)} = CA^{n-1}x$$LHS is measurable (output을 미분하는 것은 그다지 권장되지 않으나 수학적으로는 계산가능)  
> $$\begin{bmatrix}y \\ \dot y \\ \ddot y \\ \vdots \\ y^{(n-1)}\end{bmatrix} = \begin{bmatrix}C \\ CA \\ CA^2 \\ \vdots \\ CA^{n-1}\end{bmatrix} x$$우변의 x와 곱해진 matrix가 invertible하다면, x를 알 수 있음.

- Observability matrix $O$

> $$\text{system or A, C is observable if }\begin{bmatrix}C \\ CA \\ CA^2\\ \vdots \\ CA^{n-1}\end{bmatrix} \text{ has full column rank}$$

- Controllability 와 duality를 확인할 수 있음.
- Derivation (exact)

> $$\dot x = Ax+Bu$$  
> $$y =Cx+Du$$  
> $$y-Du\text{(known)} = Cx$$  
> $$\dot y - D\dot u = C\dot x = C(Ax+Bu)$$  
> $$\dot y - D\dot u - CBu = CAx$$

	- with same method, LHS is always measurable while RHS has form $=C^{k}x, k=0,\cdots,n-1$
	- if observability matrix $O$ has full column rank, x is measurable w/ using pseudo-inverse of $O$

## Observability Gramian

- Consider the solution of y

> $$y(t) = Ce^{At}x(0) + C\int_0^T e^{A(t-\tau)}Bu(\tau) d\tau + Du(t)$$

	- while y, C, D, u are known,
	$$\bar y(t) Ce^{At}x(0) \text{ if } \bar y(t) = y(t)-C\int_0^T e^{A(t-\tau)}Bu(\tau) d\tau - Du(t)$$
	$$\int_0^T e^{A^Tt}C^T\bar y(t)dt = \int_0^T e^{A^Tt}C^TCe^{At}dt\cdot x(0)$$
	$$\text{Observability Gramian : } \int_0^T e^{A^Tt}C^TCe^{At}dt$$
	$$\text{if } G(T)>0, \text{system is observable}$$

## PBH test of observability

- Definition of PBH test in observability

> $$rank \begin{bmatrix}\lambda I - A \\ C\end{bmatrix} = n, \forall \lambda \in \text{e.v. of }A$$  
> $$\nexists v\in \Re^n-\{ {\bf 0}\} \text{ s.t. } \lambda v=Av, Cv = {\bf 0}$$

	- if $x(0) = v$, $\dot x = Ax$, $y=Cx \equiv = 0$
	- 즉 sensing은 안되는데 v방향으로 내부 값은 계속 변하는 unobservable state가 생김
- Controllability에서의 증명의 dual이 Observability에서 성립하므로, Controllability쪽만 다룸.
- 동일한 방법으로 Observable state, nonobservable state를 구분할 수 있음.

{% endraw %}



---
layout: post
date: 2023-12-09
title: "[제어공학개론] Lec 07 - Simularity transform"
tags: [control, lecture-note, linear algebra, system, ]
categories: [Electrical Engineering, control theory, ]
media_subpath: assets/img/2023-12-09-[제어공학개론]-Lec-07---Simularity-transform.md
image:
  path: 0.png
  alt:  
description: 제어공학 개론에서 유사변환, 상태 공간 표현, 그리고 입력이 있는 경우와 없는 경우의 해법을 다룹니다. 유사변환을 통해 상태 공간 표현의 변환을 정의하고, 상태 방정식의 해를 구하는 방법을 설명하며, 행렬 지수의 특성과 전이 함수 간의 관계를 비교합니다. 최종적으로 출력 y(t)에 대한 계산식을 제시합니다.
pin: false
---



### State Transformation

- state-space representation is not unique (state 좌표 변환의 관계)
- let's define a transform matrix

> $$z(t) = Tx(t)$$

- T invertible, invarient to time. (유사변환, simularity transformation)
- define ss representation with z

> $$\dot z = T\dot x = TAx + TBu = TAT^{-1}z+TBu$$  
> $$y =Cx+Du = CT^{-1}z + Du$$  
> $$\begin{bmatrix}\dot z \\ y\end{bmatrix}=\begin{bmatrix}TAT^{-1} & TB  \\ CT^{-1} & D\end{bmatrix}\begin{bmatrix}z \\ u\end{bmatrix}$$

- Transfer function (matrix form) are equivalent

> $$CT^{-1} (sI-TAT^{-1})^{-1}TB+D = C(sI-A)^{-1}B+D$$  
> $$T^{-1}(sI-TAT^{-1})T = T^{-1}(sTT^{-1}-TAT^{-1})T$$  
> $$= T^{-1}(T(sI-A)T^{-1})^{-1} T = (sI-A)^{-1}$$



### solution to $\dot x = Ax$

- solution to matrix (state-space) with no input : $\dot x = Ax$

> $$x (t ) \in R^n$$  
> $$x(0) = {\bf x_0} \text{(given)}$$

- Answer

> $$x(t) = e^{At}x_0$$  
> $$e^{At} = (I+At+\frac{(At)^2}{2!}+\cdots)$$

- solution이라는 사실 pf : 대입

> $$\dot x = (0+A+A^2t+\frac{A^3t^2}{2!}+\cdots) x_0$$  
> $$= A(I+At+\frac{(At)^2}{2!}+\cdots)x_0 = Ax(t)$$  
> $$t=0 \rightarrow X(0) = e^{A0}x_0 = x_0$$



### solution to $\dot x = Ax+Bu$

- solution to s.s with input

> $$\dot x = Ax+Bu$$

- Multiplying integrating factor (variation of constant formula)

> $$(e^{-At})\dot x -Ax = e^{-At}Bu$$  
> $$\int_0^t\frac{d}{dt}(e^{-At}x(t))dt = e^{-At}x(t)-e^{-A0}x(0)= \int_0^t e^{-A\tau} Bu(\tau)d\tau$$  
> $$x(t)-e^{At}x(0) = \int_0^t e^{A(t-\tau)}B u(\tau)d\tau$$

- Response to the initial condition : $e^{At}x_0$
- State transition matrix : $e^{A(t-\tau)}$
- Matrixwise convolution. 외우는 방법은 summing all jumps from previous time $\tau$ to t


#### Characteristics of Matrix exponent


> $$\left. e^{At} \right\vert_{t=0}= I$$  
> $$e^{At_1} \times e^{At_2} = e^{A(t_1+t_2)}$$

- $t_1$초만큼 solution이 이동한 것 + $t_2$초만큼 이동한 solution : $t_1+t_2$초만큼 이동한 sol.
- 이로부터,

> $$e^{At} \times e^{-At} = I$$  
> $$e^{At} \times e^{Bt} \neq e^{(A+B)t}$$



#### comparing solutions at Transfer function

- ss2tf를 이용한 laplace transform of X와 x(t)의 비교

> $$X(s) = (sI-A)^{-1} x(0) + (sI-A)^{-1} BU(s)$$

- matrixwise convolution이 s-domain에서의 곱으로 표현된 것을 확인할 수 있음.

> $$\int_0^t e^{A(t-\tau)} B u(\tau) d\tau \leftrightarrow (sI-A)^{-1} BU(s)$$

- Laplace transform of state transition matrix : Taylor series of inverse of sI-A

> $$\mathcal{L}(e^{At}) = (sI-A)^{-1}$$



#### calculation about y(t)


$$y(t) = Ce^{At}x_0 + C\int_0^t e^{A(t-\tau)}Bu(\tau) d\tau + Du(t)$$


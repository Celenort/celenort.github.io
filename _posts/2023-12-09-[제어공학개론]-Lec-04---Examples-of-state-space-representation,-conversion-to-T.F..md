---
layout: post
date: 2023-12-09
title: "[제어공학개론] Lec 04 - Examples of state-space representation, conversion to T.F."
tags: [control, lecture-note, linear algebra, system, ]
categories: [Electrical Engineering, control theory, ]
media_subpath: assets/img/2023-12-09-[제어공학개론]-Lec-04---Examples-of-state-space-representation,-conversion-to-T.F..md
image:
  path: 0.png
  alt:  
description: 제어공학의 상태공간 표현과 전달함수 변환에 대한 강의에서는 비선형 시스템의 선형화, 컴퓨터의 미분 방정식 해결 방법, 상태공간 표현을 라플라스 변환하여 전달함수를 도출하는 과정이 설명된다. 전달함수는 시간 불변 시스템에만 적용 가능하며, 임펄스 응답에 대한 초기값도 다루어진다.
pin: false
---


{% raw %}


## Exercise of linearization of nonlinear system

- Consider virus system

> $\dot w_1 = -w_1 - w_1w_2+v$  
> $\dot w_2 = -w_2-w_1w_2$  
> $\dot w_3 = -w_3+w_2$  
> $z = w_1$

1. select $v^*$ first.
	- $0 = -w_1 - w_1w_2 + v^_$ : $v^_ = w_1(1+w_2)$
2. solve for multiple equibrilium point
	- $w_2(1-w_1) = 0$
	- $w_2 = w_3$
3. solve equation about $w_i$ to figure $w^*$ s

> $w_1=1$  
> $w_2 = v^-1$  
> $w_3 = v^-1$$w_2=0$  
> $w_1 = v^*$  
> $w_3 = 0$

1. Calculate Jacobians

> $A = \frac{\partial f}{\partial w} = \begin{bmatrix}-1-w_2 & -w_1 & 0 \\ w_2 & -1+w_1 & 0 \\ 0 & 1 & -1\end{bmatrix}_{w^, v^}$  
> $B = \frac{\partial f}{\partial v} = \begin{bmatrix}1 \\ 0 \\ 0\end{bmatrix}$  
> $C = \frac{\partial h}{\partial w} = \begin{bmatrix}1 & 0 & 0\end{bmatrix}$  
> $D = \frac{\partial h}{\partial w} = [0]$

1. calculate for each equibrilium
- $(w^_, v^_)=(\begin{bmatrix}1 & v^_1 & v^_1\end{bmatrix}^T, v^*)$

> $A  = \begin{bmatrix}-v^* & -1 & 0 \\ v^*-1 & 0 & 0 \\ 0 & 1 & -1\end{bmatrix}$  
> $B =\begin{bmatrix}1 \\ 0 \\ 0\end{bmatrix}$  
> $C =\begin{bmatrix}1 & 0 & 0\end{bmatrix}$  
> $D =[0]$

- $(w^_, v^_)=(\begin{bmatrix}v^* & 0 & 0\end{bmatrix}^T, v^*)$

> $A= \begin{bmatrix}-1 & -v^* & 0 \\ 0 & -1+v^* & 0 \\ 0 & 1 & -1\end{bmatrix}$  
> $B =\begin{bmatrix}1 \\ 0 \\ 0\end{bmatrix}$  
> $C =\begin{bmatrix}1 & 0 & 0\end{bmatrix}$  
> $D =[0]$


## How computer solves Differential Equation

- $\dot x = f(x, u), x(0)=\text{given}$
- 연립 1차 미분방정식으로 전환하여 (state space Representation이 계산이 편함)

> $\lim\limits_{h\rightarrow 0} \frac{f(t+h)-f(t)}{h}$

- 컴퓨터는 limit를 계산할 수 없으므로, 매우 작은 value의 h에 대해,

> $ x(t+h) \approx x(t)+hf(x(t), u(t))$

- h를 늘려가며 Plot하는 방식을 택함.

## state space representation to Transfer function

- 전체 식을 Laplace transform 해보자.

> $sX(s)-x(0) = AX(s)+BU(s)$  
> $Y(s) = CX(s) +DU(s)$

- $X(s)$를 없애기 위해 위 식을 풀어보자

> $(sI-A)X(s) = BU(s)+x(0)$  
> $X(s) = (sI-A)^{-1}Bx(0)+(sI-A)^{-1}BU(s)$

- 첫번째 term은 initial value에 의한 출력
- Definition of transfer function holds if initially at rest
- 2번째 식에 대입

> $Y(s) = (C(sI-A)^{-1}B + D)U(s)$  
> $\therefore T(s) = \frac{Y(s)}{U(s)} = C(sI-A)^{-1}B+D$

- Another representation of Transfer function

> $T(s) = C\frac{adj(sI-A)}{det(sI-A)}B+D$

- T(s)에서 나눗셈 연산을 수행하는 term은 determinant 계산 Term밖에 없는데, 결국 Transfer function의 pole을 결정하는 부분은 오직 A의 characteristic polynomial의 해 밖에 없음을 암시 (pole-zero cancellation이 없다면)

### Transfer function : only holds at TI system

- Time varying일 경우, A, B, C, D가 상수가 아닌 Time의 term이 포함되어 있는데, 이러면 Laplace 결과가 위 식과 같이 나오지 않음.
- 즉, Transfer function은 time invarient system에서만 사용.

### Impulse response of ss representation

- for impulse($u(t) = \delta (t)$), what should be the initial value of response?

> $x(0-) = [0, 0, 0,\cdots, 0]^T, x(0+) = \text{?}$  
> $\int_{0^-}^{0^+}\dot x dt = \int_{0^-}^{0+}Bu(t) dt$  
> $x(0+)-x(0-) = 0+B \cdot 1$  
> $x(0+) = B,  \dot x = Ax \text{ for }x>0$


{% endraw %}


---
layout: post
date: 2023-12-09
title: "[제어공학개론] Lec 08 - Phase portrait and Jordan form"
tags: [control, lecture-note, linear algebra, system, ]
categories: [Electrical Engineering, control theory, ]
media_subpath: assets/img/2023-12-09-[제어공학개론]-Lec-08---Phase-portrait-and-Jordan-form.md
image:
  path: 0.png
  alt:  
description: 제어공학 개론에서는 대칭 행렬의 고유벡터가 직교하며, 상태 초상화와 조르당 형식에 대한 내용을 다룹니다. 상태 초상화는 상태를 축으로 표시하고, 조르당 형식은 비대각화 가능한 시스템을 제어하는 방법을 설명합니다. 시스템의 제어 가능성을 높이기 위해 폐루프 시스템을 고려하며, 고유값과 고유벡터의 성질이 시스템의 동작에 미치는 영향을 논의합니다.
pin: false
---


{% raw %}


### Symmetric matrix -> E.vectors are orthogonal

- Proof)

> $Av_i=\lambda_i v_i \text{(i=1 to n)}$  
> $\text{if }\lambda_i \neq \lambda_j$  
> $Av_i = \lambda_i v_i$  
> $v_j^T Av_i = \lambda_i v_j^T v_i$  
> $(v_j^T A) v_i = (Av_j) v_i = \lambda_jv_j^T v_i$  
> $\text{for } \lambda_iv_j^T v_i = \lambda_j v_j^T v_i$  
> $\therefore v_j^T v_i = 0 \rightarrow v_j \perp v_i$
{% raw %}
$
- 즉 $A^T=A$인데, geometric mulitplicity>1이면, a.m=g.m이며, 해당 $\lambda_i$에 대한 $dim(N(\lambda_i I -A))=a.m$으로 악의적이지 않다면, orthogonal한 basis를 잡을 수 있음.
- 결론적으로 symmetric matrix에서는 multiplicity에 관계없이 n개의 eigenvector를 모두 orthogonal하게 뽑을 수 있음.
- orthogonal하게 뽑을 수 있다는 뜻은, orthonormal하게 뽑을 수 있다는 뜻. ($\Vert v_i\Vert_2 = 1$)
- orthonormal matrix: $V^T = V^{-1}$ ($\because v_i^Tv_i = 1, v_i^Tv_j=0 (i\neq j)$)
- 한편 diagonalization을 고려해보면, $V^{-1}$ 대신 $V_T$을 사용한다는 것은,굉장히 computation time을 절약할 수 있는 방법.

> $D = V^TAV$


## Phase Portrait

- Phase보다는 State portrait으로 표현하는 것이 더 의미적으로 가치 있음.
- Phase portrait은 state들을 축으로 하는 공간에 state들을 표시하고 연결한 것.
- Time에 대한 정보가 없음.
- 평형점 : $\dot x = f(x)=0$인 지점, 수렴?하는점
- 서로 다른 line들은 서로 intersect하지 않음. (한 점에서 교차한다는 것은, 해의 유일성이 보장된 linear system에 모순 되는 부분.)

### Simularity transform and phase portrait

- simularity transform

> $\dot x = Ax$  
> $T = V^{-1}$  
> $\dot z = TAT^{-1} z = [\lambda_i z_i]$  
> $\text{solution : } z_i = e^{\lambda t} z_i(0)$

- 변환된 결과로 원래의 state를 표현해보자

> $x(t) = T^{-1}z = Vz$  
> $= z_1(t)v_1 + \cdots+z_n(t) v_n$  
> $= z_1(0)e^{\lambda_1t}v_1 +\cdots +z_n(0)e^{\lambda_nt}v_n$

- Phase portrait에서 보았을 때 $v_1, v_2 \cdots, v_n$의 방향은 eigenvector들이 결정,
- 그 진폭(값)은 initial value들과 eigenvalue에 의해 결정됨.
- $z_i(0)$ (initial condition) = 0 : not excited, =/=0 : excited

### how to make system controllable

- for open loop system : $\dot x = Ax+Bu$
- if u is proportional to x : $u=kx$
- $\dot x = (A+Bk)x$ : closed loop system
- $A+Bk$가 좋은 성질을 가지면 (eigenvalues or matrix are in good position) .. 제어하기 편함

## Jordan form

- to controll system which has A (not diagonalizable matrix)

> $AV= VJ$  
> $J = \begin{bmatrix}J_1 & & \\ & \ddots & \\ & & J_p\end{bmatrix}$  
> $J_i =  
> \begin{bmatrix}  
> \lambda_i & 1            & \;     & \;  \\  
> \;        & \lambda_i    & \ddots & \;  \\  
> \;        & \;           & \ddots & 1   \\  
> \;        & \;           & \;     & \lambda_i


	\end{bmatrix}$


eg)


> $\text{let } J = \begin{bmatrix}\lambda_1 & & \\ & \lambda_2 & 1 \\ & & \lambda_3\end{bmatrix}$  
> $V^{-1} A V = J$  
> $Av_1 = \lambda_1 v_1$  
> $Av_2 = \lambda_2 v_2$  
> $Av_3 =\lambda_2 v_3 + v_2 \neq \lambda_3 v_3$  
> $\dot z = J z$  
> $\dot z_1= \lambda_1 z_1$  
> $\dot z_2 = \lambda_2 z_2 + z_3$  
> $\dot z_3 = \lambda_2 z_3$  
> $\text{also,}$  
> $(A-\lambda_2 I) v_3 = v_2$
$
{% endraw %}
v_3$ : generalized eigenvector

- solve for $z_2$

> $$\dot z_2 = \lambda_2 z_2 + z_3$$  
> consider $z_3$ as input of system  
> $$z_2 = e^{\lambda_2 t} z_2(0) + \int_0^t e^{\lambda_2(t-\tau)} \cdot 1 \cdot z_3(\tau)d\tau$$  
> $$\text{also,} z_3 = z_3(0)e^{\lambda_2 t}$$  
> $$z_2 =  e^{\lambda_2 t} z_2(0) + \int_0^t e^{\lambda_2(t-\tau)}z_3(0)e^{\lambda_2 \tau}d\tau$$  
> $$=  e^{\lambda_2 t} z_2(0) + \int_0^t  e^{\lambda_2 t} z_3(0) d\tau$$  
> $$=  e^{\lambda_2 t} z_2(0)  + te^{\lambda_2 t}z_3(0)$$  
> $$= [z_2(0)+tz_3(0)]e^{\lambda_2t}$$

- 그렇다면 pole이 중첩될 때는 발산할까? : no. $R(\lambda_2)<0$이면, exponential이 더 빠르게 증가하므로 수렴함.
- 실제 controll에서 중첩이 생겨 Jordan form을 쓰는 경우가 있는가?
-$$det(\lambda_i I -A) = 0$$에서 small purturbation이 생겨도 중첩이 깨지게 됨. 즉 물리적 측정값을 대입하여 결정되는 A의 경우 의도적으로 맞추는게 아니라면 무조건 중첩이 깨지게 됨 (full rank)
	- if $T(s) = \frac{1}{s^2}$와 같은 integrator 같이, 설계자가 그 구조를 결정하는 경우에는 안깨지는 중첩이 생기게 됨.
- Q. Transfer function을 통해 구해지는 x(t)에서는 pole이 중첩될 경우 무조건 t가 붙어서 도출되나, A의 성질을 이용하여 계산되는 x(t)에서는 diagonalizability에 따라 t가 붙을 수도 있고 안붙을 수도 있음. (diagonalizable 하면 n distinct한 eigenvector가 생기므로 안붙음) 어떠한 조건에서 이게 붙고 안붙냐?
	- Transfer function : $T(s) = C(sI-A)^{-1}B$
	- 이 때 transfer function에서 추가로 붙는 C와 B가 t가 안붙었다 하더라도 무조건 붙게 만들게 됨.

{% endraw %}


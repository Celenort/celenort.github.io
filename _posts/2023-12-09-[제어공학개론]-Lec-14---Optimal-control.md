---
layout: post
date: 2023-12-09
title: "[제어공학개론] Lec 14 - Optimal control"
tags: [control, lecture-note, linear algebra, system, ]
categories: [Electrical Engineering, control theory, ]
media_subpath: assets/img/2023-12-09-[제어공학개론]-Lec-14---Optimal-control.md
image:
  path: 0.png
  alt:  
description: 최적 제어에 관한 강의에서는 상태 피드백을 이용해 시스템을 최적화하는 방법을 다룹니다. 알제브라릭 리카티 방정식을 통해 최적 제어 입력을 도출하고, Q와 R의 물리적 의미를 설명합니다. Q는 상태의 상대적 비용 가중치를 나타내고, R은 제어 입력의 비용을 나타냅니다. 또한, 강화 학습 방법과 관련하여 V(x)를 학습하는 과정도 언급됩니다.
pin: false
---



### Optimal control

- State Feedback을 이용하여.
- Consider system with no output

> $$\dot x = Ax+Bu$$

- Also consider Optimization problem

> $$\text{Goal : Find } x^* = \arg\min_x f(x)$$  
> $$f : \Re^n \rightarrow \Re$$  
> $x^$ : optimal point, $x$ : decision variable, $f(x^)$ : optimal value

- Let's claim that

> $$u^(\cdot) = \arg\min_{u(\cdot)} J\big(x(0), u(\cdot)\big) = \int_0^\infty \bigg(x^T(\tau)Qx(\tau) + u^T(\tau)Ru(\tau)\bigg)d\tau$$  
> $u^$ : optimal control, 이 input이 stable input임이 보장됨.  
> Q, R은 state, u(t)에 대한 상대적 cost를 나타냄

- Theorem :

> If (A, B) controllable,  
> $$\exists P >0 \text{ s.t. } A^TP+PA+Q-PBR^{-1}B^TP=0$$  
> (Algebraic Riccati Equation, ARE about P)  
> $$u^(t) = -R^{-1} B^TPx(t)$$  
> LQR(Linear Quadratic Regulator)  
> 원래의 $u^(t)$는 open loop control로 x(0)만의 function  
> thanks to the theorem, the solution transformed into feedback control  
> $$u = -Kx(t)$$

- 보조 정리

> $$\text{if } x(t)\rightarrow 0 \text{ on } t\rightarrow \infty \text{ by some } u(t)$$  
> $$\text{then for any }P>0$$  
> (any PD matrix P가 가능하지만 Riccati Eqn의 P를 사용)  
> $$\int_0^\infty x^T(t)(A^TP+PA)x(t)+2x^T(t)PBu(t)dt = -x^T(0)Px(0)$$  
> 위 수식의 이해 : x(t), A, B, u를 집어넣으면, Initial value만으로 해당 적분을 표현할 수 있음  
> pf)  
> $$\int_0^\infty \dot x^T(t) Px(t) + x^T(t)P\dot x(t) dt = \int \frac{d}{dt} (x^T(t)Px(t))dt$$  
> $$\dot x(t) = Ax+Bu$$임을 대입하면,  
> 좌변은 위 integral이 되고, 우변은  
> $$\bigg[x^T(t)Px(t)\bigg]_0^\infty= -x^T(0)Px(0)$$



#### Proof of LQR

- Pf

> $$J = \int_0^\infty (x^TQx+u^TRu)dt = x^T(0)Px(0)-x^T(0)Px(0)+\int_0^\infty (x^TQx+u^TRu)dt$$  
> $$=x^T(0)Px(0) \int_0^\infty (x^T(A^TP+PA)x+2x^TPBu)dt+ \int_0^\infty (x^TQx+u^TRu)dt$$  
> $$=x^T(0)Px(0)+\int_0^\infty (u+R^{-1}B^TPx)^TR(u+R^{-1}B^TPx)dt + \int_0^\infty x^T(A^TP+PA-PBR^{-1}B^TP +Q)dt$$  
> $$= x^T(0)Px(0) + 0(\text{ if } u=u^) + 0\text{ (by Riccati Eqn)}$$  
> $$u^=-R^{-1}B^TPx$$is Optimal solution while$$J(x(0), u^*(\cdot))=x^T(0)Px(0)$$is optimal value



#### Physical Meaning of Q, R

- Q : digaonal matrix라 할 때 각 element들은 상대적 cost weight를 나타냄. 즉 diag(100 1) 이면, state 1이 2보다 100배 더 cost가 높으므로 상대적으로 더 빠르게 target으로 수렴해나갈 것으로 생각할 수 있음.
- 단, state들끼리 종속적일 수 있음. 이 때는 x2도 따라서 앞으로 가거나 할 수 있음.
- R : single input이라면 scalar. 힘으로 생각해보면 힘의 크기 * R = cost이므로, R이 커지면 더 적은 힘으로 제어해야함을 의미. 반대로 R이 작아지면 상대적으로 큰 힘으로 빠르게 제어할 수 있을 것


#### c.f ) 작금의 강화학습 방법

- V(x)을 학습

> $$J(x(0), u^*) = V(x(0))$$학습 : by figuring Analytic form  
> Table을 만들어서 Q-Q learning, Neural network


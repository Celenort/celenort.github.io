---
title: '유체역학기초 Chap 4,5'
layout: single
categories:
  - study
  - fluidbasic
tags: []
---

## Chapter 4

### 시스템에 대한 기본 법칙


- 질량 보존 법칙

$${dM\over dt}\bigg)_{system} = 0$$


- 뉴턴 제 2법칙

$${d\vec{P}\over dt}\bigg)_{system} = \vec{F}$$

- 각운동량 원리

$${d\vec{H}\over dt}\bigg)_{system} = \vec{T}$$
- Torque
$$\vec{T}=\vec{r} \times \vec{F_s} + \int_{M_{system}}\vec{r} \times \vec{g}dm+\vec{T}_{shaft}$$

- Surface force에 의한 토크 + 중력(body force)에 의한 토크 + Shaft의 토크 = 전체토크

- 열역학 제 1법칙

$${dE\over dt}\bigg)_{system} = \dot{Q}-\dot{W}$$

- $ e = u + {V^2\over 2} +gz$

- 열역학 제 2법칙

$${dS\over dt}\bigg)_{system} = {1\over T} \dot{Q}$$

- Extensive Property와 Intensive Property의 관계

$$ N_{system} = \int_{M_{system}}\eta dm = \int_{V_{system}} \eta \rho dV $$

- Mass : $ N=M, \eta=1 $
- Linear Momentum : $ N=\vec{P}, \eta=\vec{V} $
- Angular Momentum : $ N=\vec{H}, \eta=\vec{r} \times \vec{V} $
- Energy : $ N=E, \eta=e $
- Entropy : $ N=S, \eta=s $

### Reynold's Transport Theorem

- t0에서 CV=System.
- t0+dt 에서 CV는 그대로, System은 이동. 원래 cv 내였지만 벗어난 구역 : III, cv 아니었지만 cv로 들어온 구역 I

- 정의에 의해 

$${dN\over dt}\bigg)_{system} = \lim_{\Delta t \rightarrow 0} {N_s\big)_{t_0+\Delta t}-N_s\big)_{t_0}\over \Delta t}$$

- $N_s\big)_{t_0+\Delta t}=(N_{II}+N_{III})_{t_0+\Delta t}=(N_{CV}+N_{III}-N_I)_{t_0+\Delta t}$
- $N_s\big)_{t_0}=(N_{CV})_{t_0}$
- $ N_s\big)_{t_0+\Delta t}-N_s\big)_{t_0} = (N_{CV}+N_{III}-N_I)_{t_0+\Delta t}-(N_{CV})_{t_0}$

- 이를 다시 표현하면,
 $${dN\over dt}\bigg)_{system} = \lim_{\Delta t \rightarrow 0} {N_{CV}\big)_{t_0+\Delta t} - N_{CV}\big)_{t_0}\over \Delta t}$$

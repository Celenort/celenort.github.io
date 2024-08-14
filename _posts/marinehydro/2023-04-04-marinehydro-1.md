---
title: '선박해양유체역학 Chap2 정리'
layout: single
categories:
  - study
  - marinehydro
tags: []
---

## 2.1. Introduction

### 2.1.1. Dimensional Analysis

- Buckingham's Pi Theorem

  - Q(Unknown parameter of interest)를 [M, L, T] 나 [F, L, T]로 나타내기.
  - N Significant parameter including Q일 때 N-3개의 nondimensional group을 만들 수 있음.
  - $\Pi_1 = \rho^a V^b D^c \mu$
  - Q가 포함된 Nondimensional group을 다른 nondimensional group에 대한 함수로 표현한다. 
  - $\Pi_1 = f(\Pi_2, \Pi_3, \cdots, \Pi_{n-3} ) $
  - repeating parameter는 M, L, T가 모두 섞이며 서로 independent 해야만 한다. eg) length L, area A를 repeating param으로 설정할 수 없음.

- Ex1) Falling Body in Vaccum

  - Q : y [$L$]
  - t [$T$], m [$M$], g [$LT^{-2}$]
  - $${ {y} \over{gt^2} } = c$$

- Ex2) Simple Pendulum

  - Q : 주기 T [$T$]
  - l [$L$], m [$M$], g [$LT^{-2}$], 최대각도 $\theta_0$[-]
  - $$ T ({g \over l})^{1/2} = f(\theta_0)$$

- Ex3) Drag on a sphere

- Q : 항력 F [$MLT^{-2}$]
- Fluid density $\rho$ [$ML^{-3}$] , V [$LT^{-1}$], Dynamic Viscosity $\mu$ [$ML^{-1}T^{-1}$]
- $$ {F\over \rho V^2D^2} = f({\rho VD\over\mu})$$
- Dynamic Simularity 가 성립한다면 Re가 동일, 좌변의 $({F\over \rho V^2D^2})_{model}=({F\over \rho V^2D^2})_{proto}$

### 2.1.2. Flow Simularity and Model Studies

- Geometric Simularity(geosim)

  - Same shape
  - Every linear dimension corrosponds to same scale

- Kinematic Simularity

  - Velocity simularity(V'/V = ratio)
  - Regimes of flow must be same (eg. Turbulant / laminar, Cavitation, Compressibility)
  - must satisfy geometric simularity condition : boundary condition에 의해 bounding streamlines guarantees geo.sim

- Dynamic Simularity

   - Force simularity 
   - Dynamic Simularity implies Kinematic Simularity (Dyn -> Kin)
   - dimensionless force eqn이 있을 때 포함된 무차원수들이 동일하다면 dynamic simularity임을 알 수 있음.

- Incomplete Simularity

  - 완전한 상사가 이루어질 수 없음.

### 2.1.3. Significant DImensionless Numbers

-  Reynolds Number
  $$Re = {\rho VL \over \mu} = {VL\over\nu} \sim {Inertia\over Viscous}$$
  high Re -> turbulant
  low Re -> Laminar

- Froude Number

  $$Fr = {V\over \sqrt{gL}}  \sim {Inertia\over Gravity}$$
  Fr<1 : Subcritical flow
  Fr>1 : Supercritical flow

- Cavitation Number

  $$Ca = {p-p_a\over {1\over 2} \rho V^2 }  \sim {Pressure\over Inertia}$$
  p -> pressure of liquid
  $p_a$ -> liquid vapor pressure
  low Ca -> more likely to cavitate

- Mach Number

  $$M = {V\over c}  \sim {Inertia\over Compressibility}$$
  c=$\infty$, M=0 (true incompressible flow)

- Strouhal Number

  $$St = {fL\over V}  \sim {Oscilation veolcity\over Inertia}$$

- Weber Number

  $$We = {\rho V^2 L\over \sigma}  \sim {Inertia\over Surface ~ tension}$$

## 2.2. Drag force on Sphere

### 2.2.1. Dimensional Analysis

- Problem : Drag force upon a sphere moving in a viscous fluid
- Assumption : 

  - constant velocity U
  - unbounded extent (boundary is too far compared to the  diameter of sphere)
  - smooth surface (negligible friction effect)

- Dimensional Analysis

  - Q : Drag force D
  - diameter d[$L$], fluid velocity U[$LT^{-1}$] , density, 
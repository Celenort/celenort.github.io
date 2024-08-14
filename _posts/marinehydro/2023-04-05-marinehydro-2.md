---
title: '선박해양유체역학 Chap2 문제'
layout: single
categories:
  - study
  - marinehydro
tags: []
---

## 2.1. Introduction

- Buckingham's Pi Theorem 방법

- Geometric sim

- Kinematic sim (what must be same? 3가지, necessary cond)

- Dynamic sim (implies what?)

- Incomplete sim

- 6 significant numbers and eqn, context

## 2.2. Drag force on sphere

- 3 assumptions : 속도/바운더리/표면

- Drag force 식.

- 4개의 regimes 

- 1번 regime : Re숫자, flow이름 / 후류상태 / 항력의 성분

- 2번 regime : sep 시작 R ? / stable-viv(unsteady) R값?

- 3번 regime : 항력의 성분 / sep. angle, Cd값의 변화? / 박리 앞과 뒤의 condition (l.b.l / f. t.) - stagnant(slow) and reduced pres.

- 4번 regime : Boundary layer가 어케됨? / sep은? angle? wake? Cd? 

- Turbulant로의 천이과정의 정확한 지점 결정하는 3가지 요인 : 
 (form / ambient turb. / roughness)


## 2.3. Viscous Drag onf Flat Plate

- Assumptions (3) : vel / 바운더리 / 두께

- Cd의 표현? 2개의 nondimensional param.

- B/l (slenderness ratio)에 민감하지 않은 영역 ? pwr of 10  = 5 ~6
- Frictional drag coeffs for various Re. Laminar / Trurbulent -> Transition (이 영역의 위치에 관여하는 것?)

- Laminar -> Turbulant transition -> C_F가 증가. (운동량 결손의 증가.) 그러나 구의 Cd보다는 100배 작음.

## 2.4. Viscous Drag on General Bodies

- 지오심 -> Reynolds 수가 같아야 하나 유체를 바꿀 수 없으므로(물보다 점성 낮기 힘듦) -> 실제 스케일 속도와 모델 속도의 비가 길이비의 역수에 비례. 불가능

- two assumptions on dividing CF and CP

- Cf가 어떤 param에? / 그것은 뭐랑 같을까

- 압력항력은 뭐에 따라 달라지고 뭐에 독립적임? (r>10^5)

- Drag coeffs for different shape : streamlined body / bluff body (하나, Cd= Cd(R))/ sharp edgesnot aligned to the flow 

## 2.5. Drag on a ship hull

- problem : 속도 , system of waves

- w/o assumption

- Froude's Hypothesis : 뭐에 따라 결정되는 뭐 + 뭐에 따라 결정되는 뭐 = 전체 저항?

- residual resistance에 Form effect on skin friction 들어감.
- Equv. flat plate friction resistance +fe friction = friction resistance (평판은 형상 x니까 fe는 0?)

- 실제로 Residual은 Re 올라감에 따라 살짝 감소.. 

- 실험적인 Froude's Hypothesis 증명 : same line : same speed = same Fr. -> Schoenherr 마찰저항선과 평행(거의)

## 2.6. Hydrofoil lift and drag

- Aspect Ratio ? s/l = s^2 / S

- 점성효과 : 경계층에 국한.

- Assumption : inf. fluid, 일정 v, AoA, steady, 주변 P가 높아 Ca
- Lift 특성 3 (개형 / aoa증가하면서 발생하는거/ 발생지점(조건)이 뭐에 관계? (3개))
- Drag 특성 3 (양력과 크기 비교 / nondimensional? CF와 비슷. / stall에서 어떻게 되는지,)
- at small aoa, CL(R, alpha ) = cL(alpha)
-  같은 방법으로 Drag도 나누기. General body에서 했던거랑 거의 같지?

## 2.7. Screw Propeller

- 3가지 프로펠러 특징 (geo(4) / inflow(3) / mutual(4))

- 좌표계는 Cart / Cylin / Helic.

- Assumption : 2가지. 여기서는 빠지는게  Re, 항상 나오는 Ca

- Thrust, Torque Q 식? 

- Advance Ratio? (AoA랑 무슨관계?)

- prop. OW test  : 무차원수 3개 

- 프로펠러 효율의 정의? : 일/일. 알고있는걸로 어케표현되는지

- 프로펠러 효율곡선 

- 추력 / 토크는 J에 대해 단조감소. aoa=0이 되는 J에서 Kt도 0

- J=0이어도 0, 최적효율은 작은 aoa(즉 큰 J)에서 달성. 0.6~0.8


## 2.8 Propeller-Hull Interactions

- wake fraction : 정의 / 유입류 gradient? / 주로 줄어듦.

- t (Thrust deduction factor) : Prop -> Hull (유동가속, suction effect) -> 추가저항이 T의 디덕션으로 취급

- 마찰저항 Cf, 압력저항 Cp에 어떤 영향? 

- Relative Rotating efficiency : 정의 / Kq, Q로 표현 / ratio of power는 아님.

- 그래프 주고 구하는 방법 기억?

1. Resistance Test : w/o prop. RT at V 구하기.
2. Interaction ttest : nu (quosi) 구하기. 
3. O.W Test : T, Q, n_ow 구하기
4. added resistance (loss + margin)


## 2.9. Wave Force on a stationary body

- prob: 고정된 구조물, usnsteady / 힘 고려는 x방향만.

- assumpt: s.t 무시 / plane prog. w

- F / rho, nu, g, t, h, l, A, lambda, beta

- 10개 -> 7개, F제외한 6개중 4개는 파도 바꾸면 ㄱㄴ
- 2개(R는 맞출수없고, wt : 1주기 이상)

- Linear wave force model(A/l << 1)

- Assumption : viscosity 무시 / A가 파장 수심에 비해 작아 선형성.
- Cf= Cf0 cos(wt + e)

- Morison Model (l/lambda << 1)

- 3가지 케이스. A/l>>1 (위 : viscous 높으면 U제곱?  식그대로.) / bluff bodies에 유용

- A/l<<1 : Inertia, F=ma, added mass(끌고다니는.. ) 배수체적의 1, 0.5배 정도

- 중간 케이스 : A/l  = 1 : 둘다 고려. 점성/관성 상호작용은 무시.67
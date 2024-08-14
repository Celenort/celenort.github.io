---
title: '논리설계 및 실험 중간고사 요약'
layout: single
categories:
  - study
  - logicdesign
tags: []
---

## K-Map으로 minimum SoP 구할때

- 4개 귀퉁이에서의 2x2, 4개 변에서의 2x2
- 4개 변에서의 2x1 따져보기
- 당연하지만 Essential Prime Implicant를 포함.

## Quine-McCluskey 방법 이용시

- 5개에 대해 숫자 다 적어두기. 

## Transistor Level design

- NOT, NAND, NOR 게이트 미리 그려두기
- 안풀리면 일단 SoP로 나타내서 AND, OR로 바꾼다음 최적화하기.

## Axiom, Theorem 사용시

- 항 여러개 있을 때 공통부분 분배로 묶는 아이디어.
- X+X'Y=X+Y
- Consensus Theorem : 일단 현재의 term에서 X, X'으로 겹치는부분을 찾기. 그다음 늘려준다음 줄이는 아이디어

## Verilog

- 대괄호는 사용 X. 모듈 선언안에 input, output 넣고 semicolon,
- structural : or and 등 function 사용. behavioral : 원래 하던식으로 assign. 

## LuT, ROM, PLA, PAL, FPGA, ASIC
- 각각 모양, 구현, 장단점 적어두기

## AOI

- Transistor level

## Tri-State Gate

- Active "HIGH", "LOW" BUFFER/INVERTER
- Transistor Level

## LUT = MUX
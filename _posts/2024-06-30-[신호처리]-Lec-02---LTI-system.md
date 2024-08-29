---
layout: post
date: 2024-06-30
title: "[신호처리] Lec 02 - LTI system"
tags: [lecture-note, signal processing, fastmri, ]
categories: [FASTMRI, signal processing, ]
media_subpath: assets/img/2024-06-30-[신호처리]-Lec-02---LTI-system.md
image:
  path: 0.png
  alt: 2d kspace data
description: 신호처리 강의에서는 시스템의 정의, 선형성과 시간 불변성, 그리고 임펄스 응답의 개념을 다룹니다. 시스템은 입력 신호를 변환하여 출력 신호를 생성하며, 선형 시스템은 스케일링과 중첩의 성질을 만족합니다. 임펄스 응답은 시스템의 입력이 임펄스일 때의 출력이며, 출력 신호는 입력 신호와 임펄스 응답의 컨볼루션으로 표현됩니다.
pin: false
---



#### 📢Precaution


> 본 게시글은 서울대학교 이종호 B 교수님의 SNU FastMRI Challange의 2021 Signal Processing을 바탕으로 제작되었습니다.


{% raw %}


### System

- System : a process in which input signals are transformed by the system, resulting in other signals as output.
	- CT, DT, Digital 등 종류에 상관없이 Input과 Output이 signal이면 됨.
- Linearity of the system
	- We call system linear if the system satisfies two properties : Scaling property, Superposition.

	> 한줄요약  
	> $\begin{aligned}  
	> &x(t) \rightarrow p(t), \ y(t) \rightarrow q(t) \\  
	> &ax(t)+by(t) \rightarrow ap(t) +bq(t)\end{aligned} $

- Time Invariance
	- image 에서는 Shift(or space) invariance

		> $\begin{aligned}  
		> x(t) &\rightarrow y(t), \\  
		> x(t-t_0) &\rightarrow y(t-t_0)\end{aligned} $

- Using Dirac's Delta property,

> $\begin{aligned}  
> &x(n) = \sum_{k=-\infty}^\infty x(k) \delta(n-k) \text{ at D.T}\\  
> &x(t) = \int_{-\infty}^\infty x(k) \delta(t-k) dt  
> \end{aligned} $

- 동일한 방법으로 Output signal에 대해서도 이를 적용할 수 있다.
System이 signal에 가하는 transform을 $y(n) = \mathbf{H}(x(n))$이라 하자.

	> $\begin{aligned}  
	> y(n) &= \mathbf{H}(x(n)) \\  
	> &=\mathbf{H} \{\sum_{k=-\infty}^\infty x(k) \delta(n-k) \} \\  
	> &=\sum_{k=-\infty}^\infty x(k) \mathbf{H} \{\delta(n-k)\} \text{(by Linearity)}  
	> \end{aligned} $

	- Impulse response

	> $  
	> h(n) :=\mathbf{H} \{\delta (n) \}$  
	> Impulse response : output of system when input is impulse.

- Time Invariant하다는 성질을 이용해 output signal을 impulse response와 input signal로 표현할 수 있다.

> $\begin{aligned}  
> y(n) &= \sum_{k=-\infty}^\infty x(k) h(n-k) \\  
> &=x(n) \ * \ h(n) \ \text{(Convolution)}  
> \end{aligned} $

- 유사하게 CT에서의 convolution 또한 정의할 수 있다.

{% endraw %}


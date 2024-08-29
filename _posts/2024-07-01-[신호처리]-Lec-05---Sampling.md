---
layout: post
date: 2024-07-01
title: "[신호처리] Lec 05 - Sampling"
tags: [lecture-note, signal processing, fastmri, ]
categories: [FASTMRI, signal processing, ]
media_subpath: assets/img/2024-07-01-[신호처리]-Lec-05---Sampling.md
image:
  path: 0.png
  alt: A sketch of explaining Nyquist sampling theorem
description: 신호처리 강의에서는 연속 함수와 샘플링 함수의 곱을 통해 샘플링 과정을 설명하고, 나이퀴스트 샘플링 정리에 따라 신호의 최대 주파수의 두 배 이상으로 샘플링해야 원래 신호를 완벽하게 복원할 수 있음을 강조합니다. 샤 함수와 주파수 도메인에서의 컨볼루션 개념도 다루어집니다.
pin: false
---



#### 📢Precaution


> 본 게시글은 서울대학교 이종호 B 교수님의 SNU FastMRI Challange의 2021 Signal Processing을 바탕으로 제작되었습니다.



#### Sampling

- Continuous function과 sampling function 곱하는 과정.

	> $$  
	> x(t) \text{(continuous)} \cdot \frac{1}{T} III(\frac{t}{T}) $$  
	> sampled function

- Sampling function : Shah function, 각 Area가 1이며, 간격 T인 Dirac's delta function의 합


#### Nyquist Sampling Theorem


> Signal is Band limited, $\rightarrow$ we can perfectly reconstruct the original signal from the sampled signal.To do so, we need to sample the signal more than twice the frequency of the max frequency of the signal.

- 직관적인 증명 :
3. 만약 Max frequency의 2배보다 sampling frequency가 커버리면, 위쪽 figure 처럼 Aliased 된 신호끼리 겹치지 않아 원래대로 복원이가능. (LPF를 쓰든 해서)
4. 그렇지 않다면, 충분한 공간이 없어 신호가 겹치게 되고 aliased or blurry signal이 생기게 되어 정확히 원본신호를 분리할 수 없게 됨.
	1. orig. function과 sampling function을 곱하는 것은 Freq. domain에서 convolution하는 것과 같음. (modulation property)
	2. Shah function은 F.T.를 거쳐도 shah function임.

	> $$  
	> \mathcal{F} \bigg(x(t) \cdot \frac{1}{T} III(\frac{t}{T})\bigg) = X(f) * III(f/f_s)$$  
	> $f_s$ denotes sampling freq.


	![0](/0.png)


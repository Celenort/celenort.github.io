---
layout: post
date: 2024-07-01
title: "[신호처리] Lec 05 - Sampling"
tags: [Nyquist sampling theorem, ]
categories: [Lecture, 신호처리(FastMRI), ]
media_subpath: /assets/img/2024-07-01-[신호처리]-Lec-05---Sampling.md
image:
  path: 0.png
  alt: A sketch of explaining Nyquist sampling theorem
description: 신호처리 강의에서는 연속 함수와 샘플링 함수의 곱을 통해 샘플링 과정을 설명하고, 나이퀴스트 샘플링 정리에 따라 신호의 최대 주파수의 두 배 이상으로 샘플링해야 원래 신호를 완벽하게 복원할 수 있음을 강조합니다. 샤 함수와 주파수 도메인에서의 컨볼루션 개념도 다루어집니다.
pin: false
---


### Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 이종호 B 교수님의 SNU FastMRI Challange, [2021 Signal Processing](https://www.youtube.com/playlist?list=PLZjIfJn3RN8si1ohhmSoWgH4VYLPwIW84)을 바탕으로 제작되었습니다.


### Sampling

- Continuous function과 sampling function 곱하는 과정.

{% raw %}
$$
x(t) \text{(continuous)} \cdot \frac{1}{T} III(\frac{t}{T})
$$
{% endraw %}

- Sampling function : Shah function, 각 Area가 1이며, 간격 T인 Dirac's delta function의 합

### Nyquist Sampling Theorem


> Signal is Band limited, we can perfectly reconstruct the original signal from the sampled signal. To do so, we need to sample the signal more than twice the frequency of the max frequency of the signal.

- 직관적인 증명 :
	- 만약 Max frequency의 2배보다 sampling frequency가 커버리면, 위쪽 figure 처럼 Aliased 된 신호끼리 겹치지 않아 원래대로 복원이 가능. (Low pass filter를 쓰든 해서)
	- 그렇지 않다면, 충분한 공간이 없어 신호가 겹치게 되고 aliased or blurry signal이 생기게 되어 정확히 원본 신호를 분리할 수 없게 됨.
- 증명
	1. original. function과 sampling function을 곱하는 것은 Frequncy domain에서 convolution하는 것과 같음. (modulation property)
	2. Shah function은 F.T.를 거쳐도 shah function임.
	$f_s$ denotes sampling freq.

{% raw %}
$$
\mathcal{F} \bigg(x(t) \cdot \frac{1}{T} III(\frac{t}{T})\bigg) = X(f) * III(f/f_s)
$$
{% endraw %}


![0](/0.png)


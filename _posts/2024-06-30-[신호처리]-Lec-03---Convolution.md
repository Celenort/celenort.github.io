---
layout: post
date: 2024-06-30
title: "[신호처리] Lec 03 - Convolution"
tags: [Convolution, ]
categories: [Lecture, 신호처리(FastMRI), ]
media_subpath: /assets/img/2024-06-30-[신호처리]-Lec-03---Convolution.md
image:
  path: 0.png
  alt: A diagram showing how convolution works
description: 신호처리에 관한 강의 노트에서는 1D 및 2D 컨볼루션의 개념을 설명합니다. 1D 컨볼루션은 임펄스 응답을 이용해 시스템의 출력을 계산하며, 2D 컨볼루션은 제로 패딩된 이미지를 사용하여 포인트 스프레드 함수와의 곱셈을 통해 출력을 생성합니다. 각 과정에서 시각적 예시를 통해 이해를 돕고 있습니다.
pin: false
---


### Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 이종호 B 교수님의 SNU FastMRI Challange, [2021 Signal Processing](https://www.youtube.com/playlist?list=PLZjIfJn3RN8si1ohhmSoWgH4VYLPwIW84)을 바탕으로 제작되었습니다.


### Convolution

- 1D convolution : for LTI system, if impulse response at index $n \ \text{is} \ h(n)$,

{% raw %}
$$
\begin{aligned} x(n)& \rightarrow \lbrack h(n)\rbrack \rightarrow y(n)\\ y(n) &= \sum x(k) h(n-k)\\ &=x(n) * h(n)\end{aligned}
$$
{% endraw %}

- 신기한 점은, System에 대한 Transfer function을 정의하지 않고, Dirac's Delta의 정의를 이용한 Impulse response만으로 convolution 관계를 얻어낼 수 있다는 것이다.
	- What convolution actually do ?
	
	파란색이 $x(n)$, 주황색이 $h(n)$이라고 하자. 먼저 $h(n)$을 Flip(x축에 대해 대칭) 한다. 이후 한칸씩 전진시키며, 파란색과 만날 때마다 겹친 부분의 곱을 모두 합한 것을 기록한다.
	
	일반적으로 알고 있는 convolution을 정말 잘 시각화 한 예시인 것 같아 풀로 긁어옴.

![0](/0.png)


![1](/1.png)


![2](/2.png)


_Convolution의 input인 두 1차원 함수가 겹침에 따라 아래쪽 plot에 값이 생성됨을 알 수 있다_

- 2D convolution :
	- Zero-padded 2D image

		![3](/3.png)


		_Zero-Padded 5x5 input image_

	- Point-spread function ( works as I.R.F at 1D conv.)
	Zero Padding은 Point-spread function의 dimensionallity 에서 1만큼 제하여서 적용됨. (Meaningful한 값을 output signal로 얻어내려면 자명)

		![4](/4.png)

	- How to evalutate?
	1. Flip the point spread function. (x축 대칭을 적용한 것 처럼, 원점 대칭 적용)
	2. 이후 Input signal을 point spread function의 크기의 필터를 씌운 것 처럼 잘라내어 element-wise multiplication을 적용하고 sum한 값을 Output singnal에 값에 집어넣는다.

		![5](/5.png)


		![6](/6.png)


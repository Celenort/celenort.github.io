---
layout: post
date: 2024-07-01
title: "[신호처리] Lec 04 - Fourier Transform"
tags: [lecture-note, signal processing, fastmri, from_velog, ]
categories: [FASTMRI, signal processing, ]
media_subpath: assets/img/2024-07-01-[신호처리]-Lec-04---Fourier-Transform.md
image:
  path: 0.png
  alt: A simple sketch explaining F.T.
description: 이 문서는 푸리에 변환에 대한 강의 노트로, 1D 및 2D 푸리에 변환의 수학적 정의, 유용한 공식, 샤 함수와의 관계, 그리고 푸리에 변환의 주요 속성을 설명합니다. 푸리에 변환은 주파수 도메인으로의 변환을 통해 합성곱 계산을 단순화하고, 변조 속성을 포함하여 다양한 신호 처리 응용에 활용됩니다.
pin: false
---



#### 📢Precaution


> 본 게시글은 서울대학교 이종호 B 교수님의 SNU FastMRI Challange의 2021 Signal Processing을 바탕으로 제작되었습니다.


{% raw %}


### Fourier Transform

- Transformation to frequency domain

	> $  
	> x(t) \stackrel{\mathcal{F}}{\rightarrow}X(f)$


	> 2D Fourier Transform  
	> $  
	> a(x,y) \rightarrow A(k_x, k_y)$

- Mathematical Definition (1D)

	> Fourier Transform  
	> $  
	> X(f) = \int_{-\infty}^\infty x(t) e^{-j\cdot 2\pi f t}dt = \mathcal{F}(x(t))$


	> Inverse Fourier Transform  
	> $  
	> x(t) = \int_{-\infty}^\infty X(f) e^{+  
	> j\cdot 2\pi f t}dt = \mathcal{F}^{-1}(X(f))$

- Mathematical Definition (2D)

	> Fourier Transform  
	> $  
	> A(k_x, k_y) = \int_{-\infty}^\infty\int_{-\infty}^\infty a(x,y) e^{-j\cdot 2\pi (k_x x + k_y y)}dxdy$


	> Inverse Fourier Transform  
	> $  
	> a(x,y) = \int_{-\infty}^\infty\int_{-\infty}^\infty A(k_x,k_y) e^{+j\cdot 2\pi (k_x x + k_y y)}dk_xdk_y$

- Useful Formulas

	> $  
	> \begin{aligned}  
	> \delta(t) \ &\xleftrightarrow{\mathcal{F}} \ 1 \\  
	> \delta(at) \ &\xleftrightarrow{\mathcal{F}} \ \frac{1}{|a|} \\  
	> \delta(t-t_0) \ &\xleftrightarrow{\mathcal{F}} \  e^{-j 2\pi f t_0} \\  
	> \delta(x-x_0, y) \ &\xleftrightarrow{\mathcal{F}} \  e^{-j 2\pi k_x x_0}  
	> \end{aligned}$  
	> i.e. time delay / image shift  
	> transformed expotential : Linear phase

	- Quarter-pixel shift : 1/4 픽셀만큼 shift하는 것은 복잡함. 이 때 영상을 F.T. 한다음 Linear phase를 곱하고 다시 IFT 하면 쉽게 shift할 수 있음.

> $  
> \begin{aligned}  
> 1 \ &\xleftrightarrow{\mathcal{F}} \ \delta(f) \\  
> \text{rect}(t) \ &\xleftrightarrow{\mathcal{F}} \ \text{sinc}(f) \\  
> \land (t) = \text{rect}(t) * \text{rect}(t) \ &\xleftrightarrow{\mathcal{F}} \  \text{sinc}^2 (f) \\  
> \cos{(2\pi f_0 t)}=\frac{e^{j 2\pi f_0 t}+e^{-j 2\pi f_0 t}}{2} \ &\xleftrightarrow{\mathcal{F}} \  \frac{\delta(f-f_0) + \delta (f+f_0)}{2} \\  
> e^{-at}u(t) \ &\xleftrightarrow{\mathcal{F}} \  \frac{1}{a+j\cdot 2\pi f}  
> \end{aligned}$  
> $u(t)$ : unit step function, a: real positive number  
> F.T. of exponential function is so-called Lorentzian


![0](/0.png)


rect and sinc function


![1](/1.png)


Lorentzian function


### F.T. Related to Shah Function

- Shah (or III) function and its F.T.

	> $\begin{aligned}  
	> III(t) = \sum_{k=-\infty}^\infty \delta(t-k) &\xleftrightarrow{\mathcal{F}} III(f) \\  
	> f(at) &\xleftrightarrow{\mathcal{F}} \frac{1}{|a|} \mathcal{F}(\frac{f}{a}) \\  
	> \frac{1}{T} III(\frac{t}{T}) &\xleftrightarrow{\mathcal{F}} III(Tf)  
	> \end{aligned}$  
	> i.e. Sampling function.


		![2](/2.png)


### Properties of F.T.

- 가장 큰 이점 : convolution 계산을 단순 곱연산으로 바꾸어 준다.

	> $\begin{aligned}  
	> y(t) &= x(t) * h(t) \\  
	> Y(f) &= X(f) \cdot H(f)\\  
	> y(t) &= \mathcal{F}^{-1}\big( \mathcal{F}(x(t)) \cdot \mathcal{F}(h(t))\big) \end{aligned}  
	> $

- Modulation property

	> $  
	> y(t) = s(t) \cdot p(t) \xleftrightarrow{\mathcal{F}} Y(f) = S(f) * P(f)$


{% endraw %}


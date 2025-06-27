---
layout: post
date: 2024-07-01
title: "[신호처리] Lec 04 - Fourier Transform"
tags: [FastMRI, Fourier transform, ]
categories: [Lecture, 신호처리(FastMRI), ]
media_subpath: /assets/img/2024-07-01-[신호처리]-Lec-04---Fourier-Transform.md
image:
  path: 0.png
  alt: Fourier transform of usf
description: 이 문서는 푸리에 변환에 대한 강의 노트로, 1D 및 2D 푸리에 변환의 수학적 정의, 유용한 공식, 샤 함수와의 관계, 그리고 푸리에 변환의 주요 속성을 설명합니다. 푸리에 변환은 주파수 도메인으로의 변환을 통해 합성곱 계산을 단순화하고, 변조 속성을 포함하여 다양한 신호 처리 응용에 활용됩니다.
pin: false
---


### Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 이종호 B 교수님의 SNU FastMRI Challange, [2021 Signal Processing](https://www.youtube.com/playlist?list=PLZjIfJn3RN8si1ohhmSoWgH4VYLPwIW84)을 바탕으로 제작되었습니다.


## Fourier Transform

- Transformation to frequency domain

{% raw %}
$$
x(t) \stackrel{\mathcal{F}}{\rightarrow}X(f)
$$
{% endraw %}

- 2D Fourier Transform

{% raw %}
$$
a(x,y) \rightarrow A(k_x, k_y)
$$
{% endraw %}


### Mathematical Definition (1D) 

- Fourier Transform

{% raw %}
$$
X(f) = \int_{-\infty}^\infty x(t) e^{-j\cdot 2\pi f t}dt = \mathcal{F}(x(t))
$$
{% endraw %}

- Inverse Fourier Transform

{% raw %}
$$
x(t) = \int_{-\infty}^\infty X(f) e^{+ j\cdot 2\pi f t}dt = \mathcal{F}^{-1}(X(f))
$$
{% endraw %}


### Mathematical Definition (2D)

- Fourier Transform

{% raw %}
$$
A(k_x, k_y) = \int_{-\infty}^\infty\int_{-\infty}^\infty a(x,y) e^{-j\cdot 2\pi (k_x x + k_y y)}dxdy
$$
{% endraw %}

- Inverse Fourier Transform

{% raw %}
$$
a(x,y) = \int_{-\infty}^\infty\int_{-\infty}^\infty A(k_x,k_y) e^{+j\cdot 2\pi (k_x x + k_y y)}dk_xdk_y
$$
{% endraw %}

- Useful Formulas
i.e. time delay / image shift
transformed expotential : Linear phase

{% raw %}
$$
\begin{aligned} \delta(t) \ &\leftrightarrow \ 1 \\ \delta(at) \ &\leftrightarrow \  \frac{1}{|a|} \\ \delta(t-t_0) \ &\leftrightarrow \ e^{-j 2\pi f t_0} \\ \delta(x-x_0, y) \ &\leftrightarrow \  e^{-j 2\pi k_x x_0} \end{aligned}
$$
{% endraw %}

- Quarter-pixel shift : 1/4 픽셀만큼 shift하는 것은 복잡함. 이 때 영상을 F.T. 한 다음 Linear phase를 곱하고 다시 IFT 하면 쉽게 shift할 수 있음.

{% raw %}
$$
\begin{aligned} 1 \ &\leftrightarrow \  \delta(f) \\ \text{rect}(t) \ &\leftrightarrow \ \text{sinc}(f) \\ \land (t) = \text{rect}(t) * \text{rect}(t) \ &\leftrightarrow \ \text{sinc}^2 (f) \\ \cos{(2\pi f_0 t)}=\frac{e^{j 2\pi f_0 t}+e^{-j 2\pi f_0 t}}{2} \ &\leftrightarrow \ \frac{\delta(f-f_0) + \delta (f+f_0)}{2} \\ e^{-at}u(t) \ &\leftrightarrow \  \frac{1}{a+j\cdot 2\pi f} \end{aligned}
$$
{% endraw %}

- $u(t)$ : unit step function, a: real positive number
F.T. of exponential function is so-called Lorentzian

![0](/0.png)


_rect and sinc function_


![1](/1.png)


_Lorentzian function_


### F.T. Related to Shah Function

- Shah (or III) function and its F.T.
i.e. Sampling function.

{% raw %}
$$
\begin{aligned} III(t) = \sum_{k=-\infty}^\infty \delta(t-k) &\leftrightarrow \ III(f) \\ f(at) &\leftrightarrow \ \frac{1}{|a|} \mathcal{F}(\frac{f}{a}) \\ \frac{1}{T} III(\frac{t}{T}) &\leftrightarrow \ III(Tf) \end{aligned}
$$
{% endraw %}


![2](/2.png)


### Properties of F.T.

- 가장 큰 이점 : convolution 계산을 단순 곱연산으로 바꾸어 준다.

{% raw %}
$$
\begin{aligned} y(t) &= x(t) * h(t) \\ Y(f) &= X(f) \cdot H(f)\\ y(t) &= \mathcal{F}^{-1}\big( \mathcal{F}(x(t)) \cdot \mathcal{F}(h(t))\big) \end{aligned}
$$
{% endraw %}

- Modulation property

{% raw %}
$$
y(t) = s(t) \cdot p(t) \leftrightarrow \  Y(f) = S(f) * P(f)
$$
{% endraw %}


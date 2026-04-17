---
layout: post
title: "[신호 및 시스템] Lec 10, 11 - CT Fourier transform, Property"
date: 2026-04-17
draft: false
published: true
pin: false
description: ""
tags: ["Signal", "System"]
categories: ["Lecture", "신호 및 시스템"]
math: true
---

### Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 박성준 교수님의 신호 및 시스템 (26 Spring) 강의록입니다.


## Extension of FS to aperiodic signal

- Let $x(t)$ represent an aperiodic signal,
- Its periodic extension : $x(t) = \sum_{k=-\infty}^\infty x(t+kT)$
- Then $x(t) = \lim_{T\to \infty} x_T(t)$
- Example)  Let $x_T(t) = \text{rect}(t/2s)$

{% raw %}
$$
\begin{aligned}a_k&= \frac{1}{T}\int_{-T/2}^{T/2} x_T(t)e^{-j k \frac{2\pi}{T} t}\,dt \\&= \frac{1}{T}\int_{-S}^{S} e^{-j k \frac{2\pi}{T} t}\,dt \\&= \frac{\sin\left(\frac{2\pi k S}{T}\right)}{\pi k} \\&= \frac{2\sin(\omega S)}{T\,\omega}\quad \left(\omega = \frac{2\pi}{T}k = k\omega_0\right)\end{aligned}
$$
{% endraw %}



{% raw %}
$$
\lim_{T\to\infty} Ta_k = \lim_{T\to\infty} T {1\over T} \int_{T/2}^{T/2} x(t) e^{-j\omega t} dt = {2\sin \omega S \over \omega} = E(\omega)
$$
{% endraw %}


- Relationship equation btw FS and Fourier transform
- $\lim_{T\to \infty} Ta_k = E(\omega)$

{% raw %}
$$
x_T(t)= \sum_{k=-\infty}^{\infty} a_k e^{j k \frac{2\pi}{T} t}= \sum_{k=-\infty}^{\infty} \frac{1}{T} E(k\omega_0) e^{j k \omega_0 t}
$$
{% endraw %}



{% raw %}
$$
\begin{aligned}x(t)&= \lim_{T \to \infty} x_T(t) \\&= \lim_{T \to \infty} \sum_{k=-\infty}^{\infty} \frac{1}{T} E(k\omega_0) e^{j k \omega_0 t} \\&= \lim_{T \to \infty} \sum_{k=-\infty}^{\infty} \frac{1}{2\pi} E(\omega) e^{j \omega t} \omega_0 \\&= \frac{1}{2\pi} \int_{-\infty}^{\infty} E(\omega) e^{j \omega t} \, d\omega\end{aligned}
$$
{% endraw %}



## Fourier transform

- Fourier transform (Analysis)

{% raw %}
$$
X(j\omega) = \int_{-\infty}^\infty x(t) e^{-j\omega t} dt
$$
{% endraw %}


- Inverse Fourier transform (Synthesis)

{% raw %}
$$
x(t)  ={1\over 2\pi } \int_{-\infty}^\infty X(j\omega) e^{j\omega t} d\omega
$$
{% endraw %}



### Eigenffunction of LTI system

- for eigenfunction $e^{j\omega t}$, Let’s denote eigenvalue for $e^{j\omega t}$ as $H(j\omega)$

{% raw %}
$$
\begin{aligned}y(t)&= e^{j\omega t} * h(t) \\&= \int_{-\infty}^{\infty} h(\tau)e^{j\omega (t-\tau)}\,d\tau \\&= e^{j\omega t} \int_{-\infty}^{\infty} h(\tau)e^{-j\omega \tau}\,d\tau \\ &=H(j\omega ) e^{j\omega t}\end{aligned}
$$
{% endraw %}


- Therefore, Fourier transform of $h(t) $ is  $H(j\omega)$

## Properties of CTFT


### Convolution theorem


{% raw %}
$$
y(t) = h(t) * x(t)\xLeftrightarrow{\mathrm{CTFT}}Y(j\omega) = H(j\omega)X(j\omega)
$$
{% endraw %}



{% raw %}
$$
\begin{aligned}Y(j\omega)&= \int_{-\infty}^{\infty} \left[\int_{-\infty}^{\infty} x(\tau)h(t-\tau)\,d\tau \right] e^{-j\omega t}\,dt \\&= \int_{-\infty}^{\infty} x(\tau) \left[\int_{-\infty}^{\infty} h(t-\tau)e^{-j\omega t}\,dt \right] d\tau \\&= \int_{-\infty}^{\infty} x(\tau) \left[e^{-j\omega \tau} H(j\omega)\right] d\tau \\&= H(j\omega) \int_{-\infty}^{\infty} x(\tau)e^{-j\omega \tau}\,d\tau \\&= H(j\omega)X(j\omega)\end{aligned}
$$
{% endraw %}


- Convolution on t-domain → Multiplication in frequency domain

### Examples of Fourier transform

- $x(t) = \text{rect}(t/2s) \xLeftrightarrow{\mathrm{CTFT}}X(j\omega ) = {2\sin \omega S \over \omega }= 2S\text{sinc}{(\omega S/\pi)}$
- $x(t) = e^{-at}u(t) \xLeftrightarrow{\mathrm{CTFT}} X(j \omega) = {1\over a+j\omega}$

## Duality

- FT and IFT have almost the same form (differ by just a constant and sign)
- in most cases, properties that apply to $x(t) \rightarrow X(j\omega)$, also apply to $X(j\omega) \rightarrow x(t)$

### Zero frequency


{% raw %}
$$
X(0) = \int_{-\infty}^\infty x(t) dt
$$
{% endraw %}


- FT @ zero : total integration of signal → DC component of a signal

### DC → Impulse


{% raw %}
$$
1\xLeftrightarrow{\mathrm{CTFT}} 2\pi \delta (\omega)
$$
{% endraw %}


- From the CTFT equation, can define new definition of impulse function

{% raw %}
$$
\delta(\omega) = {1\over 2\pi} \int_{-\infty}^\infty e^{-j\omega t}dt
$$
{% endraw %}


- DC signal (i.e. $1$) can be considered as $\text{rect}$ function with infinite width,

{% raw %}
$$
\lim_{L\to \infty} L\text{sinc} (L {\omega \over 2\pi} ) = 2\pi\delta(\omega)
$$
{% endraw %}



### Impulse → DC


{% raw %}
$$
\delta(\omega)\xLeftrightarrow{\mathrm{CTFT}} 1
$$
{% endraw %}



### Linearity & Time shifting, Frequency shifting

- Time shifting

{% raw %}
$$
x(t-t_0) \xLeftrightarrow{\mathrm{CTFT}} X(j\omega) e^{-j\omega t_0}
$$
{% endraw %}


- Frequency shifting

{% raw %}
$$
e^{j\omega_0 t} x(t) \xLeftrightarrow{\mathrm{CTFT}} X(j(\omega - \omega_0))
$$
{% endraw %}



### Flipping


{% raw %}
$$
\mathcal F\{x(-t)\} = X(-j\omega)
$$
{% endraw %}


- Derivation : replace $\omega$ by $-\omega$ and solve
- Property of Even / Odd conserves

### Scaling


{% raw %}
$$
x(at)\xLeftrightarrow{\mathrm{CTFT}}\frac{1}{|a|} X\!\left(j\frac{\omega}{a}\right)
$$
{% endraw %}


- Shrinking not only applies on the frequency but it also shrinks the amplitude

{% raw %}
$$
\begin{aligned}\mathcal{F}\{x(at)\}&= \int_{-\infty}^{\infty} x(at)e^{-j\omega t}\,dt \\&= \int_{-\infty}^{\infty} x(\tau)e^{-j(\omega/a)\tau} \frac{d\tau}{a} \\&=\begin{cases}\frac{1}{a} \int_{-\infty}^{\infty} x(\tau)e^{-j(\omega/a)\tau}\,d\tau, & a>0 \\-\frac{1}{a} \int_{-\infty}^{\infty} x(\tau)e^{-j(\omega/a)\tau}\,d\tau, & a<0\end{cases} \\&= \frac{1}{|a|} \int_{-\infty}^{\infty} x(\tau)e^{-j(\omega/a)\tau}\,d\tau \\&= \frac{1}{|a|} X\!\left(j\frac{\omega}{a}\right)\end{aligned}
$$
{% endraw %}



### Multiplication


{% raw %}
$$
y(t) = h(t)x(t)\xLeftrightarrow{\mathrm{CTFT}}Y(j\omega) = \frac{1}{2\pi} H(j\omega) * X(j\omega)
$$
{% endraw %}


- Duality with convolution theorem

{% raw %}
$$
\begin{aligned}Y(j\omega)&= \int_{-\infty}^{\infty} x(t)h(t)e^{-j\omega t}\,dt \\&= \int_{-\infty}^{\infty} \left[\frac{1}{2\pi}\int_{-\infty}^{\infty} X(j\omega')e^{j\omega' t}\,d\omega'\right] h(t)e^{-j\omega t}\,dt \\&= \frac{1}{2\pi} \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} X(j\omega') e^{j(\omega'-\omega)t} h(t)\,d\omega'\,dt \\&= \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega') \left[\int_{-\infty}^{\infty} h(t)e^{j(\omega'-\omega)t}\,dt \right] d\omega' \\&= \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega') H\!\left(j(\omega-\omega')\right)\,d\omega' \\&= \frac{1}{2\pi} X(j\omega) * H(j\omega)\end{aligned}
$$
{% endraw %}



### Conjugation


{% raw %}
$$
x^*(t) \xLeftrightarrow{\mathrm{CTFT}} X^*(-j\omega)
$$
{% endraw %}



{% raw %}
$$
\begin{aligned}\mathcal{F}\{x^*(t)\}&= \int_{-\infty}^{\infty} x^*(t)e^{-j\omega t}\,dt \\&= \overline{\int_{-\infty}^{\infty} x(t)e^{j\omega t}\,dt} \\&= \overline{X(-j\omega)} \\&= X^*(-j\omega)\end{aligned}
$$
{% endraw %}


- Conjugation symmetry

$x(t)$ is real, then $X(j\omega)$ is conjugate symmetric


{% raw %}
$$
\begin{aligned} x(t)& \xLeftrightarrow{\mathrm{CTFT}} X(j\omega) \\ x^*(t)& \xLeftrightarrow{\mathrm{CTFT}}X^*(-j\omega) \\ X(j\omega) & = X^*(-j\omega)\end{aligned}
$$
{% endraw %}


- Conjugate symmetric : Even for real value, Odd for imaginary value
- $x(t)$ is real and even, then $X(j\omega)$ is real.
- $x(t) $ is real and odd, then $X(j\omega)$ is pure imaginary.
- For an arbitrary real signal,

{% raw %}
$$
X(j\omega) = X_e(j\omega) + X_o(j\omega) = \mathcal {Re}\{X(j\omega\} + j\mathcal{Im}\{X(j\omega)\}
$$
{% endraw %}


- Example : $\mathcal {F} \{e^{-{a\vert t \vert}}\}$ where $e^{-at}u(t) \xLeftrightarrow{\mathrm{CTFT}}{1\over a+j\omega}$
- $e^{-a\vert t \vert}$ is even part of $2e^{-at}u(t)$

{% raw %}
$$
\begin{aligned}x(t)&= e^{-a|t|}= e^{-at}u(t) + e^{at}u(-t) \\&= 2\left[\frac{e^{-at}u(t) + e^{at}u(-t)}{2}\right]= 2\mathcal{Ev}\{e^{-at}u(t)\}\end{aligned}
$$
{% endraw %}



{% raw %}
$$
\mathcal{Ev}\{e^{-at}u(t)\}\xLeftrightarrow{\mathrm{CTFT}}\mathcal{Re}\left\{\frac{1}{a + j\omega}\right\}
$$
{% endraw %}



{% raw %}
$$
\frac{1}{a + j\omega}= \frac{a - j\omega}{a^2 + \omega^2}= \frac{a}{a^2 + \omega^2} - j\frac{\omega}{a^2 + \omega^2}
$$
{% endraw %}



{% raw %}
$$
X(j\omega)= 2\mathcal{Re}\left\{\frac{1}{a + j\omega}\right\}= \frac{2a}{a^2 + \omega^2}
$$
{% endraw %}



### Differentiation


{% raw %}
$$
{d\over dt } x(t) \xLeftrightarrow{\mathrm{CTFT}} j\omega X(j\omega)
$$
{% endraw %}



### CTFT of signum (sign) function


{% raw %}
$$
\text{sgn}(t) \xLeftrightarrow{\mathrm{CTFT}} {2\over j\omega}
$$
{% endraw %}


- Defining sum of two ranged functions
- $g(t) \begin{cases}e^{-at}, & t\geq 0 \\ -e^{at}, & t<0\end{cases}$, $\text{sgn} (t) = \lim_{a\to 0} g(t)$

{% raw %}
$$
\mathcal{F}\{g(t)\} = \int_0^\infty e^{-at}e^{-j\omega t} dt + \int_{-\infty}^0 -e^{at}e^{-j\omega t}dt = {-2j\omega \over \omega^2 + a^2}
$$
{% endraw %}



{% raw %}
$$
\mathcal{F}\{\text{sgn}(t)\} = \lim_{a\to 0}\mathcal{F}\{g(t)\} = {2\over j\omega}
$$
{% endraw %}



### Unit step function


{% raw %}
$$
u(t) = {\text{sgn} (t) + 1 \over 2} \xLeftrightarrow{\mathrm{CTFT}} {1\over j\omega} + \pi \delta(\omega)
$$
{% endraw %}



### Integration


{% raw %}
$$
\int_{-\infty}^t x(\tau)d\tau \xLeftrightarrow{\mathrm{CTFT}} {1\over j\omega} X(j\omega) + \pi X(0) \delta(\omega)
$$
{% endraw %}


- Inverse of Differentiation but added initial value (Constant)

{% raw %}
$$
\int_{-\infty}^t x(\tau) d\tau = x(t) * u(t)
$$
{% endraw %}



{% raw %}
$$
\begin{aligned}\mathcal{F}\left\{\int_{-\infty}^{t} x(\tau)\,d\tau\right\}&= \mathcal{F}\{x(t) * u(t)\} \\&= X(j\omega)\left(\frac{1}{j\omega} + \pi \delta(\omega)\right) \\&= \frac{1}{j\omega} X(j\omega) + \pi X(0)\delta(\omega)\end{aligned}
$$
{% endraw %}



### Parseval’s relation


{% raw %}
$$
\int_{-\infty}^{\infty} |x(t)|^2 dt=\frac{1}{2\pi} \int_{-\infty}^{\infty} |X(j\omega)|^2 d\omega=\int_{-\infty}^{\infty} \frac{|X(j\omega)|^2}{2\pi} d\omega
$$
{% endraw %}



{% raw %}
$$
\begin{aligned}
\int_{-\infty}^{\infty} |x(t)|^2 dt
&= \int_{-\infty}^{\infty} x(t)x^*(t)\,dt \\
&= \int_{-\infty}^{\infty} x(t)\left[\frac{1}{2\pi}\int_{-\infty}^{\infty} X^*(j\omega)e^{-j\omega t}\,d\omega \right] dt \\
&= \frac{1}{2\pi} \int_{-\infty}^{\infty} X^*(j\omega)\left[\int_{-\infty}^{\infty} x(t)e^{-j\omega t}\,dt \right] d\omega \\
&= \frac{1}{2\pi} \int_{-\infty}^{\infty} X^*(j\omega)X(j\omega)\,d\omega \\
&= \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(j\omega)|^2 d\omega
\end{aligned}
$$
{% endraw %}


- use relation $\vert x(t) \vert ^2 = x(t) x^*(t)$

<script>
  window.MathJax = {
    tex: {
      macros: {
        R: "\\mathbb{R}",
        N: "\\mathbb{N}",
        Z: "\\mathbb{Z}",
        Q: "\\mathbb{Q}",
        C: "\\mathbb{C}",
        proj: "\\operatorname{proj}",
        rank: "\\operatorname{rank}",
        im: "\\operatorname{im}",
        dom: "\\operatorname{dom}",
        codom: "\\operatorname{codom}",
        argmax: "\\operatorname*{arg\,max}",
        argmin: "\\operatorname*{arg\,min}",
        "\{": "\\lbrace",
        "\}": "\\rbrace",
        sub: "\\subset",
        sup: "\\supset",
        sube: "\\subseteq",
        supe: "\\supseteq"
      },
      tags: "ams",
      strict: false, 
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]]
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"]
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

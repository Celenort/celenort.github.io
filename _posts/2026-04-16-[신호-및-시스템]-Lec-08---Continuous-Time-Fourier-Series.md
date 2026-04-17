---
layout: post
title: "[신호 및 시스템] Lec 08 - Continuous Time Fourier Series"
date: 2026-04-16
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-04-16-[신호-및-시스템]-Lec-08---Continuous-Time-Fourier-Series/0-cdcc306578.png"
  alt: "[신호 및 시스템] Lec 08 - Continuous Time Fourier Series"
description: ""
tags: ["Signal", "System"]
categories: ["Lecture", "신호 및 시스템"]
math: true
---

### Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 박성준 교수님의 신호 및 시스템 (26 Spring) 강의록입니다.


## Periodic signals and harmonics

- consider $x(t)$ with fundamental period $T$ (Fundamental frequency $\omega _0 = {2\pi \over T}$)
- Harmonics : complex exponentials (or sinusoids) whose frequencies are integer multiples of the fundamental frequency
- $\phi_{c, k}(t) = e^{jk\omega_0 t} = e^{jk{2\pi\over T} t}, k=0, \pm 1, \pm 2 , \cdots$
- Harmonic representations : Periodic signals can be represented as a sum of harmonics

{% raw %}
$$
x(t) = \sum_{k=-\infty}^\infty a_k e^{jk\omega_0 t} = \sum_{k=-\infty}^\infty a_k e^{jk{2\pi\over T} t}
$$
{% endraw %}



### Fourier series representation

- Mathematical property for finding $a_k$

{% raw %}
$$
\int_{t_0}^{t_0+T}e^{jk\omega_0 t}dt = \int_T e^{jk\omega_0 t} dt = \begin{cases}0, & k\neq 0 \\ T, & k=0\end{cases} = T\delta[k]
$$
{% endraw %}



{% raw %}
$$
x(t) = \sum_{k=-\infty}^{\infty} a_k e^{j k \omega_0 t}
$$
{% endraw %}



{% raw %}
$$
\int_T x(t)e^{-j l \omega_0 t} \, dt=\int_T \sum_{k=-\infty}^{\infty} a_k e^{j k \omega_0 t} e^{-j l \omega_0 t} \, dt
$$
{% endraw %}



{% raw %}
$$
= \sum_{k=-\infty}^{\infty} a_k \int_T e^{j (k-l)\omega_0 t} \, dt= \sum_{k=-\infty}^{\infty} a_k T \delta[k-l]= T a_l
$$
{% endraw %}



{% raw %}
$$
a_k = \frac{1}{T} \int_T x(t)e^{-j k \omega_0 t} \, dt= \frac{1}{T} \int_T x(t)e^{-j k \frac{2\pi}{T} t} \, dt
$$
{% endraw %}



## Fourier Series

- Analysis

{% raw %}
$$
a_k = \frac{1}{T} \int_T x(t)e^{-j k \frac{2\pi}{T} t}\,dt
$$
{% endraw %}


- Synthesis

{% raw %}
$$
x(t) = \sum_{k=-\infty}^{\infty} a_k e^{j k \frac{2\pi}{T} t}
$$
{% endraw %}



### Dirichlet conditions for pointwise convergence

- There is no energy in the difference $\int_T |e(t)|^2 dt = 0$ where $e(t) = x(t) - \sum_{k=-\infty}^{\infty} a_k e^{j k \frac{2\pi}{T} t}$
- if $\int_T |x(t)|^2 dt < \infty$ ($x(t)$ has finite energy per period)
- Condition 1 : $x(t)$ is absolutely integrable over one period, i.e.
- Condition 2 : In a finite time interval, $x(t)$ has a finite number of maxima and minima.
	- $x(t) = \sin (2\pi /t)$ : Violates condition 2
- Condition 3 : $x(t)$ has only a finite number of discontinuities

{% raw %}
$$
\sum_{k=-\infty}^{\infty} a_k e^{j k \frac{2\pi}{T} t}=\frac{1}{2}\left(x(t^-) + x(t^+)\right)
$$
{% endraw %}


- The fourier series : “midpoint” at points of discontinuity

## Fourier Series


### Mean value


{% raw %}
$$
a_k = \frac{1}{T} \int_0^T x(t)e^{-j k \omega_0 t}\,dt \Rightarrow_{k=0} a_0 = \frac{1}{T} \int_0^T x(t)\,dt
$$
{% endraw %}



### Constant ↔ Impulse

- Scalar constant
- $A \xLeftrightarrow{\mathrm{FS}} A\delta[k]$

{% raw %}
$$
a_k = \frac{1}{T} \int_0^T A e^{-j k \omega_0 t}\,dt= A \frac{e^{-j k \omega_0 T} - 1}{-j k \omega_0 T}=\begin{cases}A, & k = 0 \\0, & k \ne 0\end{cases} =A\delta[k]
$$
{% endraw %}


- Periodic impulses
- $\sum_{n=-\infty}^{\infty} \delta(t - nT)\xLeftrightarrow{\mathrm{FS}}\frac{1}{T}$

{% raw %}
$$
a_k = \frac{1}{T} \int_{nT - \frac{T}{2}}^{nT + \frac{T}{2}} \delta(t - nT)e^{-j k \omega_0 t}\,dt= \frac{1}{T} e^{-j k n \omega_0 T}= \frac{1}{T}
$$
{% endraw %}



### Time & Frequency Shift

- Time shift

{% raw %}
$$
\tilde{x}_T(t - t_0)\xLeftrightarrow{\mathrm{FS}}a_k e^{-j k \omega_0 t_0}
$$
{% endraw %}



{% raw %}
$$
\tilde{x}_T(t - t_0)= \sum_{k=-\infty}^{\infty} a_k e^{j k \omega_0 (t - t_0)}= \sum_{k=-\infty}^{\infty} a_k e^{-j k \omega_0 t_0} e^{j k \omega_0 t}
$$
{% endraw %}



→ $t \leftarrow t-t_0$ : Follows the original sign

- Frequency shift

{% raw %}
$$
\tilde{x}_T(t)e^{j k_0 \omega_0 t}\xLeftrightarrow{\mathrm{FS}}a_{k - k_0}
$$
{% endraw %}



{% raw %}
$$
a'_k= \frac{1}{T} \int_0^T \tilde{x}_T(t)e^{j k_0 \omega_0 t} e^{-j k \omega_0 t}\,dt= \frac{1}{T} \int_0^T \tilde{x}_T(t)e^{-j (k - k_0)\omega_0 t}\,dt= a_{k - k_0}
$$
{% endraw %}



→ $k \leftarrow k-k_0$ : reverses the original sign


### Differentiation & integration

- Differentiation

{% raw %}
$$
\frac{d}{dt}\tilde{x}_T(t)\xLeftrightarrow{\mathrm{FS}}j k \omega_0 a_k
$$
{% endraw %}



{% raw %}
$$
\frac{d}{dt}\left(\sum_{k=-\infty}^{\infty} a_k e^{j k \omega_0 t}\right)= j k \omega_0 \sum_{k=-\infty}^{\infty} a_k e^{j k \omega_0 t}
$$
{% endraw %}


- $jk\omega_0$ omits.
- Geometrical Interpretation : Higher-order harmonics are amplified

![](/assets/img/2026-04-16-[신호-및-시스템]-Lec-08---Continuous-Time-Fourier-Series/0-cdcc306578.png)

- Integration

{% raw %}
$$
\int_{-\infty}^{t} \tilde{x}_T(\tau)\,d\tau\xLeftrightarrow{\mathrm{FS}}\frac{1}{j k \omega_0} a_k
$$
{% endraw %}



{% raw %}
$$
\sum_{k=-\infty}^{\infty} a_k \int_{-\infty}^{t} e^{j k \omega_0 \tau}\,d\tau= \sum_{k=-\infty}^{\infty} \left(\frac{1}{j k \omega_0} a_k\right) e^{j k \omega_0 t}
$$
{% endraw %}


- $1/jk\omega_0$ omits.
- Geometrical interpretation : Higher-order harmonics are suppresed

![](/assets/img/2026-04-16-[신호-및-시스템]-Lec-08---Continuous-Time-Fourier-Series/1-852cfeea80.png)


### Flip


{% raw %}
$$
\tilde{x}_T(-t)\xLeftrightarrow{\mathrm{FS}}a_{-k}\quad (= a_k^* \text{ for real } \tilde{x}_T(t))
$$
{% endraw %}



{% raw %}
$$
\tilde{x}_T(-t)= \sum_{k=-\infty}^{\infty} a_k e^{-j k \omega_0 t}= \sum_{k=-\infty}^{\infty} a_{-k} e^{j k \omega_0 t}
$$
{% endraw %}


- Fourier coefficient also flipped
- Application to even, odd function :
	- Even function $\tilde{x}_T(-t) = \tilde{x}_T(t)
	\xLeftrightarrow{\mathrm{FS}}
	a_{-k} = a_k$
	- Odd function $\tilde{x}_T(-t) = -\tilde{x}_T(t)
	\xLeftrightarrow{\mathrm{FS}}
	a_{-k} = -a_k$
	- Even → Even, Odd → Odd : Even odd property still remains

### Time scaling


{% raw %}
$$
\tilde{x}_T(\alpha t)\xLeftrightarrow{\mathrm{FS}}a_k\quad (\omega_0 \rightarrow \alpha \omega_0)
$$
{% endraw %}



{% raw %}
$$
\tilde{x}_T(\alpha t)= \sum_{k=-\infty}^{\infty} a_k e^{j k \omega_0 \alpha t}= \sum_{k=-\infty}^{\infty} a_k e^{j k (\alpha \omega_0) t}
$$
{% endraw %}


- For coefficient $\alpha$ affects the frequency, not the coefficient directly

### Conjugate symmetric


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

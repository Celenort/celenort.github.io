---
layout: post
title: "[신호 및 시스템] Lec 08, 09 - Continuous/Discrete Time Fourier Series"
date: 2026-04-16
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-04-16-[신호-및-시스템]-Lec-08,-09---ContinuousDiscrete-Time-Fourier-Series/0-cdcc306578.png"
  alt: "[신호 및 시스템] Lec 08, 09 - Continuous/Discrete Time Fourier Series"
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



## CT Fourier Series

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

- There is no energy in the difference $\int_T \vert e(t)\vert^2 dt = 0$ where $e(t) = x(t) - \sum_{k=-\infty}^{\infty} a_k e^{j k \frac{2\pi}{T} t}$
- if $\int_T \vert x(t)\vert^2 dt < \infty$ ($x(t)$ has finite energy per period)
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

![](/assets/img/2026-04-16-[신호-및-시스템]-Lec-08,-09---ContinuousDiscrete-Time-Fourier-Series/0-cdcc306578.png)

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

![](/assets/img/2026-04-16-[신호-및-시스템]-Lec-08,-09---ContinuousDiscrete-Time-Fourier-Series/1-852cfeea80.png)


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
- for $\alpha>1$, shrinking the original function works as multiplication of same factor to frequency

### Conjugate symmetric

- If $x(t)$ is real, then $a_{-k} = a_k^*$ and $a_k = a_{-k}^*$

{% raw %}
$$
\begin{aligned} x(t) &= \sum_{k=-\infty}^{\infty} a_k e^{j k \omega_0 t}= x^*(t)= \sum_{k=-\infty}^{\infty} a_k^* e^{-j k \omega_0 t}  \\ &= \sum_{l=-\infty}^{\infty} a_{-l}^* e^{j l \omega_0 t} = \sum_{k=-\infty}^{\infty} a_{-k}^* e^{j k \omega_0 t}\end{aligned}
$$
{% endraw %}



{% raw %}
$$
\therefore a_{-k}^* = a_k
$$
{% endraw %}


- Which means, the real part of $a_k$ of real function is even, while odd part of $a_k $ is odd.

![](/assets/img/2026-04-16-[신호-및-시스템]-Lec-08,-09---ContinuousDiscrete-Time-Fourier-Series/2-feb7c18c7e.png)

- Interpretation as a complex exponential function,  in terms of magnitude → even function, phase → odd function

![](/assets/img/2026-04-16-[신호-및-시스템]-Lec-08,-09---ContinuousDiscrete-Time-Fourier-Series/3-a2a79b6383.png)


### Complex conjugate : Conclusion

- $x(t)$ is real, even → $a_k$ are conjugate even and even → $a_k $ are real, even.
- $x(t)$ is real, odd → $a_k$ are conjugate even and odd → $a_k$ are pure imaginary, odd

### Multiplication


$\tilde{x}_T(t)\xLeftrightarrow{\mathrm{FS}}a_k,\tilde{y}_T(t)\xLeftrightarrow{\mathrm{FS}}b_k$


{% raw %}
$$
\tilde{x}_T(t)\tilde{y}_T(t)\xLeftrightarrow{\mathrm{FS}}\sum_{m=-\infty}^{\infty} a_m b_{k-m}
$$
{% endraw %}


- Multiplication → convolution

{% raw %}
$$
\begin{aligned}\tilde{x}_T(t)\tilde{y}_T(t)&= \left(\sum_{m=-\infty}^{\infty} a_m e^{j m \omega_0 t}\right)   \left(\sum_{n=-\infty}^{\infty} b_n e^{j n \omega_0 t}\right) \\&= \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} a_m b_n e^{j (m+n)\omega_0 t} \\&= \sum_{m=-\infty}^{\infty} \sum_{k=-\infty}^{\infty} a_m b_{k-m} e^{j k \omega_0 t} \\&= \sum_{k=-\infty}^{\infty} \left(\sum_{m=-\infty}^{\infty} a_m b_{k-m}\right) e^{j k \omega_0 t}\end{aligned}
$$
{% endraw %}



### Convolution


$\tilde{x}_T(t)\xLeftrightarrow{\mathrm{FS}}a_k, \tilde{y}_T(t)\xLeftrightarrow{\mathrm{FS}}b_k$


{% raw %}
$$
\tilde{x}_T(t) * \tilde{y}_T(t)\xLeftrightarrow{\mathrm{FS}}T a_k b_k
$$
{% endraw %}



{% raw %}
$$
\begin{aligned}
\tilde{x}_T(t) * \tilde{y}_T(t)
&= \int_0^T \left[\sum_{m=-\infty}^{\infty} a_m e^{j m \omega_0 \tau}
\sum_{n=-\infty}^{\infty} b_n e^{j n \omega_0 (t-\tau)}\right] d\tau \\
&= \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} a_m b_n
\left(\int_0^T e^{j (m-n)\omega_0 \tau} d\tau\right) e^{j n \omega_0 t} \\
&= \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} a_m b_n (T\delta_{mn}) e^{j n \omega_0 t} \\
&= \sum_{n=-\infty}^{\infty} T a_n b_n e^{j n \omega_0 t}
\end{aligned}
$$
{% endraw %}


- by the property of Fourier series (intergrate over one period) → $T$ omits

### Parseval’s relation


{% raw %}
$$
\frac{1}{T}\int_T |\tilde{x}_T(t)|^2 dt=\sum_{k=-\infty}^{\infty} |a_k|^2
$$
{% endraw %}


- Average power over one period = Total squared sum of fourier series coefficient

{% raw %}
$$
\frac{1}{T}\int_T |\tilde{x}_T(t)|^2 dt= \sum_{k=-\infty}^{\infty} \frac{1}{T}\int_T |a_k e^{j k \omega_0 t}|^2 dt = \sum_{k=-\infty}^{\infty} |a_k|^2
$$
{% endraw %}



### Example : periodic rectangular function


$\mathrm{rect}(t) =\begin{cases}1, & |t| \le 0.5 \\0, & |t| > 0.5\end{cases}$


{% raw %}
$$
\begin{aligned}a_k&= \frac{1}{T}\int_{-L/2}^{L/2} e^{-j k \omega_0 t}\,dt \\&= -\frac{1}{j k \omega_0 T} \left[ e^{-j k \omega_0 t} \right]_{-L/2}^{L/2} \\&= -\frac{1}{j k \omega_0 T} \left( e^{-j k \omega_0 \frac{L}{2}} - e^{j k \omega_0 \frac{L}{2}} \right) \\&= -\frac{1}{j k \omega_0 T} \left( -2j \sin\left(\frac{k \omega_0 L}{2}\right) \right) \\&= \frac{1}{k\pi} \sin\left(\frac{k\pi L}{T}\right) \\&= \frac{L}{T} \frac{\sin\left(\frac{k\pi L}{T}\right)}{\frac{k\pi L}{T}} = {L\over T}\text{sinc}({k\pi L \over T})\end{aligned}
$$
{% endraw %}



## DT Fourier Series

- Analysis

{% raw %}
$$
a_k = {1\over N} \sum_{<N>} x[n] e^{-j{2\pi k n \over N}}
$$
{% endraw %}


- Synthesis

{% raw %}
$$
x[n] = \sum_{k=<N>} a_ke^{j{2\pi k n \over N}}
$$
{% endraw %}



### Linearity, time-frequency shift

- Time shift

{% raw %}
$$
\tilde x_N[n-n_0] \xLeftrightarrow{\mathrm{FS}} a_k e^{-jk{2\pi \over N} n_0}
$$
{% endraw %}


- Frequency shift

{% raw %}
$$
\tilde x_N[n] e^{jk_0 {2\pi\over n} n} \xLeftrightarrow{\mathrm{FS}} a_{k-k_0}
$$
{% endraw %}



### Convolution, multiplication

- (Periodic) Convolution

$\tilde{x}_1[n]\xLeftrightarrow{\mathrm{FS}}a_k,\tilde{x}_2[n]\xLeftrightarrow{\mathrm{FS}}b_k$


{% raw %}
$$
\tilde{z}_N[n]= \sum_{k=\langle N \rangle} \tilde{x}_N[k]\tilde{y}_N[n-k]\xLeftrightarrow{\mathrm{FS}}c_k = N a_k b_k
$$
{% endraw %}



{% raw %}
$$
\tilde{z}_N[n]= \tilde{x}_N[n]\tilde{y}_N[n]\xLeftrightarrow{\mathrm{FS}}c_k = \sum_{l=\langle N \rangle} a_l b_{k-l}
$$
{% endraw %}


- In case of convolution, $N$ omits

### Difference, running sum

- Difference

{% raw %}
$$
\tilde{x}_N[n] - \tilde{x}_N[n-1]\xLeftrightarrow{\mathrm{FS}}\left(1 - e^{-j k \frac{2\pi}{N}}\right)a_k
$$
{% endraw %}


- Just summation of original FS + time shift FS
- Running sum

{% raw %}
$$
\sum_{k=-\infty}^{n} \tilde{x}_N[k]\xLeftrightarrow{\mathrm{FS}}\frac{1}{1 - e^{-j k \frac{2\pi}{N}}} a_k
$$
{% endraw %}


- Work as infitnite sum of series with $r = e^{-jk\Omega_0}$

### Time-scaling


{% raw %}
$$
\tilde{x}_{mN}[n] =\begin{cases}\tilde{x}_N[n/m], & \text{if } n/m \text{ is integer} \\0, & \text{otherwise}\end{cases}\xLeftrightarrow{\mathrm{FS}}\frac{1}{m} a_k
$$
{% endraw %}


- Works conversely : for CT $x(t) \rightarrow x(\alpha t)$ but in case of DT $x_N[n] \rightarrow x_{mN}[n]=x_N[n/m]$
- for $m>1$, stretches the signal, and fills the hole with zero

### Conjugate symmetric

- If $x_N[n]$ is real, then $a_{-k} = a_k^*$ and $a_k = a_{-k}^*$

{% raw %}
$$
\tilde x_N[n]^*  \xLeftrightarrow{\mathrm{FS}} a_{-k}^*
$$
{% endraw %}



### Parseval’s relation


{% raw %}
$$
\frac{1}{N} \sum_{k=\langle N \rangle} |\tilde{x}_N[n]|^2=\sum_{k=\langle N \rangle} |a_k|^2
$$
{% endraw %}



<script>
  window.MathJax = {
    loader: {
      load: ['[tex]/ams', '[tex]/extpfeil']
    },
    tex: {
      packages: {
        '[+]': ['ams', 'extpfeil']
      },
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
        argmax: "\\operatorname*{arg\\,max}",
        argmin: "\\operatorname*{arg\\,min}",
        "\\{": "\\lbrace",
        "\\}": "\\rbrace",
        sub: "\\subset",
        sup: "\\supset",
        sube: "\\subseteq",
        supe: "\\supseteq",

        // === extensible arrows (통일 정의) ===
        xleftarrow: "\\Newextarrow{\\xleftarrow}{5,5}{0x2190}",
        xrightarrow: "\\Newextarrow{\\xrightarrow}{5,5}{0x2192}",
        xLeftarrow: "\\Newextarrow{\\xLeftarrow}{5,5}{0x21D0}",
        xRightarrow: "\\Newextarrow{\\xRightarrow}{5,5}{0x21D2}",
        xleftrightarrow: "\\Newextarrow{\\xleftrightarrow}{5,5}{0x2194}",
        xLeftrightarrow: "\\Newextarrow{\\xLeftrightarrow}{5,5}{0x27FA}"
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

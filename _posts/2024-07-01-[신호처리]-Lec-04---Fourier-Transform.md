
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

![](https://imgur.com/gCoG8nG.png)


_rect and sinc function_


![](https://imgur.com/jAJgQoP.png)


_Lorentzian function_


### F.T. Related to Shah Function

- Shah (or III) function and its F.T.
i.e. Sampling function.

{% raw %}
$$
\begin{aligned} III(t) = \sum_{k=-\infty}^\infty \delta(t-k) &\leftrightarrow \ III(f) \\ f(at) &\leftrightarrow \ \frac{1}{|a|} \mathcal{F}(\frac{f}{a}) \\ \frac{1}{T} III(\frac{t}{T}) &\leftrightarrow \ III(Tf) \end{aligned}
$$
{% endraw %}



![](https://imgur.com/2uGG9Yd.png)


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


<script>
  window.MathJax = {
    tex: {
      macros: {
        R: "\\\\mathbb{R}",
        N: "\\\\mathbb{N}",
        Z: "\\\\mathbb{Z}",
        Q: "\\\\mathbb{Q}",
        C: "\\\\mathbb{C}",
        proj: "\\\\operatorname{proj}",
        rank: "\\\\operatorname{rank}",
        im: "\\\\operatorname{im}",
        dom: "\\\\operatorname{dom}",
        codom: "\\\\operatorname{codom}",
        argmax: "\\\\operatorname*{arg\\,max}",
        argmin: "\\\\operatorname*{arg\\,min}",
        "\\{": "\\\\lbrace",
        "\\}": "\\\\rbrace",
        sub: "\\\\subset",
        sup: "\\\\supset",
        sube: "\\\\subseteq",
        supe: "\\\\supseteq"
      },
      tags: "ams",
      strict: false, 
      inlineMath: [["$", "$"], ["\\\\(", "\\\\)"]],
      displayMath: [["$$", "$$"], ["\\\\[", "\\\\]"]]
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"]
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

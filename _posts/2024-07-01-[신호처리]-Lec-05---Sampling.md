
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



![](/assets/img/2024-07-01-[신호처리]-Lec-05---Sampling.md/0.png)

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

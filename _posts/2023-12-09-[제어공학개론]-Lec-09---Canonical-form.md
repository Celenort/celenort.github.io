
## 📢Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 심형보 교수님의 23-2 제어공학개론 수업 내용을 바탕으로 작성되었습니다.


## Canonical form

- 수많은 A, B, C, D로 describe 될 수 있는 system을 특정 표준형으로 설정해둔 것.
- 교과서, 참고자료에 따라 다르게 설정할 수 있음.

### Controllability canonical form


{% raw %}
$$
\begin{aligned}
A &= \begin{bmatrix}0 & 1 & 0 & \cdots & 0 \\ 0 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & 1 \\ -a_0 & -a_1 & -a_2 & \cdots & -a_{n-1} \end{bmatrix} \\
B &= [0, 0, 0, \cdots, 1]^T \\
C &= [b_0, b_1, b_2, \cdots, b_{n-1}] \\ D &= [D]
\end{aligned}
$$
{% endraw %}



it represents transfer function


{% raw %}
$$
T(s) = \frac{b_{n-1}s^{n-1}+\cdots + b_1s+b_0}{s^n+a_{n-1}s^{n-1}+\cdots+a_1s + a_0}+D
$$
{% endraw %}



### another book...'s controllability canonical form

- original canonical form

![](/assets/img/2023-12-09-[제어공학개론]-Lec-09---Canonical-form.md/0.png)

- also called as companion form

![](/assets/img/2023-12-09-[제어공학개론]-Lec-09---Canonical-form.md/1.png)


### Observability canonical form


{% raw %}
$$
\begin{aligned}
A &= \begin{bmatrix}0 & 0 & 0 & \cdots& 0 & -a_0 \\ 1 & 0 & 0 & \cdots & 0 & -a_1 \\ 0 & 1 & 0 & \cdots& 0 & -a_2 \\ \vdots & \vdots & \vdots &\vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots &1 & -a_{n-1}  \end{bmatrix} \\
B &= [b_0, b_1, b_2, \cdots, b_{n-1}]^T \\
C &= [0, 0, 0, \cdots, 1] \\
D &= [D]
 \end{aligned}
$$
{% endraw %}



### another book...'s observability canonical form

- original canonical form

![](/assets/img/2023-12-09-[제어공학개론]-Lec-09---Canonical-form.md/2.png)

- companion canonical form

![](/assets/img/2023-12-09-[제어공학개론]-Lec-09---Canonical-form.md/3.png)

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

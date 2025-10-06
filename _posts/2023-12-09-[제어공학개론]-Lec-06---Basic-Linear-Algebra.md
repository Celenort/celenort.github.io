---
layout: post
title: "[제어공학개론] Lec 06 - Basic Linear Algebra"
date: 2023-12-09
draft: false
published: true
pin: false
image:
  path: ""
  alt: "[제어공학개론] Lec 06 - Basic Linear Algebra"
description: "제어공학개론 강의에서는 행렬-벡터 및 행렬-행렬 곱셈의 전개, 선형 방정식의 해의 존재성과 유일성, 행렬의 역수, 슈르 여인수, 고유값 및 고유벡터, 대각화 조건 등을 다루며, 특히 대각화가 가능한 조건과 제어 이론에서의 응용에 대해 설명합니다."
tags: ["Linear Algebra"]
categories: ["Lecture", "제어공학개론"]
math: true
---


## 📢Precaution


{: .prompt-info}


> 본 게시글은 서울대학교 심형보 교수님의 23-2 제어공학개론 수업 내용을 바탕으로 작성되었습니다.


## Row/Columnwise expansion of matrix-vector multiplication


{% raw %}
$$
Ax = \begin{bmatrix}\vert & \vert & & \vert \\ a_{\cdot 1} & a_{\cdot 2} & \cdots & a_{\cdot n} \\ \vert & \vert &  & \vert\end{bmatrix}\begin{bmatrix}\vert \\ x\\ \vert\end{bmatrix} = x_1 \begin{bmatrix}\vert \\ a_{\cdot 1}\\ \vert\end{bmatrix} + \cdots + x_n \begin{bmatrix}\vert \\ a_{\cdot n}\\ \vert\end{bmatrix}
$$
{% endraw %}



{% raw %}
$$
\begin{aligned}x^TB &= \begin{bmatrix}- & x & -\end{bmatrix}\begin{bmatrix}- & b_{1\cdot} & - \\ - & b_{2\cdot} & -\\ & \vdots &  \\- & b_{n\cdot} & -\end{bmatrix}  \\ &= x_1^T  \begin{bmatrix}- & b_{1\cdot} & - \end{bmatrix} + \cdots + x_n^T \begin{bmatrix}- & b_{n\cdot} & -\end{bmatrix}\end{aligned}
$$
{% endraw %}



## Row/Columnwise expansion of matrix-matrix multiplication


with the same method,


{% raw %}
$$
\begin{aligned}
A[B,C] &= [AB, AC] \\ 
\begin{bmatrix}A \\ B \end{bmatrix} C &= \begin{bmatrix}AC \\ BC \end{bmatrix}
\end{aligned}
$$
{% endraw %}



## two ways to describe Vectorspace

- 제한형

{% raw %}
$$
\{x\in\Re^3 \ \vert \  [0,0,1]\cdot x = 0\}
$$
{% endraw %}


- 생성형

{% raw %}
$$
\{span{\bigg[\begin{bmatrix}1 \\ 0\\ 0\end{bmatrix}, \begin{bmatrix}0 \\ 1\\ 0\end{bmatrix}, \begin{bmatrix}0 \\0\\ 1\end{bmatrix}\bigg]}\}
$$
{% endraw %}



## solve Ax=b (linear equation)

- 해의 존재성 : A의 column들이 b를 span할 수 있다면, 해가 존재. because....

{% raw %}
$$
\begin{aligned} Ax &= x_1A_1 + x_2A_2 + \cdots+x_nA_n = b \\ b &\in span(A) = R(A)
	\end{aligned}
$$
{% endraw %}


- 해의 유일성 : A의 nullspace가 공집합인 경우

{% raw %}
$$
N(A) = 0, N(A):=\{x|Ax=0\}
$$
{% endraw %}


- proof)

{% raw %}
$$
\begin{aligned}
	A\bar x = b, Ax^*=b \\ 
	A(\bar x - x^*) = 0 \Leftrightarrow \bar x = x^*
	\end{aligned}
$$
{% endraw %}



### "full column/row rank"


rank(A) = number of columns (i.e. $ N(A)=0$)


## Inverse of a matrix


Inverse는 A가 정방행렬일 때 존재.


{% raw %}
$$
\begin{aligned}
A^{-1} := AA^{-1} = A^{-1}A=I \\
Ax = [Ax_1, Ax_2, \cdots, Ax_n] = [e_1, e_2, \cdots e_n]
\end{aligned}
$$
{% endraw %}



solving N linear equations


{% raw %}
$$
\begin{aligned}
Ax_1 &= e_1, Ax_2 = e_2 \cdots, Ax_n = e_N \\
R(A) &\in {e_1, e_2, \cdots, e_n} \\
N(A) &= {0}
\end{aligned}
$$
{% endraw %}



A의 Inverse의 column들 역시 선형 독립이어야 함.


{% raw %}
$$
\begin{aligned}
A(c_1x_1+c_2x_2 + \cdots +c_nx_n) = 0, \text{then,} \\
\text{RHS =} c_1e_1 + c_2e_2 + \cdots c_ne_n = 0 \\
\text{only holds if } c_1 = c_2 = \cdots =c_n=0
\end{aligned}
$$
{% endraw %}



Inverse의 존재성은 $det(A)\neq0$

- det A : division연산을 미포함, 물리적으로 Volume과 일맥상통
- Volume의 존재성 : n개의 벡터들이 서로 독립이 아닐 경우 det=0임.

## Schur complement


{% raw %}
$$
\begin{aligned}
&det\begin{bmatrix}A & B \\ C & D\end{bmatrix} \\
A, B &= \text{rectangular matrix} \\
&\text {if A invertible,} \\
&=det A * det(D-CA^{-1}B) \\
&\text {if D invertible,} \\
&= det D * det(A-BD^{-1}C
\end{aligned}
$$
{% endraw %}


- ABCD에서 A가 invertible하면 D로 가고 이후 시계방향.
- D가 invertible하면, A로 가고 이후 시계방향

## Eigenvalue, Eigenvector


{% raw %}
$$
\lambda \text{s.t. } Ax=\lambda x
$$
{% endraw %}



{% raw %}
$$
\lambda, x = \text{(eigenvalue, eigenvector)}
$$
{% endraw %}



{% raw %}
$$
\begin{aligned} (\lambda I - A) x &= 0 \\ det(\lambda I - A)&= 0\end{aligned}
$$
{% endraw %}


- $\lambda$에 대한 Characteristic polynomial.
- C.P의 coeff가 Real이면 eigenvalue도 real or complex conjugate
- Real / Complex eigenvalue/vector

{% raw %}
$$
\begin{aligned}
	\lambda\text{ in } R \rightarrow x\in R^n \\ 
	\lambda\text{ in } C \rightarrow x\in C^n \\
	Ax=\lambda x, A\bar x = \bar \lambda \bar x
	\end{aligned}
$$
{% endraw %}



### Companion form

- Matrix that preserves Characteristic Polynomial (마지막 row에 모든 coeff들이 들어가 있음.)
- 차수는 오름차순으로 (차수 낮은거부터)

## Diagonalization of matrix


given matrix $A \in R^{n\times n}$


eigenvalues of $\lambda_i$ and corrosponding eigenvector $v_i$


{% raw %}
$$
v_i \in N(\lambda_i I -A)
$$
{% endraw %}



does $v_i$ s are independent?


if all $\lambda_i$ are distinct, all $v_i$ are linearly independent

- algebraic multiplicity : 실제로 몇번 $\lambda_i$가 중첩되었는가.
- geometric multiplicity : $dim\bigg(N(\lambda_i I -A)\bigg)$

### Geometric Multiplicity = Algebraic Multiplicity


악의적으로 설정하지 않는다면, 겹치지 않는 $v_i$들을 찾을 수 있음.


{% raw %}
$$
\begin{aligned}
\text{if }dim(N(\lambda_i I -A)) = 2 \\
v_i, v_j \in N(\lambda_i I -A), \text{s.t.} v_i \neq kv_j
\end{aligned}
$$
{% endraw %}



### Algebraic Multiplicity > Geometric Multiplicity


diagonal matrix에서 upper triangle에 1이 존재하는 경우, **degeneracy**가 생김.


Algebraic multiplicity가 2인데 geometric multiplicity가 1인 경우 : 해당 eigenvalue(들) 로부터 단 1개의 독립인 벡터를 뽑아낼 수 없음.


### n개의 독립인 eigenvector를 뽑아낼 수 있는 조건 (충분조건)

1. all $\lambda_i$ are distinct
2. $A=A^T$ : symmetric (악의적이지 않게 설정하면)

### Diagonalization


N개의 독립인 eigenvector들을 찾을 수 있냐 없냐에 따라 diagonalization 가능 여부가 결정됨


{% raw %}
$$
\begin{aligned}
Av_1 &= \lambda_1 v_1 \\
Av_i &= \lambda_i v_i \\
Av_n &= \lambda_n v_n
\end{aligned}
$$
{% endraw %}



Diagonalization of A


{% raw %}
$$
\begin{aligned}
&AV = VD \\
&A[v_1, v_2, \cdots, v_n] = diag(\lambda_1, \lambda_2, \cdots, \lambda_n)[v_1, v_2, \cdots, v_n]
\end{aligned}
$$
{% endraw %}



if $v$ are invertible (all columns of v are linearly independent,)


{% raw %}
$$
\begin{aligned}
V^{-1}AV &= D\\ 
VDV^{-1} &= A \text{(PDPinverse)}
\end{aligned}
$$
{% endraw %}



Application to control theory :


{% raw %}
$$
\begin{aligned}
\dot x &= Ax \\ 
\dot z &= Dz \\
\text{where } z&=V^{-1}x
\end{aligned}
$$
{% endraw %}



since $D$ is diagonal matrix, easy to calculate $e^{At}$ (scalar for each row)


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

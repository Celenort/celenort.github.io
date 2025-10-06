---
layout: post
title: "[해석개론] Lec 02 - The Real and Complex Number Systems"
date: 2025-06-26
draft: true
published: false
pin: false
image:
  path: ""
  alt: "[해석개론] Lec 02 - The Real and Complex Number Systems"
description: ""
tags: []
categories: ["Lecture", "해석개론"]
math: true
---


# Ch 1. The Real and Complex Number Systems

- $\R$, real number : Order set
	1. Field ($+, \cdot$ )
	2. Ordered set ( $<, > )$

### Ordered set

- Def.

	Let $S$ be a set.


	An order on $S$ is a relation, denoted by $<$, with the following properties


	(i) If $x, y \in S$, then one and only one of the statements
	     $x<y, x=y, x>y$ is true.


	(ii) If $x, y, z \in S$, $x<y$, $y<z$, then $x<z$


	We write $x\leq y$ if $x<y$ or $x=y$


	An ordered set is a set $S$ in which an order is defined


### (Least) Upper/Lower bound

- Def.

	Let $S$ be an ordered set and $E\sube S$
	(1) $E$ is called **bounded above**(위로 유계) if $\exists \beta \in S$ s.t. $\forall x \in E, x\leq \beta$


		In this case, $\beta$ is called on **upper bound**(상계) of $E$.


	(2) $E$ is called **bounded below**(아래로 유계) if $\exists \alpha \in S$ s.t. $\forall x \in E, x\geq \alpha$


		In this case, $\alpha$ is called on **lower bound**(하계) of $E$.

- Def.
Let $S$ be an ordered set and $E \sube S$

	(1) Supp. $E$ is bounded above.


		$\alpha \in S$ is called the **least upper bound**, or the **supremum** of $E$ if


		(i) $\alpha$ is an upper bound of $E$


		(ii) $\gamma < \alpha \Rightarrow \gamma$ is not upper bound of $E$


		We write $\alpha = \sup E$ in this case


	(2) Supp. E is bounded below.


		$\alpha \in S$ is called the **greatest lower bound** or the **infimum** of $E$ if 
		(i) $\alpha$ is a lower bound of $E$


		(ii) $\gamma > \alpha \Rightarrow \gamma$  is not a lower bound of $E$.

- Ex 1)

	Let $S=Q$.


	$A=\{p\in Q : p>0, p^2 <2 \}$


	$B=\{p\in Q : p>0, p^2 > 2 \}$


	(i) $A$ is bounded above but $A$ has no least upper bound (in $S$)


	(ii) $B$ is bounded below but $B$ has no greatest lower bound (in $S$)


	pf)


	(i) $p\in A$


		Supp. $p>2$ Then $p^2>4$, which contradicts $p^2<2$.


		Hence, $p\leq 2$. Therefore, $A$ is bounded above.

	- Supp. $A$ has a least upper bound $\alpha \in Q$
		1. Supp. $\alpha^2<2$, Take a positive integer $\displaystyle n>\frac{2\alpha +1 } {2-\alpha^2}$

			Then $\displaystyle (\alpha+{1\over n})^2 =\alpha^2 + {2\over n}\alpha + {1\over n^2} \leq \alpha^2 + {2\over n} \alpha + {1\over n} = \alpha^2 + {2\alpha+1\over n} <2$


			Hence, $\displaystyle \alpha + {1\over n} \in A$ and $\displaystyle \alpha<\alpha+{1\over n}$.


			This contradicts to the fact that $\alpha$ is an upper bound.


			→ $\alpha$ 보다 큰 값을 가져왔는데 $A$의 원소이므로 $\alpha$ 는 upper bound가 될 수 없음.

		2. Supp. $\alpha^2>2$, Take a positive integer $\displaystyle n>{2\alpha \over \alpha^2-2}$

			Then $\displaystyle (\alpha - {1\over n} )^2 = \alpha^2 - {2\over n} \alpha + {1\over n^2} > \alpha^2 - {2\over n} \alpha>2$


			For any $p\in A$, $\displaystyle p^2<2<(\alpha-{1\over n} )^2$. Hence, $\displaystyle p<\alpha-{1\over n}$


			Therefore, $\displaystyle\alpha-{1\over n}$ is an upperbound of $A$ and $\displaystyle\alpha-{1\over n} <\alpha$
			This contradicts to the minimality of $\alpha$.

		3. Supp. $\alpha^2=2$

			Let $\displaystyle\alpha={n\over m}$, ($m,n \in \Z$, $m\neq 0$, $m, n$ are relatively prime)


			Then $\displaystyle 2 = {n^2\over m^2}$ and thus $2m^2=n^2$


			Since $2$ divides $2m^2=n^2$, $2$ divides $n$.


			Write $n=2k$ ($k\in \Z$). Then $m^2 = 2k^2$


			Now $2$ divides $2k^2 = m^2$, $2$ divides $m$.


			This contradicts to the fact that $ m, n$ are relatively prime

- Ex 2) Suprimum 이 항상 해당 집합의 원소일 필요는 없다.

	$A = \{r\in \mathbb{Q} : r<0\}, \sup A = 0$


	$B = \{r\in \mathbb{Q} : r\leq 0\}, \sup B = 0$


	Check :  $0 $ is upper bound 


	(1) $r\in A \Rightarrow r\leq 0$ : OK


	(2) $s<0 \Rightarrow s<\displaystyle {s \over 2}, \ {s\over 2} \in A$  $\therefore \ s<0$ is not upper bound

- Ex 3)

	Let $E = \displaystyle \{{1\over n} : n\in \mathbb{Z}^{\geq 1} \}, \sube \mathbb{Q}$


	$\sup E = 1$


	$\inf E = 0\notin E$


	If $E$ has the maximal element $\alpha$, then $\alpha$ is **the** supremum of $E$
	(The uniqueness of supremum : only identical supremum exists.)


	→ The converse is NOT true! ( by Ex 2)

- Ex 4)

	(1) $\displaystyle \{  1-{(-1)^n \over n} : n\in \mathbb{Z}^{>0} \}$, $\sup = 2,\  \inf = {1\over 2}$


	(2) $\displaystyle S = \{ {1\over n} - {1\over m} : n, m\in \mathbb{Z}^{>0}\}$


		$\inf S = -1$


		$\sup S = 1$


		Precise proof after archimedean property

- Def.

	An ordered set $S$ has the least-upper bound(최소상계성질)


	(or is **complete,** 완비적) if for every nonempty subset $E$ of $S$ that is bound above.


	$\sup E$ exists in $S$


	Rmk. 

	1. $\mathbb{Q}$ does not have the least upper bound property.
	2. $\mathbb{R}$ has the least upper bound property. (by definition)
- Thm.

	Let $S$ be an ordered set with the least-upper-bound property.


	Let $B\sub S$ be a nonempty subset that is bounded below.


	Let $L$ be the set of all lower bounds of $B$.


	Then $\sup L$ exists in $S$ and $\inf B = \sup L$


	In particular, $S$ has the greatest-lower-bound property.


(pf) 


	(Claim) $\sup L$ exists in $S$


	(pf) Since $B$ has a lower bound, $L$ is nonempty.


		Since $B$ is nonempty, take $x\in B$.


		Then for any $y\in L$, $y\leq x$.


		Hence, $x$ is an upper bound of $L$. so $L$ is bounded above.


		By least-upper-bound property, $L$ has the supremum.


	(Claim) $\inf B = \sup L$


	(pf) 

		1. Take  $x\in B$

			For any $y\in L$, $y\leq x$.


			So $x$ is an upper bound of $L$.


			Hence, $\sup L \leq x$ . (Using the definition of supremum)


			→ $\sup L$ is a lower bound of $B$.

		2. Let $\alpha$ be a lower bound of $B$.

			Then $\alpha \in L$. Hence, $\alpha \leq \sup L$


			→ $\sup L$ is the greatest lower bound of $B$


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

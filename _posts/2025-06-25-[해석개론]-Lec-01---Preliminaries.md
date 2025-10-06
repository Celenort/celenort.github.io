
## Sets and Functions

- Definition.

	Let $A, B$ be sets


	(1) $A \subseteq B \ \text{iff} \ x \in A \Rightarrow x \in B$


	(2) 


{% raw %}
$$
\begin{aligned}
	A = B \ &\text{iff} \ A \subseteq B, B\subseteq A \\ &\text{iff}\  x\in A \Leftrightarrow x \in B
	\end{aligned}
$$
{% endraw %}


- Notation.

	$\mathbb{N} = \lbrace0, 1,  2, \cdots \rbrace$


	$\mathbb{Z}= \lbrace\cdots , -2, -1, 0, 1, 2, \cdots \rbrace$


	$\mathbb{Q} = \{m/n : m, n\in \Z, n\neq 0 \}$


	$\mathbb{R} = \{\text{real numbers} \}$


	$\mathbb{C} = \{x+yi : x,y\in \R \}$

- Definition

	(1) $A\cup B = \{x:x\in A \ \text{or} \ x\in B \} $


	(2) $A\cap B = \{x:x\in A \ \text{and} \ x\in B \}$


	(3) $A \ \backslash \ B = \{x: x\in A \ \text{and} \ x\notin B \} $

- Definition

	Let $\{A_n \}_{n=1}^\infty$ be a family of sets


	$\displaystyle \bigcup_{n=1}^\infty A_n = \{ x : x\in A_n \ \text{for some } n\geq 1 \}$


	$\displaystyle \bigcap_{n=1}^\infty A_n = \{x : x\in A_n \text{ for all } n\geq 1 \}$

- Index and index set

	$\{A_i \}_{i \in I}$ : family of sets


	eg) $\displaystyle \bigcap_{i\in I} A_i, \bigcup_{i\in I} A_i$

- Product

	$A \times B = \{(a,b) : a\in A, b\in B \}$


	if $A, B$ : finite sets


	→ $\vert A \times B \vert = \vert A \vert \vert B \vert$

- Definition

	Let $A, B$ be sets.


	A function from $A$ to $B$ is a triple $(A, B, gra(f)) = f:A \rightarrow B$


	where $gra(f) \subseteq A \times B$ satisfies the following property :


	For each $a \in A$,  there exists a unique $b \in B$ s.t. $(a,b) \in gra(f)$


	We call A the **domain** of $f$ and $B$ the **codomain** of $f$


	If $(a,b) \in gra(f)$, we write $b=f(a)$ or $a \mapsto b$


	We call $b$ the **value** of $f$ at $a$, or the **image** of $a$ under $f$

- Definition

	Let $f : A \rightarrow B$ be a function


	(1) For $E \subseteq A$, the **(direct) image** of $E$ under $f$ is $f(E) = \{f(x) : x\in E \}$


	(2) For $H \subseteq B$, the **inverse image** of $E$ under $f$ is $f^{-1}(H) = \{x\in A : f(x)\in H\}$

- Ex 1) $f : \R \rightarrow \R : x \mapsto x^2$

	$E=[0, 2] \Rightarrow f(E) = [0, 4]$


	$G=[0, 4] \Rightarrow f^{-1}(G)=[-2, 2]$


	cf ) $f^{-1}(f(E))\neq E$

- Definition

	Let $f : A \rightarrow B $ be a function.


	(1) $f$ is called **injective** (=one-to-one, 단사함수, 일대일함수) if 


	$x_1 \neq x_2 (x_1, x_2 \in A) \Rightarrow f(x_1)\neq f(x_2)$


	(2) $f$ is called **surjective** (=onto, 전사함수, 위로의 함수) if $f(A) = B$


	(3) $f$ is called **bijective** (전단사함수, 일대일대응) if it is both injective and surjective

- Important!

	Let $f : X\rightarrow Y$ be a function


	(1) $A, B \subset X$


	$f(A\cup B) = f(A) \cup f(B)$


	proof )


{% raw %}
$$
\begin{aligned}x\in f(A\cup B) &\Leftrightarrow x=f(y) \text{ for some } y\in A\cup B \\ &\Leftrightarrow x=f(y)  \text{ for some } y\in A \text{ or } y\in B \\ &\Leftrightarrow x\in f(A)  \text{ or } x\in f(B)\\ &\Leftrightarrow x\in f(A)\cup f(B) \end{aligned}
$$
{% endraw %}



$f(A\cap B) \subset f(A)  \cap f(B) \ (*)$


proof )


{% raw %}
$$
\begin{aligned} x\in f(A\cap B) & \Leftrightarrow x=f(y) \text{ for some } y\in A\cap B \\ & \Leftrightarrow x= f(y), y\in A, y\in B \text{ for some } y \\ &\Rightarrow x\in f(A), x\in f(B) \\ &\Leftrightarrow x\in f(A)\cap f(B)\end{aligned}
$$
{% endraw %}



 eg) $f(x)=x^2 : \R \rightarrow \R$


	$A=[0, 1]$, $B = [-1,0]$, then $A\cap B = \{0\}$, 


	$f(A\cap B) = \{0\} \in f(A)\cap f(B) =[0,1]$


	 


	(2) $A, B \subset Y$


		$f^{-1} (A\cup B) = f^{-1} (A) \cup f^{-1} (B)$


		$f^{-1} (A\cap B) = f^{-1} (A) \cap f^{-1} (B)$

- Ex 2)

	$f: X\rightarrow Y$


	(1) $f : \text{ injective } A\subseteq X$


	 $\text{prove } f^{-1}(f(A)) = A$

- $A\subseteq f^{-1}(f(A))$

	$x\in A\Rightarrow f(x)\in f(A) \Leftrightarrow x\in f^{-1}(f(A))$

- $f^{-1}(f(A)) \subseteq A$

{% raw %}
$$
\begin{aligned}x\in f^{-1}(f(A)) &\Rightarrow f(x) \in f(A)\\ &\Rightarrow f(x) = f(y), y\in A \text{ for some } y \\ &\Rightarrow x=y, y\in A \text{ for some } y \\ & \Rightarrow x\in A\end{aligned}
$$
{% endraw %}



Injective property used at the third line


(2) $f : \text{ surjective } B\subseteq Y$
$\text{prove } f(f^{-1}(B))=B$

- $f(f^{-1}(B)) \sub B$

{% raw %}
$$
\begin{aligned}
	x &\in f(f^{-1}(B) \\
	&\Rightarrow x=f(y), y\in f^{-1}(B) \text{ for some } y \\ 
	&\Rightarrow x=f(y), f(y)\in B \text{ for some } y \\ 
	&\Rightarrow x\in B
	\end{aligned}
$$
{% endraw %}


- $B \sub f(f^{-1}(B))$

	Take $x\in B$.
	Since $f$ is surjective, $x=f(a)$ for some $a\in X$
	By definition, $a\in f^{-1}(B)$
	$\therefore \ x=f(a)\in f(f^{-1}(B))$

- Ex 3) $f : X \rightarrow Y, g: Y\rightarrow Z$

	(1) If $f, g$ are injective, then so is $g \circ f$


	(2) If $f, g$ are surjective, then so is $g \circ f$


	(3) If $g \circ f$ is injective, then so is $f$


{% raw %}
$$
\begin{aligned}
	\text{if } f(x_1) &= f(x_2) \space (x_1,x_2 \in X) \\
	g \circ f(x_1) &= g \circ f(x_2) \\
	x_1&=x_2
	\end{aligned}
$$
{% endraw %}



(4) If $g \circ f$ is surjective, then so is $g$


	Take $z \in Z$. Then we have $x \in X$ s.t. $z=(g\circ f) (x)$


	Now $z=g(f(x))$, $f(x) \in Y$


	→ Therefore, if $g\circ f$ is bijective, $g$ : surjective, $f$ : injective

- Ex 4) f : $X \rightarrow Y, g : Y \rightarrow Z, A\sube Z$

	$(g\circ f)^{-1} (A) = f^{-1}(g^{-1}(A))$


{% raw %}
$$
\begin{aligned}
	x\in (g\circ f)^{-1}(A) &\Leftrightarrow (g\circ f)(x) \in A \\
	&\Leftrightarrow g(f(x))\in A \\
	&\Leftrightarrow f(x)\in g^{-1}(A) \\
	&\Leftrightarrow x\in f^{-1}(g^{-1}(A))
	
	\end{aligned}
$$
{% endraw %}



### Mathematical Induction

- Axiom (Well-Ordering Property of $\N$)
Every nonempty subset of $\N$ has a least element
- Thm. (Principle of Mathemital Induction)

	Let $S \sube \N$


	Supp. 


(i) $0 \in S$


(ii) $\forall k \in \N, k\in S \Rightarrow k+1\in S$


Then $S=\N$


	(pf) Let $A = \N \smallsetminus S$. Supp. $A\neq \emptyset$


		Then by Well-Ordering Principle, $A$ has the minimum element $m$.


		Observe : $m \neq 0$


		Now $m-1\in \N \smallsetminus A$ by minimality of $m$


		By (ii), $m\in S \ (*)$


	Cor. Let $p(n)$ be a statement about $n\in \N$


		Supp. 


			(i) $p(0)$ is true.


			(ii) $\forall k \in \N$.  $p(k) \Rightarrow p(k+1)$


		Then $p(n)$ is true for all $n\in \N$


		(pf) $S = \{n\in \N : p(n) \} \sube \N$,


			(i) $0 \in S$


			(ii) $\forall k \in \N, k\in S \Rightarrow p(k) \Rightarrow p(k+1) \Rightarrow k+1\in S$


			By Thm above, $S=\N$. Hence $p(n)$ is true for all $n\in\N$

	- Thm. (Principle of Strong Induction)

		Let $S \sube \N$


		Supp. 


		(i) $0 \in S$


		(ii) $\forall k \in \N$.  $\{0, \cdots, k \} \sube S \Rightarrow k+1 \in S$


		Then $S=\N$


		(pf) Let $A = \N \smallsetminus S$, Supp $A\neq \emptyset$


			By Well-Ordering Property, $A$ has the minimum element $m$.


			Then $m\neq 0$ (since $0\in S$).


			Now. $0, \cdots, m-1 \in \N \smallsetminus A = S$ by minimality.


			By (ii), $m\in S \ (*)$ .


	Cor. Let $p(n)$ be a statement about $n\in\N$


		Supp. (i) $p(0)$ is true.


			     (ii) $\forall k \in \N$. $(p(0)\land p(1) \land \cdots \land p(k) ) \Rightarrow  p(k+1)$


		Then $p(n)$ is true for all $n\in \N$

- Ex. Every $n\in \Z\geq 2$ has a prime divisor.

	(1) $2$ has a prime diviser $2$. (base case)


	(2) Take $n\in\Z>2$, Supp. the statement holds for all positive integers $\geq 2$ less than $n$.


		(Induction Hypothesis)


	Supp. $n$ is prime. Then $n$ has a prime divisor $n$. 


	Supp. not. Then $n=ab$ for some $a\in \Z>1, b\in Z>1$.


	Now, $1<a<n$ so by inductive hypothesis. a has a prime divisor.


	Hence, $n$ has a prime divisor.


### Basic Logic

1. Propositional Logic (명제 논리)
	- A propositional variable is a variable that is either true or false.
	- $\lnot p, \sim p$ : negation
	- $p \land q$ : conjunction
	- $p \lor q$ : disjuction
	- $p \rightarrow q$ : implication
	- $p \leftrightarrow q$ : bicondition

cf ) $p \rightarrow q$ : False only of p is true, q is false.


### First-Order Logic


p(x) : 명제함수. 

- quantifier (한정사)

	$\forall x, p(x)$ → $\forall x$ : universal quantifier


	$\exists x, p(x)$ → $\exists x$ : existential quantifier

- Ex 1) prove $\sim (p\land q) \equiv q \rightarrow \sim p$

	By truth table,


	| P | Q | $\sim (p\land q)$ | $\sim p$ | $q \rightarrow \sim p$ |
	| - | - | ----------------- | -------- | ---------------------- |
	| T | T | F                 | F        | F                      |
	| T | F | T                 | F        | T                      |
	| F | T | T                 | T        | T                      |
	| F | F | T                 | T        | T                      |

- Ex 2) $\forall x \exists y \not\equiv \exists y \forall x$

{% raw %}
$$
\forall x \forall y \ p(x,y) = \forall y \forall x \ p(x,y) \\\forall x \exists y \ p(x,y) \not= \forall x \exists y \ p(x,y) \\ \exists x \forall y \ p(x,y) \not= \exists y \forall x \ p(x,y) \\ \exists x \exists y \ p(x,y) = \exists y \exists x \ p(x,y)
$$
{% endraw %}



→ Uniform / contiunous 차이 발생이유, $\exists y$가 $x$의 의존 여부

- Negation rule

{% raw %}
$$
\sim ( \forall x, p(x)) = \exists x, \sim p(x) \\
\sim (\exists x, p(x)) = \forall x, \sim p(x) \\
\sim (\forall x \exists y, p(x,y)) = \exists x \forall y \sim p(x,y)
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

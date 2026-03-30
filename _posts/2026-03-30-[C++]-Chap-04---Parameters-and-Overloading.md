---
layout: post
title: "[C++] Chap 04 - Parameters and Overloading"
date: 2026-03-30
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-03-30-[C++]-Chap-04---Parameters-and-Overloading/0-cb6a0269fd.png"
  alt: "[C++] Chap 04 - Parameters and Overloading"
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## Parameter call


### Call by value

- A copy of actual argument is passed.
- When modified, only the “local copy” is changed
- Cannot declare the same parameter “again” inside the function. (Value arguments are like local variables)

### Call by reference

- Argument MUST be a variable, not a constant
- A “reference” (memory location, address) is passed in.
- Specified by ampersand, &, after type in formal param list


{% raw %}
```c++
void swap(int& a, int& b); //swapped
void swap(int a, int b); //not swapped
void swap(int& a, int b) {
		int temp = a; //address of a
		a=b; // now value of a is b
		b=temp; // b
}
```
{% endraw %}


- To “protect” data and still pass by reference, use `const` keyword. → makes read-only functions
	- Pros : can reduce copying time

## Function Overloading

- Same function name, but different param lists
- Function “signature”
	- Function name
	- parameter list (excluding & and const)

### Overloading

- How much can we overload?
	- Different number of formal params : Yes
	- One or more parameters with differen types : Yes
	- Different return type with the same formal parameters : No
	- Difference in const or call-by-value/reference : No
- In case of return type and const, call by val/ref, we can’t distinguish in the function call stage
- Automatic type conversion + overloading can cause some confusion

![](/assets/img/2026-03-30-[C++]-Chap-04---Parameters-and-Overloading/0-cb6a0269fd.png)


### Overloading Resolution

1. Exact Match (Looking for exact signature)
2. Compatible Match
	1. 1st with promotion (int → double)
	2. 2nd with demotion (double → int) (possible loss of data)


{% raw %}
```c++
 void foo(int a, int b);
 void foo(double a, double b);
 
 int main() {
		 int a=0;
		 double b=1.0;
		 foo(a, b); // Ambiguous
 }
 // A function is seleced when it wins at every parameter
```
{% endraw %}



### Default Arguments

- Allow omitting some arguments
- Specified in function declaration / prototype


{% raw %}
```c++
void showVol(int length, int width=1, int height=1);
```
{% endraw %}


- A default argument should not be given a second time (at implementation
- Default parameters are filled up from the right side : cannot leave out the middle parameter to default


{% raw %}
```c++
showVol(5, default, 4); //impossible
showVol(5, 4); // height = 1
```
{% endraw %}



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

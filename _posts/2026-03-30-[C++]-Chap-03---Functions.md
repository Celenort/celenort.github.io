---
layout: post
title: "[C++] Chap 03 - Functions"
date: 2026-03-30
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-03-30-[C++]-Chap-03---Functions/0-d38eb38ad3.png"
  alt: "[C++] Chap 03 - Functions"
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## Functions

- A function can have any finite number of arguments of varying data types / No function has more than one value returned (One or zero)

### Random number generator

- rand() : takes no arguments, returns a uniform random integer btw 0 & RAND_MAX

### Components of Function Use

- Function declaration / Prototype
- Function Definition (implementation)
- Function Call

### Function Declaration / Prototype



{% raw %}
```c++
<return_type> FcnName(<formal-parameter-list>);
double totalCost(int num, double price);
// or
double totalCost(int, double);
```
{% endraw %}


- Designates the type of the “return val”, “name of func”, “number of arguments”, “type of formal parameters”
- Placed before any calls to the function (above the main)
- Formal parameter names are not needed : can only present data types of params.

### Function definition

- Entire implementation of function is called function definition, lines inside the bracket is called function body.

![](/assets/img/2026-03-30-[C++]-Chap-03---Functions/0-d38eb38ad3.png)

- Can be placed after or before the main function.
- In case of before, function declaration can be omitted
- Can also be placed in a seperate file (another .cpp or for declaration, .h or .hpp)
- Functions are equal, no function is a ”part” of another.
- (formal) Parameters : Memory placeholders for data sent in

### Function call

- Arguments at function call : actual arguments
- Can be literals, variables, expressions, or their combination

### Simple example : multiple cpp files and header


![](/assets/img/2026-03-30-[C++]-Chap-03---Functions/1-6b2f979da2.png)


### Parameter vs Argument

- Often used interchangably but technically param is “formal” piece while argument is “actual”
- Formal (params/args) : in function declaration, header
- Actual (params/args) : in function call

### Return statement

- return is optional statement for void function ( Closing bracket } implicitly return control from void function)
- Return type other than void MUSt have return statement.

### Main

- Operating system calls main()
- should return int or void

### Scope rules

- Local variables : declared inside the body of given function / available only within that func.
- Global variables : if declared outside function body
- Global constants : `const double TAXRATE=0.05;` Declared globally so all functions can use it.
- variables declared with `const` inside the function is also follows scope rules

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

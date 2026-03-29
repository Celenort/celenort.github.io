---
layout: post
title: "[C++] Chap 01 - C++ Basics"
date: 2026-03-29
draft: false
published: true
pin: false
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

### Variables

- Identifiers :
	- starts with letter or underscore(_), the rest characters must be letters, digits, underscore.
	- Case-sensitive
- Variables
	- A memory location to store data for a program
	- Must declare first
- Escape Sequences
	- “Extend” the character set
	- Uses Backslash (\)

### Assignment rules / Compatibility



{% raw %}
```c++
int variable;
intvariable = 2.99; // Type mismatch, but only integer part is stored.
```
{% endraw %}


- Some special cases are allowed


{% raw %}
```c++
double doublevar;
doublevar = 2;
```
{% endraw %}


- Literals : considered “constants” (cannot be changed)
	- E.g) 2, 5.75, ‘Z’, “Hello World”

### Arithmetic Precision

- “Highest-order operand” determines type of arithmetic “precision” performed


{% raw %}
```c++
double x = 1/2/3.0/4; // Calculations are done "one-by-one" 1/2=0, 0/3.0=0.0, 0.0/4=0.0
```
{% endraw %}



### Type casting

- Implicit (Automatic Type casting)
	- 17/5.5 → cast 17 to 17.0 ( “double” precision division is performed)
- Explicit type casting
	- (double)17/5.5

### Increment, Decrement Operators

- Post / Pre Increment / Decrement

### Console Input/Output

- `cin` , `cout`, `cerr`
- Must have the following lines :


{% raw %}
```c++
#include <iostream>
using namespace std;
```
{% endraw %}


- cout
	- New lines in output : ‘\n’ or <<endl
	- Cascading is allowed : `<<a << b`
- cin
	- Extraction Operator `>>`
	- Must input “to a variable”
- Cout Formatting


{% raw %}
```c++
cout.setf(ios::fixed);
cout.setf(ios::showpoint);
cout.precision(2); // shows two digits under decimal point
```
{% endraw %}



### Comment

- `//` or `/* */`

### Libraries

- C++ standard libraries : `#include <LIBRARY_NAME>`

### Namespaces

- Collection of name definitions

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

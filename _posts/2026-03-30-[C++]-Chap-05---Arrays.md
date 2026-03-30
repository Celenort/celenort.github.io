---
layout: post
title: "[C++] Chap 05 - Arrays"
date: 2026-03-30
draft: false
published: true
pin: false
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## Arrays

- A collection of data of a same type
- Declare the array : allocates memory `int score[5];`
- Array size must be a constant
- Index “out of range” : No warning, but possibly disastrous results


{% raw %}
```c++
int score[5];
score[1]=1; 
/*
score[1] : Indexed or subscriped var, element
1 : index or subscript, numbered from 0 to size-1
*/
```
{% endraw %}



### Use of brackets 

- In declaration, specifies the SIZE of array
- anywhere else, specifies a subscript

### Array in memory

- Array declarations allocate memory for entire array
- Sequentially-allocated (addresses allocated “Back to back”)

### Array size / Initializing arrays

- Recommended to use defined/named constant for array size
- Initializing with brackets `int child[3] = {2, 12, 1};`
- If fewer values than array size are supplied : fills the rest with zero of array base type
- If array-size is left out, declares array with size required based on number of initialization values

	
{% raw %}
```c++
	int b[] = {5, 12, 11}; // size = 3
	int b[4] = {5, 12, 11}; // size=3, b[3]=0;
```
{% endraw %}



### Arrays in functions

- Each indexed variables can be a function parameter
- Entire arrays can be passed as “one entity”

### Entire arrays as Arguments

- Argument passed in function call is array name
- Typically send size of array as int formal parameter


{% raw %}
```c++
void fillUp(int a[], int size);
//formal array parameter : not a call-by-reference parameter
//but similar in some sense;
int main() {
		int a[3] = {1, 2, 3}
		fillup(a, 3); //No bracket!
```
{% endraw %}


- When array argument is used,
	- only the first part is passed(with base type matched)
	- the size of array is not passed)

### Const parameter modifier

- To protect array contents from modification, use `const`


{% raw %}
```c++
void stw(int a[], int sizeOfa) {
    for (int i = 0;i<sizeOfa;i++) {
        cout<<a[i]<<" ";
    }
    cout<<endl;
}
void stw2(const int a[], int sizeOfa) {
    for (int i = 0;i<sizeOfa;a[i]++) {
    //because a is const, a[i]++ generates error
    //if const not used, it will result in an infinite loop
        cout<<a[i]<<" ";
    }
    cout<<endl;
}
```
{% endraw %}



### Functions that return an array 

- Cannot return array.
- Required to use ‘pointer’

### Multidimensional Arrays

- Arrays with more than one index


{% raw %}
```c++
char page[30][100];
```
{% endraw %}



### Multidimensional arrays as function parameters

- Similar to one-dimensional array
	- 1st dimension size is not given,
	- 2nd (and 3rd, 4th) dimension are given as constant


{% raw %}
```c++
void displayPage(const char p[][100], int sizedim1);
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

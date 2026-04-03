---
layout: post
title: "[C++] Chap 06 - Structures and Classes"
date: 2026-03-30
draft: false
published: true
pin: false
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## Structures

- Aggregate data type.
- Must first ‘define’ struct

### Structure Types

- Define struct globally (typically)


{% raw %}
```c++
struct CDAccountV1
{
		double bal;
		double interestRate;
		int term;
}; // don't forget the semicolon!
```
{% endraw %}


- Semicolon is required since you ‘can’ declare structure variables in this location


{% raw %}
```c++
struct WeatherData
{
		double temp;
		double windV;
} dataPoint1, dataPoint2;

// also same as structure definition +
// WeatherData dP1, dP2;
```
{% endraw %}


- Declare structure variable just as declaring simple types


{% raw %}
```c++
CDAccountV1 account;
account.bal=1; //Use dot operator to access members
```
{% endraw %}



### Structure Assignments

- Simple assignments are legal


{% raw %}
```c++
CropYield apples, oranges;
apples = oranges;
// copying each member variable of oranges to apples
```
{% endraw %}


- Passed like any simple data type. Call-by-value, Call-by-reference, or combination
- Also can be returned by a function

### Hierarchical structures

- Can have structures whose members are themselves smaller structures


{% raw %}
```c++
struct Date
{
		int month;
		int day;
		int year;
};
struct PersonInfo
{
		double height;
		double weight;
		Date birthday;
};
PersonInfo person1;
cout<<person1.birthday.year;
Date person1date = {1, 2, 3}
PersonInfo person1 = {1.0, 2.0, person1date};
PersonInfor person2 = {3.0, 4.0, 5, 6, 7}; 
// Also possible to declare hierarchical structure in one bracket
```
{% endraw %}



### Initializing Structures

- Can initialize at declaration


{% raw %}
```c++
struct Date
{
		int month;
		double blabla;
};
Date dueDate = {12, 31.0}; //dueDate.month=12, dueDate.blabla=31.0;
Date dueDate = {12}; //12, 0.0
```
{% endraw %}


- Error if there are more initializer values than struct members
- If fewer, values are used to init data member in order.
	- The rest(without initializer) is initialized to zero)

## Class

- Similar to a structure type but can also add member FUNCTIONS


{% raw %}
```c++
class DayOfYear
{
		public:
		void output();
		int month;
		int day;
}; // Also don't forget to put semicolon!
```
{% endraw %}


- Only member function’s prototype is included

### Class member access

- Accessed using dot operator. also the function


{% raw %}
```c++
today.month
today.output();
// invokes the member func.
```
{% endraw %}



### Class Member functions

- Must define or “implement” class member functions
	- Doesn’t mean that only declaration of member function is required in definition of class
- Can be after main()
- Must specify class with scope resolution operator(::)
	- Item befor :: is called type qualifier
- When the class function refers to member data of the class, No need to use the dot operator

### Class’s Place

- Full-fledged type : just like usual data types, int double etc
- Can have variables / parameters of a class type (Call by value/reference)

### Encapsulation

- Note that any data type includes
	- Data (range of data)
	- Operations (or functions that can be performed on data)
- We do not need to know how the data type is implemented
- ADT(Abstract Data Types) : collection of data values + set of operations for the values → Classes are programmer-defined ADTs
- a.k.a. Encapsulation / Information hiding / data abstraction
- Data and function access is encouraged to be only through the (public) member functions (interface)
- Hdie the implementation details of the data and functions (private)

### Private and Public members

- Public
	- “user-accessible”
	- Usually member functions
- Private
	- Not directly accessible to users
	- Allow manipulation only via member functions

### Accessor / Mutator function

- Do something with its private data
- Accessor : Read data, called “get member functions”. Simple retrieval of member data
	- reserves the data, use const tag after declaring/defining the function
- Mutator : object to change data. “set member functions”. Manipulated based on application

### Structure vs Class

- Structure can also have private/public members/functions
- Default is public for structure, default is private for class

### Initialize class object



{% raw %}
```c++
class foo {
	public:
	int a;
	int b;
}

foo f{1, 2};
foo f={1, 2}; // works same (strictly copying the param list)

class bar {
	private:
	int c;
	int d;
}
bar b = {3, 4}; //ILLEGAL

// but there's an constructor, it is legal.
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

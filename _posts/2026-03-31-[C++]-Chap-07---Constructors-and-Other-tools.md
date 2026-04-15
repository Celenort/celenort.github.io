---
layout: post
title: "[C++] Chap 07 - Constructors and Other tools"
date: 2026-03-31
draft: false
published: true
pin: false
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## Constructors

- Initialization of class object (Called when objects are declared)
- Must have the same name as the class
- No output type. (NOT even void)
- Placed in the public section
- Values in parentheses are passed to arguments to constructor.


{% raw %}
```c++
DayOfYear date1(7, 4), date2(5, 5);
// Called when declaring class object
date1.DayOfYear(7, 4); //Very ILLEGAL. Cannot call constructor like other member functions
```
{% endraw %}



### Constructor definition



{% raw %}
```c++
DayOfYear::DayOfYear(int monthValue, int dayValue) {
{
	month = monthValue;
	day = dayValue;
}
// First DayOfYear : class name
// Second DayOfYear : constructor name
// Note no return type

DayOfYear::DayOfYear(int monthValue, int dayValue) : month(monthValue), day(dayValue)
{
// Body doesn't have to be empty
// Can validate the data!
// Ensure only appropriate data is assigned to class private member variables
}
```
{% endraw %}


- Constructers can also be overloaded.
	- Constructor which doesn’t have any parameter, is called default constructor


{% raw %}
```c++
class DayOfYear {
public :
	DayOfYear(int monthValue, int dayValue);
private :
	const int month;
	const int day;
};

DayOfYear::DayOfYear(int monthValue, int dayValue) {
{
	month = monthValue;
	day = dayValue;
}
// since month and day are const member variables, 
// cannot declare like month = monthValue; 
// because the 'month' should be initialized when created
```
{% endraw %}



### Explicit Constructor Calls



{% raw %}
```c++
holiday = DayOfYear(5, 5);
// Create and initialize an anonymous object
// and assign it to holyday.
```
{% endraw %}


- Quite different from standard member function call (since it has no return type)

### Default Constructors

- If no constructors defined, a default constructor doing nothing will be automatically created
- Otherwise, if you want to declare like `SampleClass myVar;`, need to define a default constructor


{% raw %}
```c++
class SampleClass
{
	public:
		SampleClass(int param1, double param2);
		SampleClass();
		void doStuff();
	private:
		int data1;
		double data2;
};
int main() {
	SampleClass myvar, myvar2(1, 2.0);
	// if you want to define myvar, needto define default constructor
```
{% endraw %}



### Class member variable

- Call back to member object’s constructor


{% raw %}
```c++
Holiday::Holiday() : date(1, 1), parkingEnforcement(false){
}
//date(1, 1) is a invocations of constructors from the class 'DayOfYear'
```
{% endraw %}



## More tools


### Const modifier for functions

- Mark a funciton with a `const` modifier so as to notify it should not change the values of the object
- If const is used for a class type, then every member function should have const modifier.


{% raw %}
```c++
void foo(const BankAccount& ba)
{
	bar;
	ba.output(); // ILLEAGL if output does not have the const modifier
}
```
{% endraw %}



### Three uses of Const

1. `const double pi=3.1416;`  Global variable
2. `void display(const Student& a);` Parameter
3. `void show() const;` Function modifier

### Inline Member functions

- Function definition can be defined in the class definition
- Efficient for short definitions
- Can only be called in the same file as the one in which it is defined

# Maybe not included..


### Static member variables

- All object of class share only one copy.
- On object changes it, all can see the change
- Similar to global var. But only for the objects of the class

### Static member functions

- Cannot access the object’s non-static variable data
- Only access static data/function of class
- Nonstatic member function can also access static variables of the class


{% raw %}
```c++
Server::getTurn(); // Class::func(); format
```
{% endraw %}


- Every static variable must be initialized outside the class function : only once!
- 

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

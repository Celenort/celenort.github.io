---
layout: post
title: "[C++] Chap 08 -  Operator Overloading, Friends, and References"
date: 2026-04-27
draft: false
published: true
pin: false
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## Operator Overloading

- Operators (`+, -, %, ==, ...`  ) are just functions
- think of it as `+(x, 7)` (`+` is the function name, `x, 7` are the arguments, returns sum of its arguments)

### 1. Via Non-member, non-friend of a class



{% raw %}
```c++
const Money operator +(const Money& amount1,  const Money& amount2);
// const reference parameters for efficiency
// return type is Money
```
{% endraw %}


- Overloaded `+` above is **NOT** a member function of the class
- Need to use accessor and mutator function since the overloaded function is not member function of the class


{% raw %}
```c++
const Money operator +(const Money& amount1, const Money& amount2) {
	return Money(foo, bar);
}
// returns money class
```
{% endraw %}


- Constructor is not a void function. It return the class object itself but without given name.
- Called an ‘anonymous object’

Returning by `const` value

- Returning by const value : return value is also a class object, if we don’t put `const` modifier, we can do things(calls the member function, etc…) unintentionally


{% raw %}
```c++
(m1+m2).output(); //Legal
(m1+m2).input(); // Legal but it changes the value of anonymous object
//Wierd
```
{% endraw %}


- To prevent those things to happen, we return by `const` value
- Then, `(m1+m2).input()` will produce a compile error
- Putting `const` will do automatic error checking
- Changing `(m1+m2)` will cause a problem when the returned object is **reference**

 Overloading Unary Operators



{% raw %}
```c++
const Money operatror -(const Money& amount);
```
{% endraw %}


- One argument (since 1 operand)
- `-` opeartor can be overloaded twice : for binary, unary operator

### 2. Via member of a class

- When overloaded function is a ‘member operator’, calling object serves as the first parameter


{% raw %}
```c++
class Money{
public:
	const Money operator +(const Money& amount2) const;
	const Money operator -() const;
};

const Money Money::operator +(const Money& amount2) const {
	int allCents1 = cents + dollors * 100; 
	//private member variables of the calling objects are accessed
	int allCents2 = amount2.cents + amount2.dollars * 100;
	//also private member variables of any object of the same class can be also accessed
	...
}
const Money Money::operator -() const {
	return Money(-dollars, -cents);
} //No argument!
```
{% endraw %}



Other overloads

- Function call opeartor `()`
	- Must be overloaded as a member function
	- Can overload for any number of arguments


{% raw %}
```c++
class Money {
public:
	const Money operator ()(int a) const;
};

const Money Money::operator ()(int a) {
}
```
{% endraw %}


- `&&, ||` operator : recall short-circuit evaluation.
- `anObject(42)` can be thought of as `anObject.()(42)`

Automatic Type Conversion

- Even if we don’t overload operator with `int` operand, it is legal if we provide **constructors** for automatic type conversion


{% raw %}
```c++
Money baseAmount(100, 60), fullAmount;
fullAmount = baseAmount + 25; // automatic type conversion happens
// fullAmount = 25 + baseAmount; // does not work
fullAmount.output();

Money::Money(int theDollars) : dollars(theDollars), cents(0) {}
// if provide constructors for automatic type conversion
```
{% endraw %}


- To make `25+baseAmount` possible, must define as non-member function. (since member function regards first argument as the class object itself (calling obj).)
- `Money+Money` operator overloaded + `Money(int)` constructor overloaded = `Money+int` possible
- But typically `int+Money` is impossible for overloading via member function

### 3. Via non-member, friend of a class

- Overload operator as a nonmember
	- Automatic type conversion of all arguments
	- Causes inefficiency (Must use accessor or mutator, can’t access to private)
- Overload operator as a member
	- Gives efficiency of bypassing accessor and mutator
	- Asymmetry in automatic type conversion

## Friend functions

- Friends can directly access private class data : no overhead, more efficient
- Use keyword `friend` in front of the function declaration
	- `friend` keyword not used in function definition
- Can be located anywhere(`public, private, protected` ) in the class definition
- Since it is not member function, parameter list is similar as nonmember overloading operators
- Operator overloading is the most common usage of friend function but any function can be a friend of a class


{% raw %}
```c++
// 1. Non-member, 3. Friend
const Money operator +(const Money& amount1, const Money& amount2);

// 2. Member
class Money{
public:
	const Money operator +(const Money& amount2) const;

	// 3. Friend
	friend const Money operator +(const Money&, const Money&);
	// also inside the class definition 
	//but not considered as a member function
};

const Money Money::operator + (const Money& amount2) const {
}
```
{% endraw %}



Friend Classes

- Entire classes can be a friend of other class
- eg) class F is friend of class C


{% raw %}
```c++
class F; // forward declaration

class C
{
public :
	friend class F;
};
class F
{
... 
};
```
{% endraw %}


- All member functions of F are friends of C
- NOT reciprocated (single direction)
- Violates the pure spirit of OOP but for operators : very advantageous (automatic type conversion)
- Still encapsulates (because friend is in the class definition)

## References

- Name of a storage location
- Similar to “pointer”


{% raw %}
```c++
int robert;
int& bob = robert;
```
{% endraw %}


- `bob`  is a reference to storage location for `robert`
- Changes made to bob will affect robert
- Returning by a reference
	- Allows some operator overload implementations (i.e. `<<` or `>>` )
	- Do not return local variable by reference (dangling reference)

L-Value and R-Value

- If you want the object returned by a function to be an L-value, it must be returned by reference


{% raw %}
```c++
class Employee {
public:
	Money& getSalary()  {return salary;}
	const Money& getSalaryNew() {return salary;}
	...
private:
	Money salary;
	...
};

int main() {
	Employee joe;
	joe.getSalary().input();
	//can access and manipulate private member variable
	joe.getSalaryNew().input(); //illegal
```
{% endraw %}


- Returning a class-type can be efficient when return by reference
- But private member can be easily manipulated
- `const` can protect this from happening

Overloading `>>` and `<<`

- Insertion operator, `<<`
	- Used with `cout`
	- A binary operator
	- `cout<<"Hello";` : Firest operand is predefined object `cout`, second operand is string “Hello”
- What value should `<<` return? : the `cout` object


{% raw %}
```c++
class Money
{
public:
	friend ostream& operator <<(ostream& outputStream, const Money& amount);
	friend istream& operator >>(istream& inputStream, Money& amount);
};
//Note : << and >> cannot be a member operator
//(the first operand is not the class obejct)
```
{% endraw %}


- Can chain `<<` or `>>` because the operator returns by the reference
- since `<<` is not intended to change the original object, use `const` and call-by-reference while `>>` uses only call-by reference

Four types of returned value to use

1. By plain old value `T f( );`
2. By const  `const T f( );`
3. By reference `T& f( );`
4. By const reference `const T& f( );`
- For simple types , no point in using `const` .
- If you want the simple value returned to be l-value, then return by reference


{% raw %}
```c++
int foo();
const int foo(); //unnecessary
int& foo(); //returns aliases or reference
const int& foo(); //returns reference but cannot be modified via this function
```
{% endraw %}


- Returning a local variable by reference is problematic
- `const T`  and `const T&` are very similar : the `const` modifier
- But using `const T` is more preferred : because of hazard of dangling reference (local parameter returned by reference)

Assignment operator `=`

- Must be overloaded as a member operator
- Automatically overloaded
- The default assignment operator performs the member-wise copy.
- Member variables from one object → corresponding member variables from other

Increment and Decrement

- Two version : prefix, postfix
- For compilers to distinguish two verisons of operator, add dummy 2nd parameter of type `int`


{% raw %}
```c++
IntPair operator ++(); //Prefix
IntPair operator ++(int); //Postfix
```
{% endraw %}



Overloading `[]` 

- Need to be a member function
- Need to return reference to use the operator at the left-hand side of `=`


{% raw %}
```c++
class CharPair
{
public:
	char& operator[] (int index);
}
char& CharPair::operator[] (int index)
{
...
}

int main() {
	CharPair a;
	a[1]= 'A';
	//For l-value, output must be reference
	cout<<a[1];
}
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
      argmax: "\\operatorname*{arg\\,max}",
      argmin: "\\operatorname*{arg\\,min}",
      "\\{": "\\lbrace",
      "\\}": "\\rbrace",
      sub: "\\subset",
      sup: "\\supset",
      sube: "\\subseteq",
      supe: "\\supseteq",

      xLeftarrow: ["\\mathrel{\\overset{#1}{\\Longleftarrow}}", 1],
      xRightarrow: ["\\mathrel{\\overset{#1}{\\Longrightarrow}}", 1],
      xleftrightarrow: ["\\mathrel{\\overset{#1}{\\longleftrightarrow}}", 1],
      xLeftrightarrow: ["\\mathrel{\\overset{#1}{\\Longleftrightarrow}}", 1]
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

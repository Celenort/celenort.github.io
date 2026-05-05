---
layout: post
title: "[C++] Chap 10 - Pointers and Dynamic Arrays"
date: 2026-05-01
draft: false
published: true
pin: false
image:
  path: "/assets/img/2026-05-01-[C++]-Chap-10---Pointers-and-Dynamic-Arrays/0-a20614df85.png"
  alt: "[C++] Chap 10 - Pointers and Dynamic Arrays"
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## Pointers

- Memory address of a variable


{% raw %}
```c++
int *p1, *p2, v1, v2;
p1 = &v1; // sets pointer variable p1 "point to" int variable v1
```
{% endraw %}


- p1 → v1
- “p1 equals the address of v1”
- “p1 points to v1”
- ‘Address of’ Operator `&` : Determines address of a variable
- Dereference operator `*` : pointer variable dereferenced.
- “Get data that p1 points to”


{% raw %}
```c++
int *p1, *p2;
p2 = p1; // makes p2 point to where p1 points
*p2 = *p1; //"value pointed to" by p1, to "value pointed to" by p2
```
{% endraw %}



![](/assets/img/2026-05-01-[C++]-Chap-10---Pointers-and-Dynamic-Arrays/0-a20614df85.png)


### The `new` operator

- NO real need to have a standard identifier.
- Can dynamically allocate variables with `new`
- `p1 = new int;` : Creates new nameless variable, assigns p1 to point to it.
- Can access with `*p1`
- Creates a new dynamic variable and returns pointer to the new variable
- If type is a class type : constructor is called, can invoke different constructor with initializer arguments
- Also can initialize non-class types


{% raw %}
```c++
MyClass *mcPtr;
mcPtr = new MyClass(32.0, 17);
int *n;
n = new int(17); // same as n= new int; *n=17;
```
{% endraw %}


- Pointers are full-fledged type : can be any function parameter, returned from function
- `int* findOtherPointer(int* p);`
	- Has “pointer to an int” parameter
	- Returns “pointer to an int” variable

### Basic Memory Management

- Heap
	- Also called ‘freestore’ (from top)
	- Reserved for dynamically-allocated variables
	- All new dynamic variables consume memory in heap
- ‘new’ operation will fail if heap is full : NULL is assigned to the pointer
- To check `new` operation success


{% raw %}
```c++
int *p;
p = new int;
if (p==NULL)
{
	cout<< "Error";
	exit(1);
} //Old compilers
```
{% endraw %}


- For newer compilers, if `new` operation fails, perogram terminates automatically w/ error message

### NULL, nullptr, delete

- `NULL` : Identical to 0
- `nullptr` : resolves the ambiguity problem of `NULL` (can only be assigned to a pointer)
- De-allocate dynamic memory
	- When the dynamic memory is no loner needed, returns memory to **freestore**(heap)


{% raw %}
```c++
int *p;
p=new int(5);
...// Do something...
delete p;
```
{% endraw %}


- `delete p;`  : Destroys dynamic memory but still p points there.
- to avoid “dangling pointer problem”, assign pointer NULL or nullptr after delete

### Comparison btw Dynamic and Automatic(Local) Variables

- Dynamic variables
	- Created with `new` operator
	- Created and destroyed while program runs
- Local variables
	- Declared within a function definition
	- Not dynamic : Created when th function is called, Destroyed when the function call completes
	- Often called automatic variables
- Global variabels
	- Variables declared outside any function/class definition
	- Sometimes called as statically allocated variables


{% raw %}
```c++
int* p;
p = new int(5);
//p : Created with new, dynamic, stored in heap
//*p : Created locally, stored in stack
```
{% endraw %}



### Defining Pointer Types

- Can “name” pointer types
- `typedef int* IntPtr;` : make `int*` and `IntPtr` equivalent
1. It avoids of mistake of omitting `*`


{% raw %}
```c++
int *p1, p2; // p2 is not pointer
IntPtr p1, p2 //p1, p2 are both pointers
```
{% endraw %}


1. No Complication for call-by-reference for a pointer type


{% raw %}
```c++
void sampleFunction(IntPtr& pointerVariable);
void sampleFunction(int*& pointerVariable); //SAME!
```
{% endraw %}



### Pitfall : Call-by-value pointer parameter



{% raw %}
```c++
void sneaky(int* temp){
	*temp=99;
}
int main() {
	int *p = new int(77);
	sneaky(p);
	cout<<*p<<endl; //99
}
```
{% endraw %}



![](/assets/img/2026-05-01-[C++]-Chap-10---Pointers-and-Dynamic-Arrays/1-8757cb4ec7.png)

- Even though the function parameter is call-by-value, it actually seems to be call-by-reference in perspective of the value.
- Temporally makes pointer that points the value that original parameter points to, change the value, destroys the temp parameter
- Comparing Call-by reference and pointers


{% raw %}
```c++
void swap(int &v1, int& v2){
	int temp;
	temp = v1;
	v1=v2;
	v2=temp;
}
void swap2(int *v1, int *v2) {
	int temp;
	temp = *v1;
	*v1 = *v2;
	*v2 = temp;
}
int main() {
	int a(1), b(2);
	swap(a, b);
	swap2(&a, &b);
}
```
{% endraw %}



## Dynamic Arrays

- Array variables are really pointer variables
- For dynamic array, size is not specified at programming time.


{% raw %}
```c++
int v[10];
int *p;
p=v; //legal
v=p; //illegal (array are constant pointer)
cout<<p[4]; //same as cout<<v[4];
```
{% endraw %}


- Actually array variable `int v[10]` is `const int*` type.
- The variable v must point there always

### Dynamic arrays

- assigned and deleted with `new` and `delete`


{% raw %}
```c++
double *d;
d = new double[10];
delete[] d; //delete dynamic array
d=nullptr;
```
{% endraw %}


- Size can be an integer-valued expression. (no need to be a constant as in the standard array
- Array type is NOT allowed as a return-type of a function


{% raw %}
```c++
int[] someFunction(); //illegal
int* someFunction(); //legal
```
{% endraw %}


- Pointer Arithmetic : can perform arithmetic on pointers


{% raw %}
```c++
double* d;
d = new double[10];
cout<<*(d+1); //d[1]
```
{% endraw %}


- d : address of d[0], d+1 : address of d[1] and so on…
- Only use addition/subtraction on pointers, can use `++`, `--` as well

### Multidimensional Dynamic Arrays



{% raw %}
```c++
typedef int* IntArrayPtr;
IntArrayPtr *m = new IntArrayPtr[3];
// Creates an array of three pointers
for (int i = 0; i<3;i++){
	m[i] = new int[4];
}
// results in 3 x 4 dynamic array
for (int i = 0;i<3;i++){
	delete[] m[i];
}
delete[] m;
```
{% endraw %}



## Classes, Pointers  and Dynamic Arrays


### `->` operator

- Shorthand notation that combines dereference operator, `*`
- Specifies member of class “pointed to” by given pointer


{% raw %}
```c++
struct Record
{
	int number;
	char grade;
}
Record *p;
p = new Record;
p->number = 2001; //*p.number = 2001;
p->grade = 'A'; //*p.grade='A';
//equivalent
```
{% endraw %}



### `this` operator

- function definitions might need to refer to calling object


{% raw %}
```c++
class Sample {
public:
	void showStuff() const;
private:
	int stuff;
};
void Sample::showStuff() const {
	cout<<stuff;
}
void Sample::showStuff() const {
	cout<< this->stuff; //equivalent with the function above
}
```
{% endraw %}



### Assignment Operator 

- Assignment operator returns reference
	- Assignment ‘chains’ are possible (`a=b=c;`)
	- Can call `(a=b).f()`
- Operator must return same type as its left-hand side.
	- This makes operators to allow chains to work
- Cannot be overloaded via friend function (to not modify a constant)
- `s1=s2=s3;`  : Requires to be right associative


{% raw %}
```c++
class StringClass {
public:
	StringClass& operator=(const StringClass& rtSide);
private:
	char *a; //Dynamic array for char
	int capacity; // size of dynamic array
	int length;//number of characters in a
};
StringClass& operator=(const StringClass& rtSide) {
	if (this == &rtSide){
		return *this;
	} // cares when s=s
	else {
		capacity = rtSide.capacity;
		length = rtSide.length;
		delete [] a;
		a = new char[capacity];
		for (int i=0;i<length;i++){
			a[i]=rtSide.a[i];
		}
		return *this;
	}
}
```
{% endraw %}



### The Big Three

- the `=` assignment operator, the copy constructor, the destructor.. they go together
- Why does the `=` operator overloading necessary for `PFArrayD` (Partially filled array double) ?
- If we don’t implement `=` operator overloading, it uses default `=` operator (elementwise `=`)


{% raw %}
```c++
PFArrayD list1(10), list2(20);
list1=list2; //will make list1.a=list2.a;
```
{% endraw %}


- If `list1.a` changed then `list2.a` is also changed.
- We usually wand a completely independent copy.

### Destructor

- Dynamically-allocated variables don’t go away until deleted
- When the object is deleted, the dynamically allocatd variables are not automatically freed from heap
- Default version only removes ordinary variables, not dynamic variables


{% raw %}
```c++
Myclass::~Myclass()
{
	delete[] a;
}
```
{% endraw %}



### Shallow and Deep Copies

- Shallow copy
	- Assignment copies only member variable contents
	- Default assignment and default copy constructors use shallow copy
- Deep copy
	- Pointers, dynamic memory involved
	- Must dereference pointer variables to “get to” data for copying
	- Write your own assignment operator and copy constructor in this case
- Problems of shallow copy : without care, it copies the pointer variable not real variable.

### Copy constructors

- A constructor that has one paramter with same type of the class (usually call-by-reference, const)
- Three main usages
	1. When a class object is being declared & initialized by another object of the same type

		
{% raw %}
```c++
		PFArrayD b(20);
		for (int i =0;i<20;i++)
			b.addElement(i);
		PFArrayD temp(b);
		for (int i =0;i<20;i++)
			temp.addElement(i+1);
			// changing values of temp does not affect b anymore
```
{% endraw %}


	2. When an argument of the class type is “plugged in” for a call-by-value paramter

		
{% raw %}
```c++
		void showPFArrayD(PFArrayD parameter) {
		cout<< parameter[0];
		}
		//this destroys the dynamically allocated memory
		//makes original object's pointer dangling
		PFArray sample(2);
		sample.addElement(5.5);
		sample.addElement(6.6);
		showPFArrayD(sample); //this destroys the pointer
		cout<<sample[0]; //error
		//It happens when the destructer is properly coded
```
{% endraw %}



	![](/assets/img/2026-05-01-[C++]-Chap-10---Pointers-and-Dynamic-Arrays/2-ce3e641e36.png)


	Also causes the “double free” problem when dislocating sample.a

	1. When a function returns a value of the class type

		
{% raw %}
```c++
		StringClass someFunction();
```
{% endraw %}


	- When returning the value out, copy constructor called automatically
	- Similar problem as case 2 happens

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

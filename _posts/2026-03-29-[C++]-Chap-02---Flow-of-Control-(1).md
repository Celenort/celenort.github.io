---
layout: post
title: "[C++] Chap 02 - Flow of Control (1)"
date: 2026-03-29
draft: false
published: true
pin: false
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## Branching Mechanisms


### If-else statements



{% raw %}
```c++
if (<boolean_expression>) 
    <yes_statement>
else
    <no_statement>
```
{% endraw %}


- Use brackets for compound statements
- Logical Operators
	- Logical AND ( && )
	- Logical OR ( || )
- Boolean Expression
	- any nonzero number → true, 0 → false


{% raw %}
```c++
bool result = (1<2);
cout<<result<<endl; // 1
```
{% endraw %}


- Short-circuit evaluation
	- Evaluation stops when the result is already decided


{% raw %}
```c++
int x = 0;
int y = 0;
bool result = (x>=1) && (y++); // y++ is not executed
cout<<y;
```
{% endraw %}


- Do not use (x<y<z)!


{% raw %}
```c++
int x(1), y(2), z(2);
cout<<(x<y<z) <<endl; // 1
cout<<(x<y && y<z) <<endl; // 0
```
{% endraw %}


- Consider


{% raw %}
```c++
int x(3), y(4), z(5), r(0);
bool result = !x; //0
bool result = (!0*x); // 1
int result = (!0*x); // 3
bool result = (x<5) ||(x/r); //1, short circuit evaluation
bool result = (x&&y) + (!z); // 1. bool 1 + bool 1 = bool 1


cout<<result<<endl;
```
{% endraw %}


- &&Precedence of Operators

	Postfix → Prefix → Comparison Operators → Equal, Not equal → AND OR → Assign


`x + 1 > 2 || x + 1 < -3` 

- Roughly, arithmetic done before comparison & logical
- + → > → ||
- evaluating assignment expression is the Rvalue.


{% raw %}
```c++
if (x=12)  // (x=12) = 12 -> true
    Do_Something
    
if (12==x) // works same with x==12
if (12=x) //error
```
{% endraw %}



### Switch statement

- Uses controlling expression which returns either (Bool, Enu, Integer, Character)


{% raw %}
```c++
switch (Controlling_Expression) {
    case Constant_1:
	      Statement_seq1
	      break;
	  case Constant_2:
			  Statement_seq2
			  break;
		case Constant_3:
		case Constant_4:
				Statement_seq3
				break;
		default:
			  Default_Statement_sequence
}
```
{% endraw %}


- Omitting break will continue until it meets new ‘break’ or end of switch statement

### Enumeration types

- List of constants of type `int` ← Only integer is valid
- When no values are assigned, consecutive values starting from 0 are assigned.


{% raw %}
```c++
enum MyEnum { a=17, b, c, d=-3, e};
// is equivalent with
enum MyEnum2 { a=17, b=18, c=19, d=-3, e=-2};
```
{% endraw %}



### Conditional Operator

- Also called ternary operator


{% raw %}
```c++
max = (n1 > n2) ? n1 : n2;
```
{% endraw %}


- Shorthand version of if-else

## Loop statements

- While / Do-while / for

### Do-while



{% raw %}
```c++
do {
	Statement
} while (Boolean_Expression); // Don't forget the semicolon!
```
{% endraw %}


- do loop is executed at least once
- while : checks before the body is executed / do-while : checks after the body is executed
- Generally diescouraged to use increment/decrement operators in boolean exp. in while


{% raw %}
```c++
int n, cnt, one, t;
cin>>n; //enter number of integers to be inputted
t=0;
cnt=1;
while (cnt++<=n) { // Boolean expression executed before executing body
		cin>>one;
		t+=one;
}
cout<<t<<endl; // prints total number of inputted values
cout<<cnt<<endl; // if n==4, cnt is 6.
/*
cnt=4 <=4 passes, then cnt++, cnt=5
cnt=5 <=4 blocked, but cnt++, cnt=6
*/
```
{% endraw %}



### For loop syntax



{% raw %}
```c++
for (Initialization_Action; Boolean_Expression;Update_Action) // No semicolon
{
		Body
}
```
{% endraw %}


- The third `Update Action` is optional


{% raw %}
```c++
sum=0;
int n;
for (n=1;n<=10;n++)
		sum = sum + n;

for (sum=0, n=1;n<=10;n++)
		sum = sum + n;
**for (sum=0, n=1;n<=10;) // Update Action omitted 
{
		sum+=n;
		n++;
}**

for (sum=0;n=1;n<=10;sum+=n, n++); //Semicolon needed.
```
{% endraw %}


- Two semicolons are required inside the Expressions.
- Initialization → {check condition → loop body → update action} → and so on …
- Common pitfalls : misplaced ;


{% raw %}
```c++
for (int cnt = 1;cnt<=10;cnt++);
		cout<<"Hello"; // Nothing happens..
```
{% endraw %}


- Similar issue exists for the while loop

### Break and continue statements

- break : Ends the entire loop
- continue : Ends the current iteration of the loop body

## IOstream


### Opening a text file



{% raw %}
```c++
 #include <fstream>
 using namespace std;
 
 ifstream is;
 is.open("filename.txt"); // the file is the same directory as the code
 is>>var1 >> var2; // by spacing. if 1 2, var1=1, var2=2 
 is.close();
```
{% endraw %}


- Reading a string is done UP  TO a whitespace character( “ “, “\t”, “\n”)
- When done, close the file with .close();
- `ifstream` : input only, `ofstream` : output only, `fstream` both I/O

### Using a loop to read the text file input



{% raw %}
```c++
string text;
fstream iS;
iS.open("player.txt");
while (iS >> text)  // Performs two actions : Read, check boolean result 
{
		cout<<text<<endl; //not line by line.
}
```
{% endraw %}


- The boolean expression is evaluated to false when there is no data left to read from the file

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

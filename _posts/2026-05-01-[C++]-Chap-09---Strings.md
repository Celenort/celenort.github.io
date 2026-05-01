---
layout: post
title: "[C++] Chap 09 - Strings"
date: 2026-05-01
draft: false
published: true
pin: false
description: ""
tags: []
categories: ["Lecture", "C++"]
math: true
---

## C-strings

- Array with base type `char`
- Plus one extra character : `\0`
	- Called Null character or end marker
- `char s[10]`  :  C-string variable that can hold up to 9 characters
- plus one character `\0`
- Typically “partially-filled” array
	- Declare large enough array to hold max-size string
	- Indicate end with null `\0`
- One difference : Must contain the null character
- Initialization of c-string
	- `char myMessage[20]="Hi there.";`
	- Need not fill the entier array
	- Initialization automatically places `\0` at the end
- Can omit array-size :


{% raw %}
```c++
char shortString[] = "abc";
cout<<sizeof(shortString); // 4 (abc\0)
char shortString2[] = {'a', 'b', 'c'};
cout<<sizeof(shortString2); //3 (abc)
```
{% endraw %}


- Partially filled array : un-filled part filled up with `\0`


{% raw %}
```c++
char ourString[5] = "Hi";
//ourString[0] is 'H'
//ourString[1] is 'o'
//ourString[2] is '\0'
//ourString[3] is '\0'
//ourString[4] is '\0'
```
{% endraw %}


- To properly manipulate C-string, require library called `<cstring>`
- Can **ONLY** use `=` at the declaration of c-string.


{% raw %}
```c++
char aString[10];
aString = "Hello"; //Illegal!
```
{% endraw %}



### Assign value to c-string

- Must use library function for assignment:
- `strcpy(astring, "Hello");`
- No check for size

### Compare two C-string

- Must use compare function
- `strcmp(aString, anotherString);`
- omit `0` if same else other value (lexicographical order)
- `\0` is not compared (I guess)


{% raw %}
```c++
char shortString[] = "abc";
char anotherString[] = {'a', 'b', 'c'};
cout<<strcmp(shortString, anotherString); //0
```
{% endraw %}


- `strncpy(a, b, s);` copies at most s characters of b into a
- `strncat(a, b, s);` concats at most s characters of b right back to a
- `strncmp(a,, b, s);` compares at most s characters of b with a

### C-string Input, Output

- Can output with insertion operator `<<`
- Possible because `<<` is overloaded for C-string
- Can input with extraction operator `>>`
- All whitespace(black, tabs, line breaks) are skipped


{% raw %}
```c++
char a[80], b[80];
cout<<"Enter some input:\n";
cin>>a>>b;
cout<<a<<b<<"END of OUTPUT\n";
//Do be do to you
//DobeEND of OUTPUT : whitespace skipped
```
{% endraw %}


- To acquire entire line with including whitespaces, must use `getline`
- Member function of `cin`
- Take two arguments : C-string variable, size of the variable


{% raw %}
```c++
char a[80], b[5];
cin.getline(a, 80);
//Do be do to you!

cin.getline(b, 5);
//Do be do to you!

cout<<a<<"END OF OUTPUT\n";
//Do be do to you!END OF OUTPUT
cout<<b<<"END OF OUTPUT\n";
//Do bEND OF OUTPUT 
//b[4] is \0
```
{% endraw %}


- The reading ends when the line ends, even thought the resulting C-string may be shorter than the second argument
- To directly manipulate C-strings, use `get`


{% raw %}
```c++
char c1, c2, c3, c4, c5;
cin.get(c1);
cin.get(c2);
cin.get(c3);
cin.get(c4);
cin.get(c5); 
//AB
//CD

cout << c1 << c2 << c3 << c4 << c5;
//c1=A, c2=B, c3='\n', c4=C, c5=D
```
{% endraw %}


- `cin.get` can be used to detect `\n`


{% raw %}
```c++
char symbol;
do
{
	cin.get(symbol);
	cout<<symbol;
} while (symbol!='\n');
```
{% endraw %}




{% raw %}
```c++
int number;
cin>>number; //21
char symbol;

cin>>symbol; //A
//cin.get(symbol); if inputting 21ab, number=21, symbol=a
cout<<symbol;
//when using cin.get(symbol), symbol is set to '\n'
//while cin>>symbol sets 'A'
```
{% endraw %}


- Unexpected `\n` in input.

### Character-manipulating function

- Library `<cctype>` contains the tools
- `toupper` , `tolower`, `isupper`, `islower` , `isdigit`, `isalnum`, `isspace`, `ispunct`(punctuation mark), `isprint`(printing letter including space), `isgraph`(wo space), `isctrl` (control character)

## String

- `string` type defined in library `<string>`
- We can easily assign, compare and add.
- Type conversion happens(C-string to string)
- The string variable is not terminated with `\0`
- Extraction `>>` still ignores whitespace


{% raw %}
```c++
string s1, s2;
cin >> s1;
cin >> s2; //Input : May the hair ...
//s1 : May
//s2 : the
```
{% endraw %}


- To read complete lines, use `getline()`


{% raw %}
```c++
string line;
getline(cin, line); //caution. the first argument is cin, 
//the second is line (string variable)
```
{% endraw %}


- If there were leading/trailing blanks, they will be part of the string value too
- When mixing `cin>>variable` and `getline` together, there’ll be error


{% raw %}
```c++
void newLine(){
    char symbol;
    do{
        cin.get(symbol);
    } while (symbol!='\n');
}
int main() {
    int n;
    string line;
    cin>>n;
    newLine();
    getline(cin, line); //line = '\n' if there's no newline()
}
```
{% endraw %}


- To access each character of string
	- lastName[i] : does not check for the illegal index
	- lastName.at(i) : checks and omits error if out of range
- `length()` function returns the length of the string object

### Member functions of the standard class string

- Constructors
	- `string str` (default, creates empty object str)
	- `string str("astring");` : Creates string object with c-string
	- `string str(aString);` : Copy constructor
- Element access
	- `str[i]` / `str.at(i)` checks the illegal index or not
- Assignment
	- `str1 = str2` assigns
	- `str1 += str2`  / `str1+str2` concats
	- `str.empty()` : returns true if empty
	- `str.insert(pos, str2)`
	- `str.remove(pos, length)`
- Comparisons
	- `==, !=` : bool
	- `<, >, <=, >=` : compare with lexicographical order
	- `str.find(str1)` : find index of first occurrence of str1 in str
	- `str.find_first_of(str1, pos)`: find index of first instance of str1 in str (”Hello world”, “abcde” → 1)

### Conversion between string and c-string

- Automatic conversion from C-string to string but not vice versa


{% raw %}
```c++
char aCstring[] = "This is my C-string.";
string stringVar;
stringVar = aCstring; //Legal
strcpy(aCstring, stringVariable); //Illegal
strcpy(aCstring, stringVariable.c_str()); //Legal
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

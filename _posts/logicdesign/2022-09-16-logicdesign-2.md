---
title: '논리설계 및 실험 2'
layout: single
categories:
  - study
  - logicdesign
tags: []
---

## Ch 2. Combinational Logic

### Definition of combinational logic

- Define : 현재 입력의 조합으로만 만들어지는 디지털 시스템 
- kind of digital system whose output behavior depends only on the current inputs -> each output is defined as a function (combination) of inputs
- How to describe combination logic : Boolean algebra, wired gate, truth table, etc.

### Examples of combinational logic

- Equivalence circuit : Same -> 1, else -> 0
- Tally circuit : counts the number of 1
- Binary Adder : (Half/Full) adder

### Laws and theorems of Boolean logic

- Law(axioms) : 공리, 증명없이 사용.
- Operation orcder : COMPLEMENT -> AND -> OR
- ex) a'b+c / a' + bc

### Axioms 

- A1. the set B contains at least two elements : a, b
- A2.closure: a+b is in B, ab is in B
- A3.commutaivity: a+b=b+a, ab = ba
- A4.associativity: a+(b+c) = (a+b)+c = a+b+c / a(bc) = a(bc) = abc
- A5.identity: a+0 = a, a1 = a
- A6.distributivity: a+bc = (a+b)(a+c), a(b+c) = ab+ac
- A7.complementarity: a+a'=1, aa'=0

### Theorems

- Dual expression : 0 -> 1, 1 -> 0, + -> *, * -> +
- Operations with 0 and 1
1. X+0=X / 1D. X*1=X
2. X+1=1 / 2D. X*0=0
- Idempotent theorem
3. X+X=X / 3D. X*X=X
- Involution theorem
4. (X')' =X
- Theorem of complementarity
5. X+X'=1 / 5D. X*X' = 0
- Commutative law
6. X+Y=Y+X / 6D. XY = YX
- Associative law
7. (X+Y)+Z = X+(Y+Z)=X+Y+Z / 7D. (XY)Z = X(YZ) = XYZ
- Distributive law 
8. X(Y+Z) = XY +XZ / 8D. X+(YZ) = (X+Y)(X+Z)
- Simplification theorem
9. XY + XY' = X / 9D. (X+Y)(X+Y')=X
10. X+XY=X / 10D. X(XY)=X
11. (X+Y')Y=XY / 11D. (XY')+Y=X+Y
- DeMorgan's law
12. (X+Y+Z+...)' = X'Y'Z'... / 12D. (XYZ...)' = X'+Y'+Z'+...
- General form
13. {f(X1, X2, ..., Xn, 0,1,+,*)}' = f(X1', X2', ..., Xn', 1,0,*,+)
- Duality
14. (X+Y+Z+...)^D = XYZ... / 14D. (XYZ...)^D = X+Y+Z+...
- General form
15. {f(X1, X2, ..., Xn, 0, 1, +, *)}^D = f(X1, X2, ..., Xn, 1,0,*,+)
- Theorem for multiplying and factoring
16. (X+Y)(X'+Z) = XZ + X'Y / 16D. XY+X'Z = (X+Z)(X'+Y)
- Explanation : X'+Z = -> X=>Z
- X가 True인경우와 False인 경우로 나누어 생각하면 True라면 Z값에만 0,1이 의존, X가 false라면 Y값에만 의존하므로.
- Consensus theorem
17. XY + YZ + X'Z = XY+X'Z / 17D. (X+Y)(Y+Z)(X'+Z)=(X+Y)(X'+Z)

### Duality vs DeMorgan's Law

-  Duality : Meta theorem, 어떤 Theorm이 성립하면, 그 Theorem 의 Dual도 성립한다.

### DeMorgan's Law

- Dual관계는 관계성 / DeMorgan은 동치인 회로
- (a+b)' = a'b' -> 회로상에서는 NOT이 Input으로 올 때 OR <-> AND가 바뀜.

### Possible logic functions of two vars.

- total 16 possible functions
- ex) NOT(X implies Y) => XY'
- XOR : + O로 표현 -> 10, 01일때 1
- XOR의 반대면 X=Y 관계.
- 8 distinct functions, 나머지 8개는 complement

### Cost of different logic functions

- 0, 1, X, Y => 0 switch
- X', Y' (NOT) => 2 switches
- X nor Y and X nand Y => 4 switches
- X or Y , and X and Y => nor/nand + not => 6 switches
- X=Y, X xor Y : 16 switches => AB'+A'B = ((A'B)'(AB')')'

### Realizing Boolean Formulas : Logic gates

- NAND, NOR, XOR, XNOR

- Half / Full , BIt adder
![](/assets/images/logicdesign-2/1.jpg)

### Time behavior and waveforms

- Waveform : x(time step). y(logic val) 
- Glitch : 임시적인 Error들

- for Full Adder,  Sum : 2 units / Carry : 3 units
- 11 + 01 -> C2=1, S1=S0=0에서 오류 발생 
- 통과하는 Gate의 수에 따라 값이 통과하는 unit 수에 따라 달라짐.

### Level , Two-Level logic

- One Level : Z=A+B, F=AB', G=A'B
- Two Level : Y= F+G = AB'+A'B
- 모든 Boolean Expression을 Two-Level로 나타낼 수 있다.
- Unique algebraic signature of function
- Canonical form : standard form to represent a Boolean expression
- 정규화 폼 : SOP, POS로 나타낼 수 있음. Sum of products, Product of sums

### Sum of products canonical forms

- Truth table에서 output이 1인 경우의 INPUT을 그대로 곱의 형태로 쓴다음 다 더해주기.
- minterms : every variable appears exactly once, true or inverted.
- minterms를 숫자를 적어 m1, m3 등으로 나타내기도 함.
- F(A,B,C) = sigma m(1,3,5,6,7)
- However, canonical form is not minimal form

### Product of sums canonical forms

- Dual 처럼 생각하기. F가 0인 term을 고른 다음 0이면 그냥 쓰고, 1이면 invert 하기.
- ex) 000 => A+B+C, ... 010 => A+B'+C
- Maxterms : M0,M1, ... 
- F(A,B,C) = pi M(0,2,4)

### SoP, PoS and DeMorgan's Law

- F'에 대한 SoP에 드모르간을 쓰면 F에 대한 PoS가 됨. 
- F' = A'B'C' + A'BC'+AB'C'
- (F')' = F = (A+B+C)(A+B'+C)(A'+B+C)

### Conversion between canonical Forms

- Minterm <=> Maxterm conversion : F(A,B,C) = m(1,3,5,6,7) = M(0,2,4)
- DNF of F to DNF of F' : use Minterms whose indices do not appear F(A,B,C) = m(1,3,5,6,7) / F' = m(0,2,4)
- CNF of F to CNF of F' : same

### Don't Care term 

- use X mark in truth table
- assigned 0 or 1 to simplify the circuit of Z as much as possible

### Boolean Cubes

- Visual Technique (n-cube)
- n input var = n-dim cube
- Adjacency Plane - Adjacent plane corresponds to a product term
- Merge adjacency plane
- m dimensional adjacency plane within an n-dimensional cube => n-m literals.

### Karnaugh Maps

- Reformulation of the truth table. 
- numbering scheme based on gray-code
- 00,01,11,10
- 000,001,011,010,100,111,101,100

#### Adjacencies in K-Maps

- n variable -> n adjacency (direction) possible
---
title: '논리설계 및 실험 3'
layout: single
categories:
  - study
  - logicdesign
tags: []
---

## Ch 3. Working with COmbinational Logic

### Formalizing Boolean minimiazation

#### Definition of Terms

- Implicant : A single element of the on-set or any group of elements that can be combined together in a K-map
- Prime Implicant : An implicant that cannot be combined with another one to eliminate a literal.
- Essential Prime Implicant : a prime implicant that alone covers an element of on-sets / Must be part of minimized expression.

#### Two Level Logic simplification algorithm

1. Choose an element from on-set
2. Find all the Maximal groups of 1s and Xs adjacent to that element. (find prime implicants)
3. Repeat 1,2 until all prime implicants have been found (Find all directions in kmap)
4. Visit all single-covered on-set to find epi
5. uncovered 1 by essential prime, Select a minimum number of prime implicants that cover them

### Automating 2-level logic simplification

#### Quine-McCluskey method

1. Fill col 1 with On-set and DC set minterm indices grouped by number of 1s
2. Apply uniting theorem, combined -> write in col 2
3. repeat 2, 3 until impossible
4. mark used implicant with check, mark * for pi
5. Write prime implicants in row, write complete on-set of the function in col
6. check single X -> that row is epi
7. find minimum set of rows that cover remaining columns. (Espresso)

#### Espresso method

1. Expand : Expand implicants to their max size. 
2. Remove implicants covered by expaned implicant from further consideration
3. Remember the direction. (shrink.)
4. Extract an irredundant cover from the expanded implicants.
5. Reduct prime implicants to the smallest size that still cover On-set
6. repeat 1~5 until the solution improves.

### Realizing SoP and PoS logic networks.

- DeMorgan's Law and pushing bubbles
- A OR B =  A' NAND B'
- A NAND B = A' OR B'
- A AND B = A' NOR B'
- A NOR B = A' AND B'

#### Conserving bubbles

- new inversion introduced -> must be balanced by a complementary inversion
- Can change every AND/OR Multilevel logic to NAND/ NOR only gates

#### NOn-alternating multilevel networks.

- 잘 생각해서 배치하자~

### Time Responce in Combinational networks

- Gate delay : minimum, typical, maximum delays. Tradeoff between delay and power

### Timing waveform

- A pulse shaper : ((A')')' and A = F : after 1 AND delay, 3 INVERTER delay pulse output.

### Pulse- shaper circuit

- B = (AB)' or Bnew = (ABold)'.
![](/assets/images/logicdesign-3/1.jpg)


### Hardware Description Languages(HDLs)

- Describe behavior
- Describe structure
- Describe timeing (delay)
- Describe concurrency
- Describe hardware at varying levels of abstraction
- Enable simulation : event driven simulation

### History of HDLs

- ABEL -> ISP -> Verilog -> VHDL

### HDL coding 

#### Structural

- describe each gate as module

- ex) and_gate and1 (t1, a, bbar);

#### Behavioral

- specifies when and how the module behaves

- sensitivity list : when the block is excuted

- ex) always @(a or b) begin

#### Delay

- delay postpones the assignment of a new value

- ex) assign #6 z = a^b
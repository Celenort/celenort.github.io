---
title: '논리설계 및 실험 1'
layout: single
categories:
  - study
  - logicdesign
tags: []
---

## Ch 1. Introduction

### Introduction to Digital Logic

- Design : the process of coming up with a solution to a problem while meeting some criteria (ex : size, cost, power, performance)
- Divide-and-conquer approach -> reducing the complexity of the design process by breaking down the problem into smaller pieces. 

### Logic Design

- logic components : have input, output wires that carry digital logic vals.
- Arbitary information can be represented using digital abstraction.
- Transistors react to the voltage lvls on the input wires.
- Sequential logic circuits : react to current vals on the input + past history of values.
- ex) number counter. -> 3, Next (4), Next (5) ...

### Contemporary Logic Design

- Important trends : larger design, shorter time, cheaper product 
- Scale : pervasive use of CAD over hand method. multiple lvls of design
- Time : Abstract design representations, programmable function components, automatic synthesis techniques
- Cost : higher levels of integration. use of simulation to debug -> simulate and verify before you build

### History of Logic Design

- before 19th century
  - Theories of logic (논리학)
- 1850's : George Boole, Boolean algebra
  - Logic -> Algebra. And : x+y, not : x', or : xy
  - x+y = (x' y')' , (x+y)+x'y' = 1 ...
- 1938 : Claude Shannon (Boolean algebra link to switches)
  - Any circuit is represented by a set of equeations.
  - and : 직렬, or : 병렬 연결

### Computation : abstract concept

- Compute (계산) : Abstract view => output = F(input) = f(f(f(... f(input))))
- state : values.
- Functions : sequence of mutators of states.

### Turing machine

- 1936, Alan Turing : invented turing machine. A hypothetical device that manipulates according to a table of rules.

### Turing meets Shannon

- Functions can be implemented by switches.
- ex) 010 + 011 = 101, 
- x, y, Sum, Carry, Sum = xy' + x'y  /  Carry = xy
- Boolean algebra can be used to perform Turing-complete computations.

### History of Logic Design

- 1946, ENIAC. World's first automatic machine to perform Turing-Complete computations -> Computer, 17468 vaccum tubes -> switches.
- 1947 : Transistor. Replaces vaccum tubes. Enable integration of multiple devices into one pachage. 
- 1960's Catalog of logic components
- 1978 : Programmable Array Logic(PAL) -> Undefined function -> must be reconfigured.
- 1984 : Field-programmable gate arrays

### Basic function units of computation

- Representation : "0", "1" on a wire, set of wires (e.g. or binary numbers)
- Assignment : x= y
- Data Operators : x+y-5
- Control : 
  - Sequential statements : A;B;C (A->B->C)
  - Conditionals : if x==1 then y
  - Loops : for(i=1;i<=10;i++)
  - Procedures : A;foo(...);B;

### Switches

- if A is "1" or asserted -> turn on light bulb (Z)
- if A is "0" or unasserted -> turn off the light bulb(Z)
- Z = A
![](/assets/images/logicdesign-1/1.png)
- And, Or
![](/assets/images/logicdesign-1/2.png)

### Switching networks

- Switch settings : 스위치 배치를 통해 어떤 layout에서 어떻게 output 나오는지 알 수 있음.
- To build larger computations : use one network's output as another network's input

### Relay networks

- simple way to convert between conducting paths and switch settings is to use (electro-mechanical relays)
- current flowing through coil magnetizes core and normally closed contact to be pulled open. 
- No flow -> return to normal position
- Slow speed, mechanical thing problem

### Transistor networks

- Relays aren't used much anymore
- Vaccum tubes : used for switchs but still too slow
- Modern digital systems are designed in CMOS technology
- MOS : Metal-Oxide on Semiconductor (C is for complementary)
- they act as voltage-controlled switches.

### MOS transistors

- MOS transistors have three terminals : drain, gate, and source
- check the voltage on the gate terminal. if high(n type)/low(p type) : open the gate. else, close the gate
- n-type : 일반 / p-type : 반대, 동그라미 들어간 symbol

### CMOS network

- A switch consists both normally open and normally closed switches.
![](/assets/images/logicdesign-1/3.png)
- Single MOS에서의 NOT gate 역할을 함. 
- CMOS is more stable than single MOS since it ensures
  - when X is off, Y stays high enough by 3V connected
  - when X is on, Y stays low enough by being grounded

### Two CMOS transistors networks

- works as NAND, NOR gate
![](/assets/images/logicdesign-1/4.png)

### Combinational logic symbols

- Logic gates
![](/assets/images/logicdesign-1/5.png)

### Digital vs Analog

- analog : continuous time / continuous value
- quantized : continuous time / discrete value
- sampled : discrete time / continuous value
- digital : discrete time / discrete value
![](/assets/images/logicdesign-1/6.png)

### Digital Processing
- Why digital? : easier to think about small number of discrete values.
- Robust : Immune to noise by reshaping. (small noise 에 대한 immunity)
- Binary processing : 약간의 Error에 대해서 민감하게 반응하지 않고 0과 1로 처리
- Digital representations : not recognize single voltage as 0 or 1. -> not propagating small errors in volatge values.

### Encoding 

- Digital representations exist for every object in the world.
- every values -> 0, 1로 encoded 되어야 함.
- Every binary digit is called a bit.
- the length of a binary string to represent a decimal number n is [log n]

### Ex) Calender subsystem

- Month (12개 -> 4bit)
- leap (1개 -> 1bit)
- output : d28, d29, d30, d31의 4개.
- Truth table, block 
- d28 : 2월(0010 and leap=0) : d28 = m8' m4' m2 m1' leap'
- d29 : 2월(0010 and leap=1) : d29 = m8' m4' m2 m1' leap
- d31 : 1, 3, 5, 7, 8, 10, 12월 : (0001) + (...) + (1100)
- hyphen : input/output don't care
![](/assets/images/logicdesign-1/7.png)
![](/assets/images/logicdesign-1/8.png)
- 7 개를 모두 or로 묶는 것 보다 4, 3개 등으로 나누는 것이 좋음.
- Signal attunation에 의해 8개의 gate에 모두 직렬로 3v가 연결되면 신호의 세기가 약해짐.

### Ex2) Door combination Lock

- 3 values in sequence. Error if wrong.
- input : 3 values
- outputs : door open/close
- memory : must remember combinations.
- FSM : Finite state machine (finate set of states in memory)
- Encoding
  - How many bits per input value? : log 10 ~= 4 bits.
  - How many values in sequence? : 3
  - How do we know a new input value is entered? NEW
  - how do we represent the states of the system?
![](/assets/images/logicdesign-1/9.png)
- Behavior : 
  - clock wire -> look at inputs.
  - sequential : sequence of values must be entered

#### Abstract control

- Finate-state diagram
  - states : 5 states.
    - point in execution of machine.
    - each state has outputes.
  - transition : (edge에 해당되는.) -> 6 transitions (from state to state), 5 self transitions, 1 global(new).
  - inputs : reset, new, results of comparisions.
  - output : open/closed.
- Internal structure : data-path vs control
![](/assets/images/logicdesign-1/10.png)
![](/assets/images/logicdesign-1/11.png)
- data path : storage for combination / comparators
- control : controller, brain, control for data-path.
- MUX control : NEW, Value -> Controller에서 C1의 값이 나감, -> C1과 value 비교 -> Equal값이 바뀜
- 내부적으로 S1, S2, S3에 close, open 을 제외한 mux output이 있어야 함.

#### state table (not binary, additional state names)

![](/assets/images/logicdesign-1/12.png)

#### Encoding state table

- State : S1, S2, S3, Open, Error : at least 3 bits, as many as 5.
  - -> Choose 4 bits : 0001, 0010, 0100, 1000, 0000
- output mux : C1, C2, C3 -> choose 3 bits : 001, 010, 100
- Output open/close : 1, 0
![](/assets/images/logicdesign-1/13.png)
- Next state의 가장 왼쪽 bit = open/closed , 나머지 3bit : mux이므로 8bit를 output으로 할 필요없이 next state에 해당되는 4bit만 output 하고 mux, state에 연결해주면됨.

#### Controller implementation

![](/assets/images/logicdesign-1/14.png)

---
title: '논리설계 및 실험 4'
layout: single
categories:
  - study
  - logicdesign
tags: []
---

## Ch 4. Combinational Logic Technologies

### Swithes to ICs

- Vaccum tubes -> Transistors -> VLSI Circuits

### Logic components

- Standard parts : Integrated Circuits that contain small number of simple logic gates widely used

- ROM and PLA/PAL : ROM(Read only memory, fixed array of 1, 0) / Programmable logic array (PLA), Programmable array logic(PAL) : fixed logic gates arranged in a standard two-level form such as AND, OR
- Application-Specific Integrated Circuit (ASIC) : Gate array, standard cells
- Field-Programmable Gate Array (FPGA)

### Technology metrics

- Gate delay : Time delay from an input change to an output change
- Degree of integration : Chip area and number of chip packages required to implement a given function in a technology
- Power dissipation : power consumption
- Noise Margin : Max voltage that canbe added or subtracted -> still interpret voltage as the correct logic value
- Component cost
- Fan-out : number of oate inputs to which a given gate output can be connected without exceeding electrical limitations
- Driving capability : speed of communications between packaged componenets
- Configurability : logic and interconnect configured dynamically. 

### Fixed Logic

- Cell-based design : Designers pick and choose given standard cell library.
- SSI, MSI(Small and Medium scale integrated circuit)
- Optimization of gates < Optimization of Packages. Reduce # of packages would be better option to reduce cost of circuit

### Look-up Table (LuT)

- store output value of a function for each input combination in a table.
- Changing values stored in the table -> Changes the function

### Read-Only Memory (ROM)

- LuT-based logic that has an array of values intended to be read many times but only written once
- program the output of truth table directly into ROM
- Address(index of array) -> OUTPUT
- Varients : Programmable ROM(PROM), Erasable PROM(EPROM), Electrically Erasable PROM(EEPROM)
- n addresses -> decoder -> 2^n word lines -> Memory -> outputs
- entry row is called "word"
- width of row = word-size (2^n=m)
- index is called an "Address". selected word is output. 

![](/assets/images/logicdesign-3/2.jpg)

- Implement a combinational logic in a two-level canonical form.~
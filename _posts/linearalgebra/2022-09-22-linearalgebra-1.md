---
title: '전기시스템선형대수 LA1'
layout: single
categories:
  - study
  - linearalgebra
tags: []
---

### <b> 모르는것만 정리하기.

## 1. Vectors

### Flop counts

- Basic Arthimetic Operations : floating point operations -> flops

- ex) $\bf x + y$ : n addition -> n flops
- ex) $\bf x^T y$ : 2n-1 flops (2n or n으로 줄이기도 함.)

### Linear Combination

- $\bf a_1, a_2, \cdots a_m$ : m-vector
- $\beta_1, \beta_2, \cdots \beta_m $ : scalar
- linear combination : $\beta_1\bf{a_1} + \beta_2\bf{a_2}+\cdots++ \beta_m\bf{a_m}$

### Sparsity

- a vector is sparse if many of its entries are 0
- nnz(x) : number of entries that are nonzero

### Inner product function

- $\bf a$ : n-vector
- $f(\bf{x}) = \bf{a^T x} = a_1 x_1 + \cdots a_n x_n $
- Linear function is inner product function. 증명은 superposition을 inner product에 넣기.
- 그 반대 : x를 e1~en으로 분리해서 증명.

### Affine Function

- affine : linear + constant.
- $f(\bf x) = \bf{a^T x} + b$ with n-vector and b.
- f is affine if and only if $f(\alpha \bf{x} + \beta \bf{y}) = \alpha f(\bf{x}) + \beta f(\bf{y})$ holds for all $\alpha, \beta$ with $\alpha +\beta = 1$. 

### First-order Taylor approximation

- First order Taylor approximation of f, near point $\bf z$ :

$$ \hat{f}(\bf{x}) = f(\bf{z}) + {\ }
---
layout: post
date: 2023-12-09
title: "[제어공학개론] Lec 09 - Canonical form"
tags: [control, lecture-note, system, from_velog, linear algebra, ]
categories: [Electrical Engineering, control theory, ]
media_subpath: assets/img/2023-12-09-[제어공학개론]-Lec-09---Canonical-form.md
image:
  path: 0.png
  alt:  
description: 제어공학에서 표준형으로 설정된 시스템의 캐노니컬 형식에 대해 설명하며, 제어 가능성과 관측 가능성의 캐노니컬 형식을 수식과 함께 제시합니다. 각 형식은 시스템의 전이 함수를 나타내며, 교과서에 따라 다르게 정의될 수 있습니다.
pin: false
---


{% raw %}


## Canonical form

- 수많은 A, B, C, D로 describe 될 수 있는 system을 특정 표준형으로 설정해둔 것.
- 교과서, 참고자료에 따라 다르게 설정할 수 있음.

### Controllability canonical form


$A = \begin{bmatrix}0 & 1 & 0 & \cdots & 0 \\ 0 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & 1 \\ -a_0 & -a_1 & -a_2 & \cdots & -a_{n-1} \end{bmatrix}$
{% raw %}
$
$B = [0, 0, 0, \cdots, 1]^T$
$
{% endraw %}
$C = [b_0, b_1, b_2, \cdots, b_{n-1}]$$
$$D = [D]$$

- it represents transfer function

> $$T(s) = \frac{b_{n-1}s^{n-1}+\cdots + b_1s+b_0}{s^n+a_{n-1}s^{n-1}+\cdots+a_1s + a_0}+D$$



#### another book...'s controllability canonical form

- original canonical form
![[../../../3. Resources/Attachments/Lec 08 Canonical form_image_1.png]]
- also called as companion form
![[../../../3. Resources/Attachments/Lec 08 Canonical form_image_2.png]]


#### Observability canonical form


$$A = \begin{bmatrix}0 & 0 & 0 & \cdots& 0 & -a_0 \\ 1 & 0 & 0 & \cdots & 0 & -a_1 \\ 0 & 1 & 0 & \cdots& 0 & -a_2 \\ \vdots & \vdots & \vdots &\vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots &1 & -a_{n-1}  \end{bmatrix}$
{% raw %}
$
$B = [b_0, b_1, b_2, \cdots, b_{n-1}]^T$
$
{% endraw %}
$C = [0, 0, 0, \cdots, 1]$$
$$D = [D]$$



#### another book...'s observability canonical form

- original canonical form
![[../../../3. Resources/Attachments/Lec 08 Canonical form_image_3.png]]
- companion canonical form
![[../../../3. Resources/Attachments/Lec 08 Canonical form_image_4.png]]


##Todo Stability 부분은 시험에 안나오므로, 다음에 정리.


{% endraw %}


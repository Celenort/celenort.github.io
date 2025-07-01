---
layout: post
date: 2024-06-15
title: "[Review] E2E Variational Network"
tags: [Variational Network, FastMRI, Compressed sensing, Cross-domain learning, ]
categories: [Paper review, ]
media_subpath: /assets/img/2024-06-15-[Review]-E2E-Variational-Network.md
image:
  path: 0.png
  alt:  
description:  
pin: false
---


# End-to-End Variational Networks for Accelerated MRI Reconstruction


## 1 . Introduction


MRI의 느린 acquisition speed와 


## 1. Introduction


The slow acquisition speed of MRI(Magnetic Resonance Imaging) had led us to develop two complementary methods: **Parallel Imaging** (PI) and **Compressed Sensing** (CS).

- **Parallel Imaging** uitilizes multiple receiver coils to acquire multiple views simultaneously, then coil images combined in software.
- **Compressed Sensing**, acquires only a subset of measurements and utilizes CS to reconstruct the final image from undersampled measurements.

> alleviate : to make (suffering, deficiency or a problem) less severe


## 2. Background and Related Work


### 2.1 Accelerated MRI acquisition

- _k-space_ : 2d frequency domain space, image can be obtained by applying an inverse 2D Fourier transform $\mathcal F^{-1}$ to the measured k-space samples.

{% raw %}
$$
{\bf k} = {\mathcal F}(\bf x) + \epsilon \tag{1}
$$
{% endraw %}


where $\bf x \in \Complex^M, \bf k \in \Complex^M$ / $\epsilon$ is measurement noise, $\mathcal F$ is the fourier transform operator.


By introducing sensitivity map, image from multiple coils can be obtained with following:


{% raw %}
$$
{\bf k} _i = \mathcal F (S_i {\bf x}) + \epsilon_i , i=1,2,\dots, N, \tag{2}
$$
{% endraw %}


where $S_i$ is a complex-valued diagonal matrix that encodes position dependent sensitivity map of _i_-th coil and $N$ is number of coils. Sensitivity maps are normalized to satisfy :


{% raw %}
$$
\sum_{i=1}^N S_i^{*} S_i = 1 \tag{3}
$$
{% endraw %}

- Undersampled k-spaced data : $\tilde {\bf k} _i = M{\bf k}_i$, where $M$ is binary mask operator that selects a subset of k-space point. Undersampled k-spaced data results in **aliasing artifacts** in image domain
- Sensitivity map $S_i$ can be estimated using the central region of k-space corresponding to low frequencies, called the _Auto-Calibration Signal_ (ACS) line which is typically fully sampled.

### 2.2 Compressed Sensing for Parallel MRI Reconstruction

- Classical compressed sensing methods can be formulated by following :

{% raw %}
$$
\hat {\bf x} = \argmin_{\bf x} {1 \over 2} \sum_i \Vert M\mathcal F (S_i {\bf x} ) - \tilde {\bf k}_i\Vert ^2 + \lambda \Psi({\bf x}) \tag{4}
$$
{% endraw %}


{% raw %}
$$
\hat {\bf x} = \argmin_{\bf x} {1 \over 2} \sum_i \Vert A({\bf x } ) - \tilde {\bf k}\Vert ^2 + \lambda \Psi({\bf x}) \tag{5}
$$
{% endraw %}


	where $\Psi$ is regularization function, $A( \ \cdot  \ ) $ is the linear forward operator (multiplies by sensitivity maps → apply 2D FFT → undersampling data), $\tilde {\bf k}$ vector of masked k-space for all coils


	→ Find fully sampled image $\hat {\bf x} $ that minimizes difference between undersampled (given) data

- Solving this optimization problem with iterative gradient descent steps using :

{% raw %}
$$
{\bf x}^{t+1} = {\bf x}^{t} - \eta^t \big(A^{*}(A({\bf x} - \tilde {\bf k}) + \lambda \Phi ({\bf  x}^t) \big) \tag {6}
$$
{% endraw %}


where $\eta^t$ learning rate, $\Phi({\bf x}) = \nabla_{\bf x} \Psi$, $A^{*}$ is the hermitian of forward operator $A$ .


### 2.3 Deep Learning for Parallel MRI Reconstruction



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

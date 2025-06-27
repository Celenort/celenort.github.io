---
layout: post
date: 2024-07-17
title: "[Review] Feature-Image VarNet"
tags: [Variational Network, Attention, FastMRI, Compressed sensing, Cross-domain learning, ]
categories: [Paper review, ]
media_subpath: /assets/img/2024-07-17-[Review]-Feature-Image-VarNet.md
image:
  path: 0.png
  alt:  
description:  
pin: false
---


# Accelerated MRI reconstructions via variational network and feature domain learning


### 서론


## Methods


### MR image reconstruction


MR signal ${\bf k}_i$(k-space domain) recieved by the _i_-th coil is related to the MR image $\bf x$ by the forward problem :


{% raw %}
$$
{\bf k}_i  = {\bf m} \odot {\bf F} ({\bf c}_i \odot {\bf x} ) , \ i=1, \cdots , N \tag{1}
$$
{% endraw %}

- $\odot$ operator : element-wise (Hadamard) multiplication - Does resemble multiplication, but distinct from ‘Matrix’ or ‘Vector’ multiplication
- ${\bf c}_i$ : receive coil sensitivity profile (Image domain)
- $\bf F$ : discretized Fourier transform working on with multichannel images concatenated (DFT operator)
- $\bf m$ : predefined undersampling mask(same shape with kspace domain, works on kspace)

One of the traditional methods (Compressed Sensing) is solving **(1)** by regularized optimization routine


{% raw %}
$$
\tilde{\bf x} = \argmin_{\bf x} {1\over 2} \sum_i^N \Vert {\bf m} \odot {\bf F} ({\bf c}_i \odot {\bf x} ) -\tilde {\bf k}_i\Vert + \lambda \mathcal {\textbf Q} \{ \bf x\} \tag{2}
$$
{% endraw %}

- $\mathcal {\textbf Q}$ : Regularizer, $\lambda$ : its weighting factor
- $\tilde {\bf k}_i = \bf m \odot  {\bf k}_i$ (tilde) is undersampled measured k-space data

If $\mathcal {\textbf Q}$ differentable, problem can be solved with few gradient descent iteration steps as :


{% raw %}
$$
{\bf k}^{j+1} = {\bf j}^j - \eta^j {\bf m} \big({\bf k}^j-\tilde {\bf k} \big) + \lambda {\bf F} \ \varepsilon {\partial \mathcal {\textbf Q} \big(\mathcal R ({\bf F }^{-1} {\bf k}^j)\big)\over \partial \bf k} \tag{3a}
$$
{% endraw %}

- where $\varepsilon(\ \cdot \ )$ : expand operator, performs individual coil images with ${\bf c}_i$

{% raw %}
$$
\varepsilon\{z\} = [{\bf c}_1 \odot z, \cdots , {\bf c}_N \odot z] \tag{3b}
$$
{% endraw %}

- where $\mathcal R (\ \cdot \ )$ : reduce operator, multiplies element-wise the conjugate of ${\bf c}_i$ with coil images and sums over coil chans.
- $\eta^j$ : learning rate of gradient descent (iter $j$)

Finally, individual coil images given from ${\bf x}_i = \vert {\bf F}^{-1} {\bf k}_i\vert$ and coil combined images are `sum of sqaured roots` of individual coil images


### Variational network


Inverse problem remains ‘ill-posed’ for high undersampling rates. 


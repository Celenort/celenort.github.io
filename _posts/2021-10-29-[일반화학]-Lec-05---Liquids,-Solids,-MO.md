---
layout: post
date: 2021-10-29
title: "[일반화학] Lec 05 - Liquids, Solids, MO"
tags: [화학, Inter-molecular forces, London dispersion force, 수소결합, ]
categories: [Lecture, 일반화학, ]
media_subpath: /assets/img/2021-10-29-[일반화학]-Lec-05---Liquids,-Solids,-MO.md
image:
  path: 0.png
  alt:  
description:  
pin: false
---


## Liquids


### Inter-Molecular forces : 분자간 힘

- 비압축성, Thermal expansion small, diffusion (mobility is limited) → 분자간 힘의 영향 많이 받음
- 크기 비교 : ion-ion > ion-dipole > dipole-dipole (쌍극자-쌍극자) = dipole-induced dipole (유도쌍극자), London Force(분산력)
- 분자 내부 결합보다 거리가 멀고, 에너지가 작음. (크기가)
- Ion-ion : 원래의 coulomb와 같이 1/r 에 비례
- Ion-dipole : 1/r^2에 비례

### 유도 쌍극자 (Induced dipole)

- 외부 전기장에 의해 어느정도의 쌍극자 모멘트를 가지게 되는지에 대한 Polarizability tensor.

{% raw %}
$$
\overrightarrow{\mu}^* = \overleftrightarrow{\alpha} \cdot \overrightarrow{E}
$$
{% endraw %}

- 전기장에 의해서 dipole이 되려 하는 경향을 의미하는 텐서 값.

### London dispersion force

- van der waals attraction, 크기는 매우 낮음, 이온, 공유결합의 1/100 수준

{% raw %}
$$
V(r) = {\alpha_{1} \alpha_2 \over r^6}
$$
{% endraw %}


### Hydrogen bonding

- O, N, F는 워낙에 E.N이 크기 때문에 분자 내에서 이온인 것 처럼 행동.

![0](/0.png)

- 한 분자의 수소와 결합한 O, N, F가 다른 분자의 수소와 이루는 결합
- 분자의 크기가 작아질수록 Bonding energy가 작아지는 것이 정석인데 $NH_3, HF, H_2O$는 그 크기가 증가.

### inter-molecular force의 실제 적용

1. Suface tension : 표면장력.
2. Meniscus formation : 매니스커스

![1](/1.png)

- Hg : 금속이므로 자신들끼리 결합하는 것을 선호 → Convex
- 물과 물의 결합보다 물과 벽의 결합을 더 선호 → Concave
- Adhesive force : 물-벽의 인력을 의미 / Cohesive Force : 물간의 인력
- Lotus effect : 미세 구조로 인해 공기가 많이 들어감 → Cohesive Force를 이용.
- Capillary Action (모세관 현상) : Adhesive force에 의해 인력때문에 물이 딸려올라감.
- Reason : 표면에 있는 분자는 분자간 결합 수가 적기 때문에 불안정, 안으로 들어오려고 함. → 면적을 최소화 하여 system의 에너지를 낮추기 위해서는 구형으로 존재해야함. (분자간 인력 높은 경우가 더 구형이 되려는 경향이 큼)

## Solids

1. Molecular solids
	- 분자간의 결합으로 연결되어 있는 고체들 ex) $H_2O$, 나프탈렌
2. Metallic solids
	- 좁은 공간 안에 최대한 많이 응집하려고 함. - 아래 층의 빈공간에 다음 층이 올라가는 방식

		![2](/2.png)

	- ccp, fcc 동일.
3. Network solids (공유결합 분자)
- 공유결합으로 연결되어있는 고체들 (ex) 다이아몬드

### Crystals

- Lattice : Positions of components (결정성 가지고 있는 고체에서의 위치)
- Unit cell : Lattice 내에서의 가장 작은 단위를 의미.
- Cubic : Simple cubic, BCC, FCC, Side-centered
- 같은 원소가 아닌 다른 원소일 때? (ex) NaCl

### Interstitial sites in FCC


![3](/3.png)

- 흰색 구멍을 둘러싸고 있는 가장 가까운 검은색 원소 갯수 : 6개, 팔면체 모양 → Octahedral intersite
- (우측 그림) 흰색 그림을 둘러싸고 있는 검은색 원소 갯수 : 4개, 사면체 모양 → Tetrahedral intersite
- FCC에서의 Octahedral intersite : 13개, (4+5+4) / Tetrahedral intersite : 8개

	> ratio가 두 site의 그것 사이에 들어가게 될 경우 더 ratio가 작은쪽으로 들어가게됨 (최대한 멀어지고 싶으므로)


	![4](/4.png)


### Brag’s diffraction

- 격자에 대해 _θ_ 의 각도로 빛을 쏘았을 때 나타나는 회절
- $2dsinθ = (λ/2) × (2n) = nλ$ → constructive interference
- 이를 통해 Lattice 간의 거리를 구할 수 있음.

### Ionic crystals

- 음이온으로 먼저 구조를 만듬, 만든 이후 만들어지는 빈공간 (Site) 에 양이온을 채움
- NaCl : Cl-, Na+ 모두 FCC(면심입방)
- 특정 site에 들어가도록 결정해주는 요인 : 양이온과 음이온의 Ratio에 의해 결정
- CsCl : R이 크기 때문에 Cubic site에 들어가고, 단순입방구조. (SImple cubic)
- ZnS, _CaF_2 의 경우 tetrahedral site에 들어감.
- ZnS의 경우 Unit cell에서의 전체 8개의 site 중 4개만 사용.
- Site에서 빈공간 → Lithium ion batteries와 같이 사용

### Lithium ion batteries


![5](/5.png)

- Anode (음극) : Graphite를 속에 리튬이온을 묶어둠
- Cathode (양극) : LiCoO2, Transition metel - O 결합 속 틈새 공간에 Li를 묶어둠
- _C_ + _Li_+ → _Li_⋯_C_ → -20kJ/mol
- _Me_⋯_O_ + _Li_+ → _Me_⋯_O_⋯_Li_ -400kJ/mol
- Cathode(양극)의 산소와 binding을 통하여 (이온결합) 매우 안정해짐.
- Graphite와 Li도 안정해지긴함 covalent bond, but 이온결합보다는 아님.
- _Li_+ 가 Anode에서 Cathode로 이동 (-)극에서 (+)극으로 → 중성 유지해야하므로 전자도 이동, 그런데 도선을 따라. 이 때가 방전, 에너지를 소모하는 상태. (배터리 내부에 대해서는 불안정 → 안정)
- 사용하는 금속 : 원소 주기율표의 위쪽, 즉 가벼운 원소 사용.

### Energy structures of metallic solid

- Metalic solid의 경우 원자가 매우 많으므로 orbital간의 에너지 준위 격차가 매우 작음, Band 형성

	![6](/6.png)

- 이 때 실제 MO처럼 Orbital 안에 전자가 차있는 곳, 차있지 않은 곳이 존재하므로 이를 각각 valance band, conductive band라고 명명

	![7](/7.png)

- Half -filled orbital 이 존재해야지만 Conductive라고 할 수 있음. Gap이 너무 크면 잘 통과하지 못함.
- Conduction electrons and holes : valence band에 있는 전자들이 소량 위로 올라가 위쪽에는 전자가 쌓이고 아래쪽에는 hole, 양공이 쌓임. 이로 인해서 위와 아래에 어느정도의 전류가 흐를 수 있게 됨. → 흐르는 전자 양 자체는 작지만 잘 흐르는, 반도체
- 빛에 의해 전류가 흐르게 하는 것 : 태양광 발전
- 가상의 state를 만들어 전자 넣음 → doping

### Nano-materials (Display)

- OLED : 전기를 통해 electron energy 올리고, 다시 내려오면서 빛 방출되도록. gap이 멀 수록 더 높은 에너지, 즉 낮은 파장의 빛이 나옴. 이를 이용하여 적절히 색을 배합. 이를 Organic한 물질로 만듬.
- QLED : RGB가 모두 포함된 백색광을 내보내고, Quantum Dot을 이용하여 Filter를 만듬.
- Quantum dot을 이용하여 Band gap을 더 구체적으로 바꿀 수 있음. (P.I.B가 더 좁을 수록 에너지 간격이 선명해지고 넓어짐)


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
        argmin: "\\operatorname*{arg\,min}"
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

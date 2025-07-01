---
layout: post
date: 2024-06-29
title: "[Archive]WSL로 pytorch 구동하기"
tags: [FastMRI, ]
categories: [FastMRI, ]
media_subpath: /assets/img/2024-06-29-[Archive]WSL로-pytorch-구동하기.md
image:
  path: 0.png
  alt:  
description:  
pin: false
---


### 개요


때는 6월 29일.. 챌린지 시작일인 7월 1일이 되기 직전 할 수 있는 최대한의 것을 해보자는 마음으로, WSL 위에 우분투를 깔아서, 파이토치를 실행할 수 있는 환경을 만들어보자고 생각했다. 


# 1. WSL(Windows Subsystem for Linux) 


어차피 실제로는 GPU를 줄거라서 WSL 설치부분은 굳이 생략해도 되긴한데, 그래도 GPU 부족하거나 추가로 돌리게 될 경우, 차후에 WSL 까는거 까먹었을 때를 대비하여 아카이브 하는 느낌으로 해둠


준비물 : WSL이 지원되는 Windows 10,11 가 설치된 데스크톱

1. wsl install


{% raw %}
```bash
wsl --install
```
{% endraw %}


1. check whether wsl is installed


{% raw %}
```bash
wsl --status
```
{% endraw %}


1. Installing gpu driver (CUDA Toolkit)


{% raw %}
```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.4.0/local_installers/cuda-repo-wsl-ubuntu-11-4-local_11.4.0-1_amd64.deb
sudo dpkg -i cuda-repo-wsl-ubuntu-11-4-local_11.4.0-1_amd64.deb
sudo apt-key add /var/cuda-repo-wsl-ubuntu-11-4-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```
{% endraw %}


1. Check if nvidia cuda is sucessfully installed


{% raw %}
```bash
nvidia-smi -q
```
{% endraw %}



# 2. 리눅스 설치


Microsoft에 있는 Linux를 설치한 뒤 실행한다. 나는 Ubuntu 22.04 LTS(국룰)로 설치함


설치 뒤 username / pw를 설정하는 란이 있는데 설정해준다. 그러면 windows에서 C:\users\ 에 들어갔을 때 처럼 \home\디렉토리 아래에 username 의 사용자 폴더가 생성됨.


username : veryable, pw :veryvery


# 3. 리눅스 설치 위치 옮기기


MS store를 이용한 linux 설치는, 기본적으로 C 드라이브 안에다 설치되게 된다. 물론 wsl 안에서도 /mnt/ 디렉토리를 이용하여 windows의 C, D 드라이브 등에 access할 수 있지만 불편하잖아. 기본적으로 디렉토리를 D나 외부 드라이브로 옮기고 싶었음. (C 드라이브가 용량이 작아서 큰 batch 데이터 넣기가 힘듦)



{% raw %}
```bash
wsl -l -v
```
{% endraw %}



위 커맨드로 현재 wsl 상에서 실행가능한, 설치되어 있는 OS의 목록과 이름을 확인. 기본적으로 MS Store로 깔았으면 Ubuntu-20.04 이런 이름임.



{% raw %}
```bash
wsl.exe --export <Distro name> <tar file name>
```
{% endraw %}



Distro name에는 아까 말한 이름을, tar file name에는 내가 OS를 tarball 형태로 추출하기를 원하는 디렉토리를 적어주면 된다.



{% raw %}
```bash
wsl.exe --export Ubuntu20.04 d:\ubuntu.tar
```
{% endraw %}



그 다음 마운트 해제? 아무튼 언리지스터 해줌



{% raw %}
```bash
wsl.exe --unregister <Distro name>
```
{% endraw %}



그다음에 아까 소중하게 저장한 포켓볼을 다시 위치에 까는 방법은..



{% raw %}
```bash
wsl.exe --import <New Distro Name> <Distro Path> <tar file name>
```
{% endraw %}



그러니까



{% raw %}
```bash
wsl.exe --import Ubuntu d:\wsl\Ubuntu d:\ubuntu.tar
```
{% endraw %}



이런식으로 깔아주면 된다.


처음 깔고 접속하게 되면 # 권한인 Superuser 가 부여되어있으므로 부담스러우면 



{% raw %}
```bash
su <username>
```
{% endraw %}



으로 유저 스위치하기.


# 4. VSCODE랑 연동하기.


VSCODE 차피 SSH 못써서 못쓸거긴한데 정말 간단하게 연동되서 써둠.



{% raw %}
```bash
code .
```
{% endraw %}



이후 VSC에서 wsl extension 받으면 켜져있는 wsl 자동으로 캐치해서 연결시켜준다. 


![0](/0.png)


현재 내가 돌리고 있는 모습. 일단 파일 다운 겁나 오래걸려서 다운받고있다. 


# 5. Ubuntu 기본설정


아마 파이썬은 깔려있지 싶은데



{% raw %}
```bash
sudo apt-get update
sudo apt upgrade
sudo apt install python3
sudo apt install python3-pip
```
{% endraw %}



요골로 python3랑 pip 다운하면됨.


이후는 이후 추가되는 2024-branch의 instruction을 따라가면 될듯. 일단 2023-baby varnet으로 깔아보고있는데,



{% raw %}
```bash
pip install torch
pip install numpy
pip install requests
pip install tqdm
pip install h5py
pip install scikit-image
pip install pyyaml
pip install opencv-python
pip install matplotlib
```
{% endraw %}



요거 실행하고 데이터 넣어두는중. 


# 6. git repository 연결하기


![1](/1.png)

1. 위치를 잘 확인하고 내가 다운받고싶은 위치에서 git clone [주소] 입력. 주소는 github의 <>code 버튼을 눌러서 확인할 수 있다. 나는 내 리포에 포크해서 하니깐 [https://github.com/Celenort/FastMRI_challenge.git](https://github.com/Celenort/FastMRI_challenge.git) 이걸로 함.
2. 모든 브랜치를 다운받는게 아니라 메인 브렌치만 오게 되서 Readme.md만 확인할 수 있다. branch 명령어는 git branch [branch name]. branch 목록은 git branch -a로 확인가능.
3. 나는 브랜치 옮겨다니면서 하기 귀찮아서 걍 물리적으로 2개다 복사해서 붙여넣었다. 왼쪽에 2024_baby_varnet , 2024_baby_unet 폴더 확인.


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

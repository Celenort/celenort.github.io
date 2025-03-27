---
layout: post
date: 2024-07-06
title: "[Archive] vessl 시행착오 기록"
categories: [FASTMRI, ]
media_subpath: /assets/img/2024-07-06-[Archive]-vessl-시행착오-기록.md

description:  
pin: false
---


### 개요


24년도 FASTMRI 기준 vessl 설정법 정리.


원래 영상이 올라오는데 그거 기다리기 싫어서 삽질했었음


### 방법

1. Workspace create 하고
2. ngc pytorch 최신버전 2.4.0-cuda 12.4 로 올리고
3. max runtime 9999hr 설정.

on premise mount를 해야하는데 서버쪽 리눅스 디렉토리를 안알려줘서 결국 가장 하위인 /home으로 해봤음.


결국 이게 도커 같은거라서, 


/Data 


/home


을 하게 되면 서버측 컴퓨터의 /home 디렉토리 전체를 내 컴퓨터 /Data 디렉토리에 마운팅한다는거임. 쉽게 말하면 포탈뚫는거임


근데 Read only가 설정되어 있어 당연히 데이터는 읽기만 가능함.


그렇게 /Data에 드가보니 /student/fastmri-2024-data에 익숙한 3개의 디렉토리 (leaderboard, val, test) 발견 


아 그러면 /home/student/fastmri-2024-data 입력을 의도했구나


워크스페이스 삭제 후 위 디렉토리로 마운트 해서 열었음


이제 앵간한일없으면 (초기화할 일이 안생긴다면) 건들일없을듯


http://147.46.92.221:31934/?token=fJczEEdw0Gdih4E3KFocJjVieg2BalhN


그다음에 한짓 :


root dir에서


 git clone https://github.com/LISTatSNU/FastMRI_challenge.git


cd FastMRI_challenge


git checkout 2024_baby_varnet


pip3 install numpy 


pip3 install h5py 


pip3 install scikit-image


python3 train.py


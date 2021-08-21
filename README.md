# Ajou-Univ-coronic-travel-path-

<h3>아주대학교 교내 확진자 발생 현황 및 교내 이동 경로를 쉽고 직관적으로 볼 수 있도록 하는 웹사이트 개발 프로젝트입니다.</h3>

https://wkazxf.github.io/Ajou-Univ-coronic-travel-path-/
<br><br>
<h4>Description></h4>


![image](https://user-images.githubusercontent.com/84431962/130308606-73989357-80bb-44b8-9867-bc9cd5ace276.png)

-코로나 학교 대응 안내, 아주대학교 로고, COVID19(질병관리청) 클릭 시 배너처럼 각 링크로 이동할 수 있게끔 a태그를 활용.

-아주대학교 로고는 마땅치 않아서 로고와 폰트를 따로 떠와서 1개의 logo container에다가 두 가지 이미지를 넣은 후 하나의 container를 head.container의 요소로 구분.

-media query는 inner class를 제작한 후 원하는 요소들은 전부 inner class를 상속시키는 방법을 활용, 980px로 만들어서 모바일 기준 해상도에도 잘 나오게끔 설정.

<br>

![image](https://user-images.githubusercontent.com/84431962/130308609-14b518e5-b8fd-4744-a17d-c91cf29c0594.png)

-코로나 확진자 이동 경로 조회 시 날짜를 select box를 사용해서 원하는 날짜를 입력할 수 있도록 설정. 차후 js를 적용시켜 돋보기를 누르는 경우 그에 맞춰서 원하는 날짜가 조회될 수 있도록 만들기.

-지도의 출처;네이버지도
 
 <br><br>
 
<h4>Feedback></h4>


2021.08.21) 
-CSS와 HTML만을 사용해서 우선적인 Layout만 따놓은 상태. JS를 통해서 지도 내부에서 원하는 시간을 설정하는 경우 그에 맞춰서 확진자 이동 경로가 조회되는 것 구현하기.

-현재 모바일에서 "데스크탑으로 보기" 를 사용하지 않는 경우 글자가 전부 깨지는 상황. 추후 반응형에 대해 조금 더 공부하고 그 부분도 맞춰볼 것.

-나중에 서버를 공부하게 된다면 독자적인 도메인을 만들어서 독자적인 도메인에다가 서비스를 직접 해보고, 서비스 함에 있어서 불편한 점들을 찾아볼 것.

-현재 style.css의 각 클래스 이름이 조금 통일되지 않은 느낌이 적잖게 있음. 코드의 가시성을 위해서 이 부분도 나중에 수정할 것.

-현재 우측 상단의 COVID19(질병관리청) 배너만 클릭 시 blank 가 설정되어 있지 않음. 이 부분도 차후에 수정할 것.
 
 <br><br>
 
<h4>Contact></h4>

아주대학교 미디어학과 이동환 wkazxf@ajou.ac.kr 

아주대학교 미디어학과 김규래 kamgyul123@ajou.ac.kr

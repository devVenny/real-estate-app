<h1 align="center">집보러가자<img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="48px"></h1>

<center>
    <img src="https://user-images.githubusercontent.com/78582073/156260999-833035f1-2114-4ff5-84b1-e3e169d40cc9.png" alt="real-estate" style="zoom:76%;" align="center"/>
</center>

> 부동산 매물 조회 서비스(개인프로젝트)

### 🏠 [Github](https://github.com/devVenny/real-estate-app)

<br>

## ✨ Description

---

```sh
전국의 부동산 매물들의 정보를 확인할 수 있는 웹앱 서비스
```

## :pushpin: Project Goal

---

```sh
공공데이터 포털에서 개인프로젝트로 쓸만한 재밌는 데이터를 찾아보다가
최근에 집을 옮길 계획 때문에 '직방'을 자주 방문했었던게 떠올랐습니다.
그래서 직접 부동산 매물 정보를 알려주는 사이트를 만들어보면 재밌을 것 같았습니다
지도 오픈 API와 공공데이터 오픈 API를 동시에 사용해 볼 수 있고,
vue를 이용해 SPA를 만드는 방법을 능동적으로 학습해볼 수 있는 좋은 시도가 될 것이라
생각하여 이 프로젝트를 만들어 보기로 결심했습니다.
```

## :mag: Framing

---

![스크린샷 2022-03-07 오전 12 26 11](https://user-images.githubusercontent.com/78582073/156929771-1b1b2687-8cc7-4005-8271-9c42a53e8c48.png)

Detail Framing

![스크린샷 2022-03-07 오전 12 28 59](https://user-images.githubusercontent.com/78582073/156929878-56d03966-c888-46d6-812f-4ac9bd7a6ab3.png)

Framing

## :mag: Overview

---

1. 유저 로그인 페이지 (User Login Page) (카카오 로그인)

2. 홈 페이지 (Home Page)

지역명으로 해당 지역의 매물 검색, 부동산 뉴스 & 공지확인, 이벤트 배너

3. 지도 페이지 (Map Page)

## :wrench: Tech Stack

- Frontend: Vue.js, ejs
- Backend: Node.js

## :앞으로 구현 할 기능

- Boarding 화면

  - [] 카카오 로그인
  - [] 로그인 실패 시 회원가입 페이지로 이동
  - [] 회원가입 시 로그인 페이지로 이동
  - [] 로그인 시 홈 페이지로 이동

- Home 화면

  - [] 배너창
  - [] 뉴스 컨테이너
  - [] 공지 컨테이너
  - [] Footer 내용 수정
  - [] 로그아웃 버튼

- Map 화면

  - [] 모든 매물의 위치 marker로 표시하기(네비를 통해 들어왔을 떄)
  - [] 해당 지역으로 지도를 맞추기(검색을 통해 들어왔을 때)
  - [O] 줌 버튼
  - [] sidebar에 부동산 데이터 전달하여 UI 그리기
  - [] 인풋 버튼

## API

- [국토교통부_아파트매매 실거래자료] https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15058747
- [카카오 지도 API]
- [카카오 로그인 API]

# 🛒 **QR 오더 및 POS 시스템**  

![프리오더](https://github.com/user-attachments/assets/3c76453a-77bb-4d89-ad5e-8a9339c8d042)  

---

## 📋 **프로젝트 소개**  

- **주제 및 선정 배경:**  
  QR 주문은 사용자가 더 편리하게 주문하고 매장이 효율적으로 운영될 수 있도록 도와주는 기술입니다.  
  빠르게 변화하는 소비 트렌드에 맞춰 실질적으로 활용 가능한 시스템을 구현하고자 이 주제를 선정하게 되었습니다.  

- **목적:**  
  QR 주문을 통해 손님이 편리하게 주문하고 매장을 더 쉽게 관리할 수 있도록 만들고자 하였습니다.  
  간단하면서도 실용적인 시스템으로 모두가 만족할 수 있는 서비스를 제공하려는 의도를 담아 기획하게 되었습니다.  

- **핵심 기능:**  
  FreeOrder의 핵심 기능은 QR 코드 기반의 셀프 주문과 POS에서의 실시간 메뉴 업데이트 및 주문 접수 알림입니다.  

---

## ✨ **주요 기능**  

### **1. QR 오더 시스템**  
- QR 코드를 스캔하여 메뉴 주문 가능  
- 주문 정보 확인 및 실시간 상태 업데이트  
- 사용자 친화적인 인터페이스 제공  
- 결제 기능  

### **2. POS 시스템**  
- 매장 내 주문 및 결제 관리  
- 판매 데이터 조회 및 통계 제공  
- 관리자 페이지를 통한 매장 운영 지원  
- 주문 내역 관리  
- 매출 통계 확인  

---

## 🛠️ **기술 스택**  

- **Backend**:  
  Java, Spring Boot, Spring MVC, Spring Security, RESTful API

- **Frontend**:  
  HTML, CSS, JavaScript, React

- **Database**:  
  MySQL  

- **Real-Time Communication**:  
  WebSocket  

- **Cloud Deployment**:  
  AWS  

- **Version Control**:  
  Git, GitHub  

---

## 🎥 **프로젝트 발표 영상**  

[**발표 영상 링크**](https://www.youtube.com/watch?v=u6YvGbuR9Qc&list=PL4C2AmBC9jOZZEOwZ67P_Nb_WoQ1JpZ6G&index=5)  

---

## 🎫 **ERD**  
![ERDpng](https://github.com/user-attachments/assets/014f64ea-ded6-4f36-bc5a-05ca7e99a80d)  

---

## 📑 **요구사항 정의서**  

QR 오더 및 POS 시스템 구현을 위한 요구사항 정의서입니다.
<details>
  <summary>💳 ** 요구사항 정의서**</summary>
  <img src="https://github.com/user-attachments/assets/277b19da-3471-482a-8ee4-f999f0eb0a95">
  <img src="https://github.com/user-attachments/assets/8f38f4c5-ed26-4f78-b658-81057ffbc387">
</details>

---

## 📂 **기능 정의서**  

시스템의 세부 기능과 역할을 명시한 문서입니다.  
각 시스템별 주요 기능과 세부 사항은 아래에서 확인할 수 있습니다.

### 📱 **QR 기능 정의서**  
QR 코드를 활용한 주문 및 관리 시스템의 세부 기능입니다.  

<details>
  <summary>🖼️ **QR 기능 주요 기능 (클릭하여 자세히 보기)**</summary>
  
  **QR 기능 주요 항목:**  

  - **주문 접수**: QR 코드 스캔 시 사용자가 메뉴를 확인하고 주문할 수 있도록 설계.  
  
  - **사용자 맞춤형 서비스**: 사용자 데이터 기반으로 이벤트 제공. 
  
  - **관리 기능**: QR 코드를 통한 주문 상태 관리 및 알림 전송.
  <br>
  <img src="https://github.com/user-attachments/assets/9873c293-84f0-4282-98b8-adfb9185b431"><br>
  <img src="https://github.com/user-attachments/assets/1089205a-d576-4217-88ee-a41c595e2f3f">
</details>

### 💳 **POS 기능 정의서**  
매장에서의 결제 및 데이터 관리 시스템의 세부 기능입니다.  

<details>
  <summary>🖼️ **POS 기능 주요 기능 (클릭하여 자세히 보기)**</summary>

  **POS 기능 주요 항목:**  

  - **결제 처리**: 다양한 결제 방식(카드, 현금, 간편 결제) 지원 및 영수증 발행.  

  - **데이터 통계**: 일별/월별 매출 통계 자동 생성 및 관리자 페이지 제공.  

  - **POS 관리**: 상품, 카테고리, 옵션 등 CRUD 기능.
  <br>
  <img src="https://github.com/user-attachments/assets/6289956a-9755-4953-b93c-efac3aa9640d"><br>
  <img src="https://github.com/user-attachments/assets/cc6b507e-f591-4f2a-ab41-15390e3d4c75"><br>
  <img src="https://github.com/user-attachments/assets/fb7e4f28-c20f-4f36-9fe4-d5bd7526c14d"><br>
  <img src="https://github.com/user-attachments/assets/fe05763e-c9d7-413c-bb2a-4ff94ba44090">
</details>

---

## 📊 **테이블 정의서**  


시스템에서 사용하는 주요 데이터베이스 테이블의 구조와 역할을 정의합니다.  

<details>
  
  <summary>📜 **테이블 정의서:**</summary>
  <br>
  <img src="https://github.com/user-attachments/assets/f1deb7f4-281c-4a4f-9ce9-a9dc31a9388f"><br>
  <img src="https://github.com/user-attachments/assets/522a9e22-ffba-4a6e-a36f-63ad388de160"><br>
  <img src="https://github.com/user-attachments/assets/57be1195-33bc-4802-a2b5-47b87aa0fe43"><br>
  <img src="https://github.com/user-attachments/assets/707e2caa-15e3-401d-a21c-23ac1c968eec"><br>
  <img src="https://github.com/user-attachments/assets/526c3eff-f17e-4bf9-b654-2111f1b96ac3"><br>
  <img src="https://github.com/user-attachments/assets/6cb115fa-5e70-4eef-be10-df54a945be60"><br>
  <img src="https://github.com/user-attachments/assets/29f9ee54-b00c-4c93-bdcc-c2e44814723b"><br>
  <img src="https://github.com/user-attachments/assets/b986a386-6fda-4f47-b0d6-92a8703efc9f"><br>
  <img src="https://github.com/user-attachments/assets/9788850e-407e-4449-bd29-55601e98dfe1"><br>
  <img src="https://github.com/user-attachments/assets/02ec3bab-b9e4-4946-9329-ed4ea8d7c4df"><br>
  <img src="https://github.com/user-attachments/assets/ae619415-65fd-48c3-a211-a8e208908559"><br>
  <img src="https://github.com/user-attachments/assets/74c1ca14-b2cc-4b60-b53e-7aa78799ba1b"><br>
  <img src="https://github.com/user-attachments/assets/aa39b95f-6890-46d4-baae-9ea8cd471412"><br>
  <img src="https://github.com/user-attachments/assets/a5900ba5-8a9d-4ba4-8629-53aa82c944c9"><br>
  <img src="https://github.com/user-attachments/assets/c788d3a8-2a9a-4938-a19a-54c6f9120802"><br>
  <img src="https://github.com/user-attachments/assets/a6c6892a-4ff3-4a1d-922f-a3bc9feb71cc"><br>
  <img src="https://github.com/user-attachments/assets/f4a4dc4d-32d4-461b-884c-4ec0f815013a"><br>
  <img src="https://github.com/user-attachments/assets/0ff5d7fc-a6bb-4513-b99f-4f63341cf265">
</details>

---

## 👥 **팀 구성 및 역할**  

| **사진**   | **이름**   | **역할 및 담당**                                  |  
|------------|------------|---------------------------------------------------|  
| <img src="https://github.com/user-attachments/assets/0ceb2ae2-60fe-4981-ba3f-29b97eae344f" width="100" height="130"> | **김동진** | **프로젝트 매니저** <br> 프로젝트 진행 및 관리 <br> 팀 커뮤니케이션 조율 |
| <img src="https://github.com/user-attachments/assets/e10c684e-280c-4e98-a979-be0f633bbcb7" width="100" height="130"> | **배순영** | **Spring Boot 기반 Backend 및 데이터베이스 설계** <br> 서버 설계 및 DB 구조 설계 <br> API 설계 및 구현 |
| <img src="https://github.com/user-attachments/assets/272dd6c9-8e26-4660-b671-dc0ac65223b7" width="100" height="130"> | **이동현** | **React 기반 Frontend 개발 및 UI/UX 디자인** <br> 화면 설계 및 구현 <br> 사용자 경험 최적화 |
| <img src="https://github.com/user-attachments/assets/19d2c56a-b293-4e97-9dbc-cb68a0e828ab" width="100" height="130"> | **유지현** | **WebSocket 기반 실시간 통신 및 결제 기능 구현** <br> 실시간 통신 시스템 구현 <br> 결제 시스템 설계 및 구현 |
| <img src="https://github.com/user-attachments/assets/a7365c3a-5eb4-40aa-880c-448f90029578" width="100" height="130"> | **박호영** | **AWS 클라우드 배포 및 관리자 페이지 설계** <br> 클라우드 배포 환경 설정 <br> 관리자 페이지 UI/UX 설계 |

---


## **개발 환경 및 장비**  
- **개발 툴:** VS Code  
- **협업 도구:** Notion, Figma, GitHub

---

## 📈 **수행 결과**  

### **1. QR (사용자)**  
- QR 코드를 통해 빠르고 간편하게 주문 가능  
- 주문 상태를 실시간으로 확인 가능
<details>
  <summary>🎬 **QR 수행 결과**</summary>
  <br>
  <img src="https://github.com/user-attachments/assets/0b47af85-5ae0-4c24-a2a9-7fb554babc5b"><br>
  <img src="https://github.com/user-attachments/assets/3c9eb244-1065-48bf-bee7-b106fe757ec1"><br>
  <img src="https://github.com/user-attachments/assets/4f65dd44-549e-4585-a483-39f3e786f5f9"><br>
  <img src="https://github.com/user-attachments/assets/a0cc5e5f-e935-4161-97b8-2f2232d60a61"><br>
  <img src="https://github.com/user-attachments/assets/fa63af0d-b050-4852-9cd1-373c3e80a430"><br>
  <img src="https://github.com/user-attachments/assets/c772a6af-38d0-4bbb-bd2d-661f862161e4"><br>
  <img src="https://github.com/user-attachments/assets/6888776c-28d0-4569-9a47-dfc7d204625d"><br>
  <img src="https://github.com/user-attachments/assets/14f69958-2c31-4fd2-acb2-768ef0a88b28">
</details>

### **2. POS (관리자)**  
- 매장 내 모든 주문을 실시간으로 관리  
- 판매 데이터 통계 및 매출 보고서 제공  
<details>
  <summary>🎬 **POS 수행 결과**</summary>
  <br>
  <img src="https://github.com/user-attachments/assets/f3317e43-a477-4e09-8a5f-17296feecdc1"><br>
  <img src="https://github.com/user-attachments/assets/2e4cdaae-6f1b-4a2a-98b9-499f692b723c"><br>
  <img src="https://github.com/user-attachments/assets/eb5d5910-4526-44a3-b725-d4548d06324e"><br>
  <img src="https://github.com/user-attachments/assets/29477402-766b-4bec-b17b-81e84fd68bcf"><br>
  <img src="https://github.com/user-attachments/assets/85d4e0dd-b2af-4fd7-92de-08b562ebb244"><br>
  <img src="https://github.com/user-attachments/assets/23d370f6-2824-4dd7-b00e-feab09e7d8e0"><br>
  <img src="https://github.com/user-attachments/assets/1d099233-3a77-467a-a12f-60e37372b2db"><br>
  <img src="https://github.com/user-attachments/assets/ac714135-225e-4cbf-bb9c-60d2537fddff"><br>
  <img src="https://github.com/user-attachments/assets/287a3d53-2276-4c2b-97d4-2bb342bacee5"><br>
  <img src="https://github.com/user-attachments/assets/4121fb7d-d4d7-4ae2-b547-6837ef0a3bfe"><br>
  <img src="https://github.com/user-attachments/assets/0d5b59c7-be63-4a75-8d4c-cfd04d7f7f8c"><br>
  <img src="https://github.com/user-attachments/assets/81a68820-85c1-4f47-958f-3c4d7b3af40a"><br>
  <img src="https://github.com/user-attachments/assets/53c0f1e9-e737-4249-849d-3b3ab672f12a"><br>
  <img src="https://github.com/user-attachments/assets/e983a4e9-9e70-4c60-abd6-f4d85c025d65"><br>
  <img src="https://github.com/user-attachments/assets/48999561-78f6-4ed4-a04f-2dbfd56ac3e3"><br>
  <img src="https://github.com/user-attachments/assets/bd41a33a-9c80-4e18-bb36-0656f5b5e397"><br>
  <img src="https://github.com/user-attachments/assets/86d59110-7491-432b-9bb7-724ac490f2f7"><br>
  <img src="https://github.com/user-attachments/assets/aa1869e0-c84a-44c1-b14e-45aa2c90b39e"><br>
  <img src="https://github.com/user-attachments/assets/c71b7a92-3c2a-4941-9293-336dc29d0921"><br>
  <img src="https://github.com/user-attachments/assets/ae7dfc17-0d94-4c03-8fe1-d94667f0656a"><br>
  <img src="https://github.com/user-attachments/assets/1eec961f-60da-422e-8e24-db421c8e044e">
</details>

---

## 📝 **평가 및 소감**  

### **종합 평가**  
이번 프로젝트를 통해 React의 컴포넌트 기반 설계와 상태 관리의 중요성을 깊이 이해하고, 비동기 처리 및 UI 구현 능력을 향상시켰습니다. 
짧은 시간동안 부족했던 부분을 학습과 실습으로 보완하며 기술적 자신감과 성장의 발판을 마련한 값진 경험이었습니다.

## 📝 **개별 평가**  
### **김동진:**
리액트의 강점을 알게된 시간이였고, 웹소켓 부분을 리액트로 변환하면서 많은 이슈가 있었는데 대부분 라이브러리의 버전이 바뀌면서 사용법이 바뀐부분이였습니다. 
라이브러리 활용법에 대해 많은 공부가 되었고 사용하는 언어와 라이브러리들의 버전 관리가 중요하다는걸 깨달았습니다.
### **배순영:**
이번 프로젝트에서 저는 기존 MVC를 RESTful API와 React로 전환하며 클라이언트-서버 간 데이터 흐름을 최적화하는 데 집중했습니다. 
React 프로젝트를 진행하며 상태관리를 효율적으로 구현하고, 비동기 데이터 처리를 안정적으로 처리했습니다. 
또한, RESTful API를 재설계하여 구조를 직관적으로 개선하고 UI 컴포넌트를 향상시켰습니다. 
프로젝트를 통해 React의 컴포넌트 설계와 상태 관리의 중요성을 이해했습니다.
### **이동현:**
이번 프로젝트에서는 기존 Thymleaf를 제거하고 React를 도입하면서 컴포넌트 기반 설계의 중요성을 깊이 체감할 수 있었습니다. 이를 통해 React가 제공하는 효율성과 유연함을 더욱 잘 이해하게 되었습니다.
다만, 컴포넌트 간 상태 전달과 최적화 측면에서 미흡한 부분이 있었고, 이를 보완하기 위해 관련 자료를 탐구하고 실습을 거듭하며 더 나은 방식을 찾아가고자 노력했습니다.
프로젝트를 성공적으로 마무리하며 큰 성취감을 느낄 수 있었고, 이번 경험이 앞으로의 성장에 귀중한 밑거름이 될 것이라고 확신합니다. 앞으로도 다양한 프로젝트를 통해 실력을 쌓고, 더 나은 결과물을 만들어내기 위해 꾸준히 노력하겠습니다.
### **유지현:**
이번 프로젝트를 통해 컴포넌트 기반 아키텍처인 React의 활용을 이해할 수 있는 계기가 되었습니다.
React의 Hooks를 활용해 promotion과 notice의 등록, 조회, 수정, 삭제 기능을 구현했으며, 조건부 렌더링을 적용해 상황에 따라 적합한 조회 정보를 동적으로 출력하였습니다. 이를 통해 React의 컴포넌트 구조와 상태 관리의 효율성을 실무에 적용할 수 있는 능력을 키울 수 있었습니다.
### **박호영:**
이번 프로젝트를 통해 React를 활용한 컴포넌트 기반 설계와 상태 관리의 중요성을 이해하였고, 생명주기 메서드를 활용한 동적인 UI 구현 경험을 쌓았습니다.
또한, React로 비동기 처리와 드래그 앤 드롭 기능을 직접 구현하면서 기술적으로 한 단계 성장했으며, 프론트엔드 개발에 대한 자신감도 크게 향상되었습니다.


---

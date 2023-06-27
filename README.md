# [원티드] 6월 프론트엔드 인턴십 사전과제

👉 배포 : [사이트로 바로가기](https://wanted-pre-onboarding-frontend-gamangee.vercel.app/)

### 1. 지원자 : 장문정

### 2. 프로젝트 실행 방법

```
// 1. 저장소를 복제합니다.
$ git clone https://github.com/gamangee/wanted-pre-onboarding-frontend.git

// 2. root 경로에 .env 파일 생성하고 아래 코드 추가합니다.
$ REACT_APP_API_URL=https://www.pre-onboarding-selection-task.shop

// 3. 필요한 종속성을 설치합니다.
$ npm install

// 4. 프로젝트를 실행시킵니다.
$ npm start
```

### 3. 프로젝트 구조

📦src
┣ 📂context
┃ ┣ 📜authContext.ts
┃ ┗ 📜authProvider.tsx
┣ 📂pages
┃ ┣ 📂auth
┃ ┃ ┣ 📜SignIn.tsx
┃ ┃ ┗ 📜SignUp.tsx
┃ ┣ 📂todos
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📜CreateTodo.tsx
┃ ┃ ┃ ┣ 📜TodoItem.tsx
┃ ┃ ┃ ┗ 📜TodoList.tsx
┃ ┃ ┗ 📜Todo.tsx
┃ ┣ 📜Home.tsx
┃ ┗ 📜NotFound.tsx
┣ 📂service
┃ ┣ 📜api.ts
┃ ┣ 📜authAPI.ts
┃ ┗ 📜todoAPI.ts
┣ 📂types
┃ ┣ 📜authType.tsx
┃ ┗ 📜todoType.tsx
┣ 📜App.tsx
┣ 📜index.css
┗ 📜index.tsx

### 4. 데모 영상

![미리보기](./%EC%9B%90%ED%8B%B0%EB%93%9C_%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9_%EC%9D%B8%ED%84%B4%EC%8B%AD_%EC%82%AC%EC%A0%84%EA%B3%BC%EC%A0%9C_%EC%9E%A5%EB%AC%B8%EC%A0%95.gif)

### 5. 성능 최적화

![lighthouse 성능 측정](./lighthouse_%EC%84%B1%EB%8A%A5-%EC%B8%A1%EC%A0%95-%EA%B2%B0%EA%B3%BC.png)

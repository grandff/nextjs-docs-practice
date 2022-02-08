# Next js 공식 문서 기반으로 정리
## 나와라 복습무새 : 날씨 or 주식 정보 가져와서 보여주는 페이지
- 메인화면 : 전체 정보 보여주기
- 검색 : 특정 종목 검색
- 상세보기 : 해당 종목에 대한 상세 내용
- 커뮤니티 : 게시판

## install
- npx create-next-app@latest

## Navigate Between Pages
### Pages 폴더 안에서 file name 기반으로 route 실행이 됨
	- pages/index.js -> / route
	- pages/posts/first-posts.js -> /posts/first-post
### page간 이동하려면 a tag를 next/link로 감싸는 형태로 해야함
	- {' '}는 multi line을 나눠주는 빈 공간을 넣는 next만의 문법 .. ?
	- a href 를 안쓰고 Link href 를 쓴다음 안에 a를 넣어주는 형식(a에는 href가 안들어가고 a 태그만 들어감)
### Link를 사용해서 client-side navigation 도 가능함
	- client-side navigation은 javascript를 이용해서 page 이동이 일어나는 거임
	- 브라우저 통해서 하는게 아니라
	- 이게 더 빠르다고 함
#### 이걸 확인해보려면?
	- 개발자 도구 열어서 배경을 아무색이나 줘보기
	- 그리고 link로 왔다갔다 해보기
	- 바꾼 배경색이 원래대로 안가고 지속되고 있음
	- 즉, 브라우저가 모든 페이지를 로드하고 있지 않고, client-side navigation이 동작하고 있다는 사실 띠용~
#### pages 폴더 안에 파일이 만들어지면 Link를 통해 자동 route를 할 수 있음
	- 만약 내부가 아닌 외부 페이지로 넘어갈거면 a tag 만 사용(일반적은 a tag로)
	- attribute를 주려면 link가 아닌 a tag로 줘야함
	- 더 알고 싶으면? link reference를 보거나 routing documentaion 확인
	
## Assets, Metadata, and CSS
### 0. !!! tailwin css 적용도 해보기 !!!
### 1. 이미지 파일을 추가하려면 ?
- public 디렉토리에 images 폴더 생성
- 해당 디렉토리에 이미지 파일저장
### 2. next에서 제공해는 image component를 사용함
- 대충 일반 image tag 보다 더 좋다는 말을 하고 있음
### 3. metadata 다루기(title, meta tag 등)
#### 3-1. next/head 모듈을 써서 추가하면 됨 (posts/first-post 참조)
- https://nextjs.org/docs/api-reference/next/head
#### 3-2. html tag를 커스터마이징 하려면 _documents.js 파일을 추가하면 됨
- https://nextjs.org/docs/advanced-features/custom-document
### 4. Third-party javascript
#### 4-1. 동일하게 head 태그 안에 script 태그 추가해서 사용해도 됨
#### 4-2. next/script 모듈 사용 가능(posts/first-post 참조
- https://nextjs.org/docs/basic-features/script
### 5. CSS Styling 
#### tailwind https://tailwindcss.com/docs/guides/nextjs
### 6. Layout Component
### 7. Global Styles 
#### global css 파일을 부르려면 pages/_app.js 를 만들어야함
- app.js의 App은 Top level Component임
- global에 적용한게 모든 페이지에 적용됨
### 8. Polishing Layout
- 레이아웃 다듬기 위한 layout js와 css 수정
- 새로 추가한 css 들을 layout js에 추가하고 코딩작업
#### priority attribute를 사용했음 Image 태그에서
- 로드 시 우선순위를 높게 잡아서 이미지 먼저 나오게 하는듯
#### home 여부에 따라 컴포넌트를 다르게 처리함
#### 위에서 수정한 layout 다음에 이제 index js에서 내용 추가해보기
### 9. Styling Tips
#### postcss config js 이거 좋은듯?
	- yarn add postcss-preset-env postcss-flexbugs-fixes
- postcss config js 설정 추가
- 사용하지 않는 css 제거를 위해 tailwind config js 에 purge prop 사용을 권장함
- postcss에 대해 더 배우고 싶다면? 
- https://nextjs.org/docs/advanced-features/customizing-postcss-config
	
## Pre-rendering and Data Fetching
### 1. Pre-rendering
- 아무튼 prerendering으로 성능이 더 좋다 이말
- 브라우저에서 자바스크립트 기능을 껐을때 nextjs는 불러와지지만 reactjs는 안됨
- pre rendering 차이임
### 2. Two Forms of Pre-rendering
### 2-1. Static Generation과 Server-side Rendering 두 방식의 Pre-rendering을 제공하고 있음
- 
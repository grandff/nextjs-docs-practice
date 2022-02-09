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
- Static Generation은 build 할 때 한번 생성. 각 요청마다 빌드한 html 파일만 보냄
- Server-side Rendering 은 리퀘스트 할때마다 서버에서 생성해서 보여줌
#### 대부분의 페이지는 static 으로 그외는 server side rendering 으로 처리하는게 좋음
#### 잘  배분해서 해야함
### 3. Static Generation with and without data 
#### static generation 이지만 외부 데이터를 가져와야하는 경우가 있다면 getStaticProps를 쓰면 됨
### 4. Blog Data
#### 테스트하기 위해 md 파일 생성 후 소스 복붙 (텍스트 데이터임)
#### 데이터를 어떻게 가져올 것이냐 ? md 파일을 자세히 보면 title하고 date가 있는데 이걸 키값으로 잡고 가져올거임.
- url을 unique한 seq로 설정함
### 5. Implement getStaticProps
#### 먼저 md 파일을 parsing 하기 위해 패키지 설치
- yarn add gray-matter
#### 최상위 디렉토리에 lib 이라는 폴더를 만들고 posts.js 생성
- 데이터를 가져올 수 있도록 코딩
#### index js 파일 내부에서 posts.js 를 호출하도록 코드 작성
- getStaticProps function 사용
- 이걸 통해서 데이터 가져오는 함수를 부르면 매개변수로 받을 수 있음
### 6. getStaticProps Details
#### 만약 외부에서 data를 받아온다면 아까 만든 posts.js 에서
	- const res = await fetch('...')
	- return res.json()
#### 내부 데이터베이스에서 가져온다면 쿼리를 posts.js 에 이렇게
	- import someDatabaseSDK from "someDatabaseSDK"
	 const databaseClient = someDatabaseSDK.createClient(...)
	 export async function getSortedPostsData(){
	 ...
		return databaseClient.query("SELECT ... ");
	}
#### development 단계에서 getStaticProps는 매 호출때마다 불러오지만 production 단계에서는 build 할때만 호출됨
#### fallback key를 활용해서 다르게 처리할 수 있다는 거 같음(이건 찾아봐야할듯)
### 7. Fetching Data at Request Time
#### request 때마다 데이터를 불러와야한다면 server-side rendering을 사용
- getServerSideProps 사용
#### swr 이라는 패키지가 있으니 참고할것 이게 좋다고 하는거 같은데
- https://swr.vercel.app/ko/examples/basic 


## Dynamic Routes
### 1. Page Path Depends on External Data
#### dynamic urls을 사용해서 데이터를 같이 넘길 수 있음
### 2. Implement getStaticPaths
#### pages/posts 디렉토리에 [id].js 파일 생성
- layout component 추가하기
#### first-post.js 파일 삭제하기
#### lib/posts.js 에서 getAllPostIds function을 하단에 추가
- posts 폴더에 있는 파일 목록을 리턴해줄거임
- !!! 여기서 중요한건 string array가 아니라 objects array라는 거임 (key - value 형태를 말하는거 같음)
#### [id].js 에 getStaticPaths 메서드 추가하기
### 3. Implement getStaticProps
#### id 값을 통해 data를 전달할거임
#### posts.js로 가서 getPostData 추가하기
- id를 key로 한 데이터를 보낼거임
#### [id].js 에서 postdata 항목 추가하기
#### url/posts/FILE_NAME.md 를 하면 해당 md 파일에 맞는 데이터가 나옴
#### [id].js의 동작을 다시 보자면...
1. URL/posts/FILE_NAME 호출
2. getStaticPaths 를 통해 id 목록 가져옴(파일이름)
3. getStaticProps 를 통해 해당 파일의 데이터 가져옴
4. Layout component 안에 데이터 출력
##### 좀 어렵네요...

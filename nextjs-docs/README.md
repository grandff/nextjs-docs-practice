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
### !!! tailwin css 적용도 해보기 !!!
### 이미지 파일을 추가하려면 ?
	- public 디렉토리에 images 폴더 생성
	- 해당 디렉토리에 이미지 파일저장
### next에서 제공해는 image component를 사용함
	- 대충 일반 image tag 보다 더 좋다는 말을 하고 있음
### metadata 다루기(title, meta tag 등)
#### next/head 모듈을 써서 추가하면 됨 (posts/first-post 참조)
	- https://nextjs.org/docs/api-reference/next/head
#### html tag를 커스터마이징 하려면 _documents.js 파일을 추가하면 됨
	- https://nextjs.org/docs/advanced-features/custom-document
### Third-party javascript
#### 동일하게 head 태그 안에 script 태그 추가해서 사용해도 됨
#### next/script 모듈 사용 가능(posts/first-post 참조
	- https://nextjs.org/docs/basic-features/script

# 공부 일지

작성값 : 날짜, 커밋 A(날짜, 제목) - 커밋 B(날짜, 제목)

cherry-pick 으로 필요한 부분만 가져와서 운영 반영

## 2021.10.26

### HTML 짤때 유의해야할 점

return() 안에 HTML을 넣을 때, 태그 2개를 평행하게 적어넣을 수 없다.
ex.
return(
    <div></div>
    <div></div>
)
이렇게는 안된다.

return(
  <div>
    <div></div>
    <div></div>
  </div>
)
이런식으로 해야한다. return() 안에는 태그 하나만 들어갈 수 있다.

### 복잡한 HTML들을 한 단어로 치환할 수 있는 Component 문법

Component : 리액트는 긴 HTML을 한 단어로 깔끔하게 치환햇서 넣을 수 있는 문법을 제공한다.
Component 이름 지을 땐 영어 대문자로 보통 시작한다.
Component를 이용하면 함수 만들듯, 변수 만들듯, HTML을 깔끔하게 한 단어로 치환해서 원하는 곳에 꽂아넣을 수 있다.

사이트에 반복해서 출현하는 HTML 덩어리들은 Component로 만들면 좋다
내용이 매우 자주 변경될 것 같은 HTML 부분을 잘라서 Component로 만들면 좋다
다른 페이지를 만들고 싶다면 그페이지의 HTML 내용을 하나의 컴포넌트로 만들면 좋다

함수문법을 긴 코드 축약하고, 다른곳에서 코드 재사용하고, 기능별로 나눌때 사용하듯이 사용하면 좋다.

Component 단점
HTML 깔끔하게 쓰려고 함수 자체를 많이 만들면 그것 만으로도 관리가 힘들다.
<Modal>이라는 컴포넌트가 App(){} 안에 있는 state를 사용하고 싶을 때 그냥 바로 쓸 수 없다는 것.
props라는 문법을 이용해 state를 <Modal>까지 전해줘야 사용 가능하다.

모든 것을 Component로 쪼개지 말고 꼭 필요한 곳만 Component로 나눠서 사용해야 한다.


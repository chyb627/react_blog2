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

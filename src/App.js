import React, { useState } from 'react';
import './App.css'

function App(){
 
  let [글제목, 글제목변경] = useState( ['With You', '천호동 후토마끼, 스시공간', '리액트 공부'] );
  let [따봉, 따봉변경] = useState(0);

  // ---------- 하드 코딩 ----------
  // function 제목바꾸기() {
  //   글제목변경( ['함께', '스타벅스 카페', '스프링 공부'] )
  // }

  // ---------- 클린 코딩 ----------
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '함께';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 }</h3>
        <p>9월 12일</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>10월 24일</p>
        <hr/>
        <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
      </div>
    ... 기타 내용
    </div>
  )
}

export default App;




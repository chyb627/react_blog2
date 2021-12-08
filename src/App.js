import React, { useState } from 'react';
import './App.css'

function App(){
 
  let [글제목, 글제목Set] = useState( ['With You', '천호동 후토마끼, 스시공간', '리액트 공부', '리액트 네이티브 공부'] );
  let [따봉, 따봉Set] = useState(0);

  let [modal, modalSet] = useState(false);
  let [누른제목, 누른제목Set] = useState(0);

  let [입력값, 입력값Set] = useState('');

  // ---------- 하드 코딩 ----------
  // function 제목바꾸기() {
  //   글제목Set( ['함께', '스타벅스 카페', '스프링 공부'] )
  // }

  // ---------- 클린 코딩 ----------
  // 1. 일단 기존 state 카피본 만들고
  // 2. 카피본에 수정사항 반영하고
  // 3. 변경함수()에 집어넣기 (꼭외우기)
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '함께';
    글제목Set( newArray );
  }

  // for 반복문 사용방법
  function 반복된UI(){

    let 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>blog</div>
      </div>
      
      <button onClick={제목바꾸기}> state테스트용버튼</button>

      <div className="list">
        {/* 하드코딩 */}
        {/* <h3 onClick={()=>{ modal === false ? modalSet(true) : modalSet(false)}}>{ 글제목[1] }</h3>  */} 
        {/* 클린코딩 */}
        <h3 onClick={()=>{ modalSet(!modal)}}>{ 글제목[1] }</h3>
        <p>10월 24일</p>
        <hr/> 
      </div>


      {/* 
        1. 특정 변수나 함수를 중괄호 안에 넣어줄 수 있음 {변수 함수()} 
        2. JSX 중괄호 내에 for 반복문은 넣을 수 없음. map을 사용해야함 
      */}
      {
        글제목.map((i,숫자) => {
          return (
          <div className="list" key={숫자}>
          <h3 onClick={()=>{누른제목Set(숫자)}}>{ i }<span onClick={ ()=>{ 따봉Set(따봉 + 1) } } >👍</span> { 따봉 }</h3>
          <p>9월 12일</p>
          <hr/>
          </div>
          )
        })
      }


      {/* 
      props로 자식에게 state 전해주는방법 (App이 부모 Modal이 자식)
      1. <자식컴포넌트 작명={state명} /> 
      2. 자식컴포넌트에서 props 파라미터 입력 후 사용
      */}
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null
      }   


      {/* 버튼 누르면 글제목의 어레이에 맞게 인덱스를 주는 버튼 */}
      <button onClick={()=>{누른제목Set(0)}}> 1번버튼 </button>
      <button onClick={()=>{누른제목Set(1)}}> 2번버튼 </button>
      <button onClick={()=>{누른제목Set(2)}}> 3번버튼 </button>  


      {/* 반복문 함수 사용 */}
      {/* 
      {
        반복된UI()
      } 
      */}

      {/* 
      1. e.target.value = 현재 이벤트가 동작하는 곳의 값 
      2. 쌩자바스크립트 문법. .value는 그 HTML에 유저가 입력한 값을 출력해준다.
      */}
      {/* 
      <input onChange={ (e)=>{ 입력값Set(e.target.value) } } />
      {console.log('input에 입력한 값 : ', 입력값)} 
      */}


      {/* input창에 입력한값 state 활용해서 저장버튼 누르면 추가하는 기능 */}
      {/* 
      글 발행 기능 만들기
      1. 사용자가 입력한 글을 state로 저장해준다.
      2. 버튼을 누르면 입력한 글 state를 글제목 state에 추가해준다.
      */}
      <div className="publish">
        <input onChange={ (e)=>{ 입력값Set(e.target.value) } } />
        <button onClick={ ()=>{
          let arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);    // unshift란 array 맨앞에 자료를 추가해 달라는 것. 파라미터에 입력값을 넣었으므로 사용자가 입력한 값을 넣어달라는 말.
          글제목Set(arrayCopy)
        }}>저장</button>
      </div>
      
      <Profile />
    </div>
  );
}

// Component 만드는법
// 1. 함수 만들고 이름짓고
// 2. 축약을 원하는 HTML 넣고
// 3. 원하는 곳에서 <함수명 />

// Component 유의사항
// 1. 함수의 이름은 대문자로 시작
// 2. return() 안에 있는건 태그하나로 묶어야함 <div> 테그 여러개 나열 못하고 크게 하나로 묶어야함.

// Component로 만들면 좋은 것들
// 1. 반복출현하는 HTML 덩어리들
// 2. 자주 변경되는 HTML UI들
// 3. 다른 페이지 만들 때도 컴포넌트로 만듦

// Component 단점
// 1. state 쓸때 복잡해진다
// 상위 component에서 만든 state를 쓰려면 props 문법 이용해야한다.

function Modal(props){
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>  
    </div>
  )
}


// 예전 Component 문법
class Profile extends React.Component {
  constructor(){
    super();
    this.state = {name:'kim', age:30}
  }

  changeName(){
    this.setState({name:'park'})
  }

  render(){
    return(
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name}입니다.</p>
        <button onClick={ this.changeName.bind(this)}>이름 변경</button>
      </div>
    )
  }
}



export default App;




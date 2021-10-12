
import React, { useState } from 'react';
import './App.css';

function App() {


  let [글제목,글제목변경] = useState(['남자 코트추천', '여자 코트 추천','파이썬 독학']); 
  let [좋아요, 좋아요변경] = useState(0);
  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button>버튼</button>
      <div className = "list">
        <h3> { 글제목[0] } <span onClick = { () => {좋아요변경(좋아요+1)} }>👍</span> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

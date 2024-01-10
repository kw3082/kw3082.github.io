import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  let [글제목, 글제목변경] = useState(['남자코트추천', '하체운동종류', '저녁메뉴무엇?'])
  let [따봉, 따봉변수] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      
      <div className="list">
        <h4>{글제목[0]} <span onClick={() => {따봉변수(따봉+1)}}>🤞</span>{따봉}</h4>
        <p>1월 10일 발행 </p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>1월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>1월 10일 발행</p>
      </div>

      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

  )
}

export default App;

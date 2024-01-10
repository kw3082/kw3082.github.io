/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    let [글제목, 글제목변경] = useState(['남자코트추천', '하체운동종류', '저녁메뉴무엇?']);
    let [따봉, 따봉변수] = useState([0, 0, 0]);

    let [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>

            {글제목.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4
                            onClick={() => {
                                setModal(!modal);
                            }}
                        >
                            {글제목[i]}{' '}
                            <span
                                onClick={() => {
                                    let copy = [...따봉];
                                    copy[i]++;
                                    따봉변수(copy);
                                }}
                            >
                                🤞
                            </span>
                            {따봉[i]}
                        </h4>
                        <p>1월 10일 발행</p>
                    </div>
                );
            })}
            {modal == true ? <Modal 글제목={글제목}></Modal> : null}
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.글제목[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    );
}

export default App;

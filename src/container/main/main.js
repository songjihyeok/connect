import React, { useState, useEffect, useRef } from "react";
import "./main.scss";
import HourTimer from "../../components/hourTimer/hourTimer";
import YearTimer from "../../components/yearTimer/yearTimer";
import SortArray from "../../components/sortArray/sortArray";

const Main = (props) => {
  const [text, setText] = useState("");
  const [ascendArray, setAscendArray] = useState([]);
  const [declineArray, setDeclineArray] = useState([]);
  const [loading, setLoading] = useState(false)
  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let splited = text.split(", ");
    let ascend = [...splited];
    let decline = [...splited];

    for (let i = 0; i < ascend.length; i++) {
      for (let k = i + 1; k < ascend.length; k++) {
        let changek = parseInt(ascend[k]);
        let changei = parseInt(ascend[i]);
        if (changei > changek) {
          ascend.splice(i, 1, changek);
          ascend.splice(k, 1, changei);
        }
      }
    }

    for (let i = 0; i < decline.length; i++) {
      for (let k = i + 1; k < decline.length; k++) {
        let changek = parseInt(decline[k]);
        let changei = parseInt(decline[i]);
        if (changei < changek) {
          decline.splice(i, 1, changek);
          decline.splice(k, 1, changei);
        }
      }
    }

    setAscendArray(ascend);
    setDeclineArray(decline);

    setTimeout(()=>{
       setLoading(true)     
    },3000)
  };



  return (
    <div className="mainWrapper">
      <HourTimer></HourTimer>
      <input
        className="textInput"
        type="text"
        placeholder="Large text"
        onChange={inputHandler}
      />
      <button className="submitButton" onClick={submitHandler}>
        등록하기
      </button>
      <SortArray data={ascendArray}></SortArray>
      { loading? <SortArray data={declineArray}></SortArray> : null}
      <YearTimer></YearTimer>
    </div>
  );
};

export default Main;

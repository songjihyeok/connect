import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "moment/locale/ko";
import "./yearTimer.scss";
const YearTimer = (props) => {
  const [count, setCount] = useState(0);
  const savedCallback = useRef();
  let nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  let Date = nowTime.split(" ")[0]
  let Time = nowTime.split(" ")[1] 
  let [year, month, day] = [
    Date.split("-")[0],
    Date.split("-")[1],
    Date.split("-")[2]
  ];

  let [hour, minute, seconds] = [
    Time.split(":")[0],
    Time.split(":")[1],
    Time.split(":")[2]
  ];

  let yourString=  year + "년" + month + "월" +  day + "일" 
  let timeString = hour + "시" + minute + "분" + seconds + "초"

  const callback = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="yearTimeWapper">
      <p className="time">
        {props.includeYear?  yourString + " " + timeString: timeString  } 
      </p>
    </div>
  );
};

export default YearTimer;

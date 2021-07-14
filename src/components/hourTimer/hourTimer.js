import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "moment/locale/ko";
import "./hourTimer.scss";
const HourTimer = (props) => {
  const [count, setCount] = useState(0);
  const savedCallback = useRef();
  const nowTime = moment().format("HH:mm:ss");
  let [hour, minute, seconds] = [
    nowTime.split(":")[0],
    nowTime.split(":")[1],
    nowTime.split(":")[2],
  ];
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
    <div className="hourTimeWapper">
      <p className="time">
        {hour}시 {minute}분 {seconds}초
      </p>
    </div>
  );
};

export default HourTimer;

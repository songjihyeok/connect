import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "moment/locale/ko";
import "./sortArray.scss";
const sortArray = (props) => {
  return (
    <div className="sortArrayWapper">
      {props.data.map((element, index) => {
        return (
          <div key={index} className="element">
            {element}
            {index !== props.data.length - 1 ? ", " : ""}
          </div>
        );
      })}
    </div>
  );
};

export default sortArray;

import React from "react";
import "./time-block.scss";
import {TimePicker} from 'antd';
import {SelectArrow} from '../../svg';


let suffixIcon = <SelectArrow className="custom-time-picker__select-arrow"/>

const CustomTimePicker = (props) => {
  return (
    <div className={`${props.className} custom-time-picker`}>
      <span className="custom-input__text">{props.text}</span>
      <TimePicker
        format={props.format}
        placeholder={props.placeholder}
        suffixIcon= {suffixIcon}
      />
    </div>
  );
}

export default CustomTimePicker;

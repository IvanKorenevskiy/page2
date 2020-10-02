import React from "react";
import "./date-block.scss";
import {DatePicker , Space} from 'antd';
import {Today} from '../../svg';


let suffixIcon = <Today className="custom-date-picker__select-arrow"/>

const CustomDatePicker = (props) => {
  return (
    <div className={`${props.className} custom-date-picker`}>
      <span className="custom-input__text">{props.text}</span>
      <DatePicker
        placeholder={props.placeholder}
        suffixIcon={suffixIcon}
      />
    </div>
  );
}

export default CustomDatePicker;

import React from "react";
import "./date-block.scss";
import {DatePicker , Space} from 'antd';
import {Today} from '../../svg';


let suffixIcon = <Today className="castom-date-picker__select-arrow"/>

const CastomDatePicker = (props) => {
  return (
    <div className={`${props.className} castom-date-picker`}>
      <span className="castom-input__text">{props.text}</span>
      <DatePicker
        placeholder={props.placeholder}
        suffixIcon={suffixIcon}
      />
    </div>
  );
}

export default CastomDatePicker;

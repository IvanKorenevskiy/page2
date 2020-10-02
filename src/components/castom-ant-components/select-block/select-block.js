import React from "react";
import "./select-block.scss";
import {Select} from 'antd';
import {SelectArrow} from '../../svg';


let suffixIcon = <SelectArrow className="custom-select__select-arrow"/>

const CustomSelect = (props) => {
  return (
    <div className={`${props.className} custom-select`}>
      <span className="custom-select__text">{props.text}</span>
      <Select
        placeholder={props.placeholder}
        suffixIcon={suffixIcon}
      >
        <Option value="1">{props.value[0]}</Option>
        <Option value="2">{props.value[1]}</Option>
        <Option value="3">{props.value[2]}</Option>
      </Select>
    </div>
  );
}

export default CustomSelect;

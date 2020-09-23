import React from "react";
import "./select-block.scss";
import {Select} from 'antd';
import {SelectArrow} from '../../svg';


let suffixIcon = <SelectArrow className="castom-select__select-arrow"/>

const CastomSelect = (props) => {
  return (
    <div className={`${props.className} castom-select`}>
      <span className="castom-select__text">{props.text}</span>
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

export default CastomSelect;

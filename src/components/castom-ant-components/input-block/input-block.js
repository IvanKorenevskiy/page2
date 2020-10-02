import React from "react";
import "./input-block.scss";
import {Input} from 'antd';


const CustomInput = (props) => {
  return (
    <div className={`${props.className} custom-input`}>
      <span className="custom-input__text">{props.text}</span>
      <Input placeholder={props.placeholder}/>
    </div>
  );
}

export default CustomInput;

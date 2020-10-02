import React from "react";
import "./radio-button.scss";
import {Radio} from 'antd';


const CustomRadioButton = (props) => {
  return (
    <Radio value={props.value} className={`${props.className} custom-radio-button`}>
      {props.children}
    </Radio>
  );
}

export default CustomRadioButton;

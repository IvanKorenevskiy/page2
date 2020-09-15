import React from "react";
import "./radio-button.scss";
import {Radio} from 'antd';


const CastomRadioButton = (props) => {
  return (
    <Radio value={props.value} className={`${props.className} castom-radio-button`}>
      {props.children}
    </Radio>
  );
}

export default CastomRadioButton;

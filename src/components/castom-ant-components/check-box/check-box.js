import React from "react";
import "./check-box.scss";
import {Checkbox} from 'antd';

const CustomCheckBox = (props) => {
  return (
    <Checkbox className={`${props.className} custom-check-box`}>
      {props.children}
    </Checkbox>
  );
}

export default CustomCheckBox;

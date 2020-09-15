import React from "react";
import "./check-box.scss";
import {Checkbox} from 'antd';

const CastomCheckBox = (props) => {
  return (
    <Checkbox className={`${props.className} castom-check-box`}>
      {props.children}
    </Checkbox>
  );
}

export default CastomCheckBox;

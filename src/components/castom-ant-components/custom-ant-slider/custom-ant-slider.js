import React from "react";
import "./custom-ant-slider.scss";
import PropTipes from "prop-types";
import {Slider, Switch } from 'antd';


const CustomSlider = (props) => {
  return (
    <Slider
      className={`${props.className} custom-slider`}
      range
      tipFormatter={null}
      defaultValue={[0, 100]}
    />
  );
}


export default CustomSlider;

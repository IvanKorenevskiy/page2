import React from "react";
import "./castom-ant-slider.scss";
import PropTipes from "prop-types";
import {Slider, Switch } from 'antd';


const CastomSlider = (props) => {
  return (
    <Slider
      className={`${props.className} castom-slider`}
      range
      tipFormatter={null}
      defaultValue={[0, 100]}
    />
  );
}


export default CastomSlider;

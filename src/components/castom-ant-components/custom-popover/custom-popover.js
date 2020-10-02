import React from "react";
import "./custom-popover.scss";
import {Popover, Button} from 'antd';

const CustomPopover = (props) => {
  return (
    <Popover
      className={`${props.className} custom-popover`}
      placement="bottomRight"
      content={props.content}
      trigger="click">
      <Button>{props.children}</Button>
    </Popover>
  );
}

export default CustomPopover;

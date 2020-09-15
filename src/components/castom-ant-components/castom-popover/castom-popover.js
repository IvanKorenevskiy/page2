import React from "react";
import "./castom-popover.scss";
import {Popover, Button} from 'antd';

const CastomPopover = (props) => {
  return (
    <Popover
      className={`${props.className} castom-popover`}
      placement="bottomRight"
      content={props.content}
      trigger="click">
      <Button>{props.children}</Button>
    </Popover>
  );
}

export default CastomPopover;

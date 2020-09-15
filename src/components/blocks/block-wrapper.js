import React from "react";
import "./block-wrapper.scss";



const BlockWrapper = (props) => {
    return (
      <div className={`${props.className} block-wrapper`}>
        {props.children}
      </div>
    );

}


export default BlockWrapper;

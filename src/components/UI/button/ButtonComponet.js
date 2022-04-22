import React from "react";
import Button from "@atlaskit/button";
import "./btn.scss";

const ButtonComponet = (props) => {
    return (
        <div className='btn'>
            <Button style={{textTransform: "uppercase"}} className='btn'>{props.buttonName}</Button>
        </div>
    );
}

export default ButtonComponet;

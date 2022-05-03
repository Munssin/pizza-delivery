import React from "react";
import Button from "@atlaskit/button";
import "./btn.scss";

const ButtonComponet = ({onClick, buttonName, buttonType}) => {
    return (
        <div className='btn'>
            {/*{props.buttonType}*/}
            <Button onClick={onClick} className='btn' type={buttonType}>{buttonName}</Button>
        </div>
    );
}

export default ButtonComponet;

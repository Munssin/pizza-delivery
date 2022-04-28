import React from "react";
import Button from "@atlaskit/button";
import "./btn.scss";

const ButtonComponet = ({onClick, buttonName}) => {
    return (
        <div className='btn'>
            {/*{props.buttonType}*/}
            <Button style={{textTransform: "uppercase"}} onClick={onClick} className='btn'>{buttonName}</Button>
        </div>
    );
}

export default ButtonComponet;

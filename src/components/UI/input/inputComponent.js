import React from "react";
import Button from "@atlaskit/button";
import "./input.scss";

const InputComponet = ({inputType, inputName}) => {
    return (
        // <div className='btn'>
            <input className="input" name={inputName} type={inputType}/>

            // <Button style={{textTransform: "uppercase"}} onClick={onClick} className='btn'>{buttonName}</Button>
        // </div>
    );
}

export default InputComponet;

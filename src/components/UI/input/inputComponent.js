import React from "react";
import "./input.scss";

const InputComponet = ({inputType, inputName}) => {
    return (
            <input className="input" name={inputName} type={inputType}/>
    );
}

export default InputComponet;

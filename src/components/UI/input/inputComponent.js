import React from "react";
import "./input.scss";

const InputComponet = ({inputType, inputName, value, onChange}) => {
    return (
            <input className="input"
                   name={inputName}
                   type={inputType}
                   value={value}
                   onChange={onChange}
            />
    );
}

export default InputComponet;

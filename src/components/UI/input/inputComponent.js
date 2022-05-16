import React from "react";
import "./input.scss";

export const InputComponent = ({inputType, inputName, value, onChange}) => {
    return (
            <input className="input"
                   name={inputName}
                   type={inputType}
                   value={value}
                   onChange={onChange}
            />
    );
}

// export default InputComponet;

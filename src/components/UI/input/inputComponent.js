import React from "react";
import "./input.scss";

export const InputComponent = ({inputType, inputName, value, onChange}) => (
            <input className="input"
                   name={inputName}
                   type={inputType}
                   value={value}
                   onChange={onChange}
            />
);
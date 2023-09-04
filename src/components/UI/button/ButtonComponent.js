import React from "react";
import Button from "@atlaskit/button";
import "./btn.scss";

export const ButtonComponent = ({onClick, buttonName, buttonType}) => {
    return (
        <div className='btn'>
            <Button onClick={onClick} className='btn' type={buttonType}>{buttonName}</Button>
        </div>
    );
};
import React from "react";

export const DiscountCard = (props) => {
    const {img, listTitle} = props;
    return (
        <div className="discount-item">
                <img src={img} alt=""/>
                <ul className="discount-item__list">
                    <li>{listTitle}</li>
                </ul>

        </div>
    );
};
import React from "react";
import ButtonComponet from "./button/ButtonComponet";

const DiscountCard = (props) => {
    const {img, listTitle} = props;
    return (
        <div className="discount-item">
                <img src={img} alt=""/>
                <ul className="discount-item__list">
                    <li>{listTitle}</li>
                </ul>

        </div>
    );
}

export default DiscountCard;

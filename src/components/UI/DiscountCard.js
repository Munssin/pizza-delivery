import React from "react";
import ButtonComponet from "./button/ButtonComponet";

const DiscountCard = (props) => {
    const {img, listTitle} = props;
    return (
        <div className="discount-item">
                <div className="discount-item__photo">
                    <img src={img} alt=""/>
                </div>
                <ul className="discount-item__list">
                    <li>{listTitle}</li>
                    <li>{listTitle}</li>
                </ul>

        </div>
    );
}

export default DiscountCard;

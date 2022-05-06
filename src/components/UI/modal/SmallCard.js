import React from "react";
import {Link} from "react-router-dom";
import PizzaIMG from "../../../img/887590c4.jpeg"

import "./modal.scss";

const SmallCard = (props) => {

    return (
        <div className="basket-item">
            <Link to="/">
                <img src={PizzaIMG} alt="Img"/>
            </Link>
            <div className="product-info">
                <div className="product-info__name">Frutti di mare</div>
                <div className="product-info__description">
                    Моцарела, Томат (соус)
                </div>
            </div>
            <div className="product-price-info">
                <div className="product-price">245грн</div>
            </div>
        </div>
    );
}

export default SmallCard;


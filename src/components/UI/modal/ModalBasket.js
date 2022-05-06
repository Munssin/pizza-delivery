import React from "react";
import {Link} from "react-router-dom";

import Button from "@atlaskit/button";
import "./modal.scss";
import ButtonComponet from "../button/ButtonComponet";
import smallCard from "./SmallCard";
import SmallCard from "./SmallCard";

const ModalBasket = ({isBasketOpen, closeBasket}) => {

    return (
    <div className={`modal-basket ${isBasketOpen ? 'basket-open':''}`}>
        <div onClick={closeBasket} className="basket-overlay"></div>
        <div className="basket-container">
            <h5>Ваше замовлення:</h5>
            <div className="basket-form">
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
            <div className="basket-all">
                <div className="total">
                    Всього до оплати:
                    <span className="total__price">447 грн</span>
                </div>
            </div>
            <Link to="checkout">Перейти до замовлення</Link>
        </div>
    </div>
    );
}

export default ModalBasket;


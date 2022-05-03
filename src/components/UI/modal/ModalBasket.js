import React from "react";
import {Link} from "react-router-dom";

import Button from "@atlaskit/button";
import "./modal.scss";
import ButtonComponet from "../button/ButtonComponet";

const ModalBasket = ({isBasketOpen, closeBasket}) => {

    return (
    <div className={`modal-basket ${isBasketOpen ? 'basket-open':''}`}>
        <div onClick={closeBasket} className="basket-overlay"></div>
        <div className="basket-container">
            <h5>Ваше замовлення:</h5>
            <div className="basket-form">
                <div className="basket-item">
                    <Link to="/">
                        <img src="" alt="Img"/>
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


import React from "react";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";

import "./modal.scss";
import BasketForm from "./BasketForm";

const ModalBasket = ({isBasketOpen, closeBasket}) => {

    const basketDataItems = useSelector(state => state.basket.basketData);

    let initialCount = 0;
    let sum = basketDataItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        initialCount
    );


    return (
    <div className={`modal-basket ${isBasketOpen ? 'basket-open':''}`}>
        <div onClick={closeBasket} className="basket-overlay"></div>
        <div className="basket-container">
            <h5>Ваше замовлення:</h5>

            <BasketForm />
            {
                sum !== 0
                    ? <Link onClick={closeBasket} to="checkout">Перейти до замовлення</Link>
                    : <p>Корзина порожня</p>
            }
        </div>
    </div>
    );
}

export default ModalBasket;


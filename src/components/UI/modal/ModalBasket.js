import React from "react";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {useActions} from "../../../helpers/hooks/useActions";

import "./modal.scss";
import SmallCard from "./SmallCard";

import {useEffect} from "react";

import {fetchProductToBasket} from "../../../redux/actions/basketAction";

const ModalBasket = ({isBasketOpen, closeBasket}) => {
    const basketDataItems = useSelector(state => state.basket.basketData);

    const getProducts = useActions(fetchProductToBasket)

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const renderSmallCard = () => {
        return basketDataItems.map(item => {
            return <SmallCard
                type={item.type}
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price}
            />;
        })
    };

    return (
    <div className={`modal-basket ${isBasketOpen ? 'basket-open':''}`}>
        <div onClick={closeBasket} className="basket-overlay"></div>
        <div className="basket-container">
            <h5>Ваше замовлення:</h5>
            <div className="basket-form">
                {renderSmallCard()}
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


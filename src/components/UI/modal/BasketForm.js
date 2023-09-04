import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useActions} from "../../../helpers/hooks/useActions";
import {fetchProductToBasket} from "../../../redux/actions/basketAction";
import {SmallCard} from "../index";
import "./modal.scss";

export const BasketForm = () => {
    const basketDataItems = useSelector(state => state.basket.basketData);
    const [updatedBasketDataItems, setUpdatedBasketDataItems] = useState(basketDataItems);

    const getProducts = useActions(fetchProductToBasket);

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
                getUpdatedSum={getUpdatedSum}
            />;
        })
    };

    useEffect(() => {
        setUpdatedBasketDataItems(basketDataItems);
    }, [basketDataItems]);

    let initialCount = 0;
    let sum = updatedBasketDataItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        initialCount
    );

    const getUpdatedSum = (updatedPrice, itemId) => {
        const updatedItems = updatedBasketDataItems.map(
            item => {
                if (item.id === itemId) {
                    return {...item, price: updatedPrice};
                } else {
                    return item;
                }
            }
        );
        setUpdatedBasketDataItems(updatedItems);
    };

    return (
        <div className="basktet-main">
            <div className="basket-form">
                {renderSmallCard()}
            </div>
            <div className="basket-all">
                <div className="total">
                    Всього до оплати:
                    <span className="total__price">{sum} грн</span>
                </div>
            </div>
        </div>

    );
};
import React from "react";
import ButtonComponet from "./button/ButtonComponet";

const DrinkCard = (props) => {
    const {img, title, size, price} = props;
    return (
        <div className="product-item drink-item">
            <a href="">
                <div className="product-item__photo">
                    <img src={img} alt=""/>
                </div>
                <div className="product-item__info">
                    <h2 className="product-item__name">{title}</h2>
                    <div className="product-item__info-main">
                        <div className="product-item__properties">
                            <span className="product-item_properties__text">Об'єм:{size} </span>
                            <div className="product-item__price">{price} <span>грн</span></div>
                        </div>
                    </div>
                </div>
            </a>
            <div className="product-item__buy">
                <ButtonComponet buttonName='Додати в корзину'/>
            </div>
        </div>
    );
}

export default DrinkCard;

import React from "react";
import ButtonComponet from "./button/ButtonComponet";

const Card = (props) => {
    const {img, title, description, size, weight, price} = props;
    return (
        <div className="product-item">
            <a href="">
                <div className="product-item__photo">
                    <img src={img} alt=""/>
                </div>
                <div className="product-item__info">
                    <h2 className="product-item__name">{title}</h2>
                    <p className="product-item__text">
                        {description} </p>
                    <div className="product-item__info-main">
                        <div className="product-item__properties">
                            <span className="product-item_properties__text">Розмір:{size}см; </span>
                            <span className="product-item__properties__text">Вага:{weight}г; </span>
                        </div>
                        <div className="product-item__price">{price} <span>грн</span></div>
                    </div>
                </div>
            </a>
            <div className="product-item__buy">
                <ButtonComponet buttonName='Додати в корзину'/>
            </div>
        </div>
    );
}

export default Card;

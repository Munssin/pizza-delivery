import React from "react";
import ButtonComponet from "./button/ButtonComponet";

const SalatCard = (props) => {
    const {img, title, description, price} = props;
    return (
        <div className="product-item drink-item salat-item">
            <a href="">
                <div className="product-item__photo">
                    <img src={img} alt=""/>
                </div>
                <div className="product-item__info">
                    <h2 className="product-item__name">{title}</h2>
                    <div className="product-item__info-main">
                        <span className="product-item__properties__text">Склад:{description} </span>

                        <div className="product-item__properties">
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

export default SalatCard;

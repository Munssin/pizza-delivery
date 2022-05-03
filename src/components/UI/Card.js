import React from "react";
import ButtonComponet from "./button/ButtonComponet";
import {Link} from "react-router-dom";

const Card = (props) => {
    const {type, id, img, title, description, size, weight, price} = props;
    const dynamicPath = type === 'pizza' ? `/detail-pizza/${id}` : '';

    return (
        <div className="product-item">
            <Link
                onClick={(e) => type !== 'pizza' && e.preventDefault()}
                to={dynamicPath}>
                <div className="product-item__photo">
                    <img src={img} alt=""/>
                </div>
                <div className="product-item__info">
                    <h2 className="product-item__name">{title}</h2>
                    <p className="product-item__text">
                        {description} </p>
                    <div className="product-item__info-main">
                        {
                            size && weight && (
                                <div className="product-item__properties">
                                    <span className="product-item_properties__text">Розмір:{size}см; </span>
                                    <span className="product-item__properties__text">Вага:{weight}г; </span>
                                </div>
                            )
                        }
                        <div className="product-item__price">{price} <span>грн</span></div>
                    </div>
                </div>
            </Link>
            <div className="product-item__buy">
                <ButtonComponet buttonName='Додати в корзину'/>
            </div>
        </div>
    );
}

export default Card;

import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useActions} from "../../../helpers/hooks/useActions";
import {Link} from "react-router-dom";
import {ButtonComponent} from "../index";
import {addProductToBasket} from "../../../redux/actions/basketAction";


export const Card = (props) => {
    const {type, id, img, title, description, size, weight, price, volume} = props;
    const dynamicPath = type === 'pizza' ? `/detail-pizza/${id}` : '';

    const pushProductToBasket = useActions(addProductToBasket);

   const addToBasket = () => {
       pushProductToBasket(props);
       // const showSuccessMess = () => {
       //
       // };
       // showSuccessMess();
    }

    return (
        <div className="product-item">
            <Link
                onClick={(e) => type !== 'pizza' && e.preventDefault()}
                to={dynamicPath}>
                <div className="product-item__photo">
                    <img src={require(`../../../images/${img}`)} alt=""/>
                </div>
                <div className="product-item__info">
                    <h2 className="product-item__name">{title}</h2>
                    <p className="product-item__text">
                        {description} </p>
                    {
                        type === "drink" ? (
                            <div className="product-item__info-main">
                                <div className="product-item__properties">
                                    <span className="product-item_properties__text">Об'єм:{volume} </span>
                                    <div className="product-item__price">{price} <span>грн</span></div>
                                </div>
                            </div>
                        ) : (
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
                        )
                    }
                </div>
            </Link>
            <div className="product-item__buy">
                <ButtonComponent
                    buttonName='Додати в корзину'
                    onClick={ addToBasket }
                />
            </div>
        </div>
    );
};
import React from "react";
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

import "../css/product-detail.scss";

import ButtonComponet from "./UI/button/ButtonComponet";

import SliderAlso from "./UI/carousel/SliderAlso";


const DetailPizza = (props) => {
    const match = useParams();

    const pizzasData = useSelector(state => state.pizza.data);

    const dispatch = useDispatch();

    const selectedPizza = pizzasData.find( item => item.id == match.id );

    return (
        <div className="pizza-detail">
            <div className="pizza-detail-main">
                <div className="pizza-detail-photo">
                    <img src={selectedPizza.img} alt=""/>
                </div>
                <div className="pizza-detail-info">
                    <h1 className="pizza-detail-name">{selectedPizza.title}</h1>
                    <p className="pizza-detail-desc">
                        {selectedPizza.description}
                    </p>
                    <div className="pizza-detail-properties">
                        <span className="pizza-detail-properties__text">Розмір:{selectedPizza.size}см; </span>
                        <span className="pizza-detail-properties__text">Вага:{selectedPizza.weight}г; </span>
                    </div>
                    <div className="pizza-detail-properties-price">Ціна: <span>{selectedPizza.price } грн</span></div>
                    <ButtonComponet buttonType='button' buttonName='Замовити'/>
                </div>
            </div>

            <div className="product-also">
                <h2 className="product-also__title">Не забудьте про напої</h2>
                <SliderAlso />
            </div>

        </div>
    );
}

export default DetailPizza;

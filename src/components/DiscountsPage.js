import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {INCREASE_COUNT, REDUCE_COUNT} from "../redux/types";

import DiscountCard from "./UI/DiscountCard";
import PizzaIMG from "../img/887590c4.jpeg"
import "../css/discount.scss";

const DiscountPage = (props) => {

    const discountData = useSelector(state => state.discount.data);

    const dispatch = useDispatch();


    const renderDiscountCard = () => {
        return discountData.map(item => {
            return <DiscountCard
                key={item.id}
                img={item.img}
                listTitle={item.listTitle}
            />;
        })
    };


    return (
        <div className="discount">
            <h1>Discount Title</h1>
            <div className="discount-container">
                {renderDiscountCard()}
            </div>
        </div>
    );
}

export default DiscountPage;

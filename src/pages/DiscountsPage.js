import React from "react";
import {useSelector} from "react-redux";
import {DiscountCard} from "../components/UI";
import "../css/discount.scss";

const DiscountPage = () => {
    const discountData = useSelector(state => state.discount.data);
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
};

export default DiscountPage;
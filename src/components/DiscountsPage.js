import React from "react";
import DiscountCard from "./UI/DiscountCard";
import PizzaIMG from "./img/887590c4.jpeg"

const DiscountPage = (props) => {
    const dataDiscount = [
        {
            id: 1,
            img: PizzaIMG,
            listTitle: [
                'Знижка діє з пн.-нд. при умові що наш гість забирає своє замовлення з собою;',
                'Акція -20% діє в закладі з пн.-чт. з 11:00-17:00, при умові, що рахунок оплачується до 17:00;',
                'Знижка не поєднується з іншими акціями та знижками;',
            ],
        },
        {
            id: 2,
            img: PizzaIMG,
            listTitle: [
                'Акція діє з пн.-нд.;',
                'ри умові, що рахунок оплачується до 17:00;',
                'Акція діє тільки на доставку або самовивіз;',
            ],
        },
        {
            id: 3,
            img: PizzaIMG,
            listTitle: [
                'Акція діє з пн.-нд.;',
                'ри умові, що рахунок оплачується до 17:00;',
                'Акція діє тільки на доставку або самовивіз;',
                'Акція діє тільки на доставку або самовивіз;',
            ],
        },
    ];

    const renderDiscountCard = () => {
        return dataDiscount.map(item => {
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

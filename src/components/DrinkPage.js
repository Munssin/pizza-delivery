import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {INCREASE_COUNT, REDUCE_COUNT} from "../redux/types";

import FilterDrink from "./FilterDrink";
import DrinkCard from "./UI/DrinkCard";
import PizzaIMG from "./img/887590c4.jpeg"


const DrinkPage = (props) => {
    const drinksData = useSelector(state => state.drink.data);
    const [filteredDrinkData, setFilteredDrinkData] = useState(drinksData);

    const dispatch = useDispatch();

    const renderCard = () => {
        return filteredDrinkData.map(item => {
            return <DrinkCard
                key={item.id}
                img={item.img}
                title={item.title}
                size={item.size}
                price={item.price}
            />;
        })
    };

    const onSortDrink = (category) => {
        const updatedContent = drinksData.filter(item => category === "All" ? item : item.category === category);
        setFilteredDrinkData(updatedContent);
    }

    return (
        <div className="pizza-main">
            <div className="main-banner">
                <h1>Drink Title</h1>
            </div>

            <FilterDrink onSortDrink={onSortDrink} drinksData={drinksData}/>
            <div className="catalog">
                <div className="catalog-container">
                    {renderCard()}
                </div>
            </div>
        </div>
    );
}

export default DrinkPage;

import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import {useActions} from "../helpers/hooks/useActions";

import FilterPizza from "./FilterPizza";
import Card from "./UI/Card";
import Swiper from "./UI/carousel/Swiper";

import {fetchPizza} from "../redux/actions/pizzaActions";


const PizzaPage = () => {
    const pizzasData = useSelector(state => state.pizza.data);

    const [filteredPizzasData, setFilteredPizzasData] = useState(pizzasData);

    const getPizza = useActions(fetchPizza);

    useEffect(() => {
        getPizza();
    }, [getPizza]);

    useEffect(() => {
        pizzasData.length > 0 && setFilteredPizzasData(pizzasData);
    }, [pizzasData]);

    const renderCard = () => (
        filteredPizzasData.map(item => {
            return <Card
                type={item.type}
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                size={item.size}
                weight={item.weight}
                price={item.price}
            />;
        })
    );

    const onSortPizza = category => {
        const updatedContent = pizzasData.filter(item => category === "All" ? item : item.category === category);
        setFilteredPizzasData(updatedContent);
    };

    return (
        <div className="pizza-main">
            <Swiper />
            <div className="main-banner">
                <h1>Pizza Title</h1>
            </div>

            <FilterPizza onSortPizza={onSortPizza} pizzasData={pizzasData}/>
            <div className="catalog">
                <div className="catalog-container">
                    {renderCard()}
                </div>
            </div>
        </div>
    );
};

export default PizzaPage;

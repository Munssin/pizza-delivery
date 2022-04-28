import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import {INCREASE_COUNT, REDUCE_COUNT} from "../redux/types";

// import BannerMain from "UI/BannerMain";
import FilterPizza from "./FilterPizza";
import ConstructorPizza from "./ConstructorPizza";
import Card from "./UI/Card";
import PizzaIMG from "./img/887590c4.jpeg"
import ButtonComponet from "./UI/button/ButtonComponet";

import Swiper from "./UI/carousel/Swiper";


const PizzaPage = (props) => {
    const pizzasData = useSelector(state => state.pizza.data);
    const [filteredPizzasData, setFilteredPizzasData] = useState(pizzasData);

    const dispatch = useDispatch();

    const renderCard = () => {
       return filteredPizzasData.map(item => {
          return <Card
          key={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
          size={item.size}
          weight={item.weight}
          price={item.price}
          />;
      })
    };

    const onSortPizza = (category) => {
        const updatedContent = pizzasData.filter(item => category === "All" ? item : item.category === category);
        setFilteredPizzasData(updatedContent);
    }

    return (
        <div className="pizza-main">
            <Swiper />
            <div className="main-banner">
                <h1>Pizza Title</h1>
            </div>

            <FilterPizza onSortPizza={onSortPizza} pizzasData={pizzasData}/>
            {/*<ConstructorPizza/>*/}
            <div className="catalog">
                <div className="catalog-container">
                    {renderCard()}
                </div>
            </div>
        </div>
    );
}

export default PizzaPage;

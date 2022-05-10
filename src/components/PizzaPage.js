import React, {useState} from "react";

import {useSelector} from "react-redux";

import FilterPizza from "./FilterPizza";
import Card from "./UI/Card";

import Swiper from "./UI/carousel/Swiper";
import {useEffect} from "react";
import {useActions} from "../helpers/hooks/useActions";
import {fetchPizza} from "../redux/actions/pizzaActions";


const PizzaPage = (props) => {
    const getPizza = useActions(fetchPizza)

    const pizzasData = useSelector(state => state.pizza.data);

    const [filteredPizzasData, setFilteredPizzasData] = useState(pizzasData);

    useEffect(() => {
        getPizza();
    }, [getPizza]);

    useEffect(() => {
        setFilteredPizzasData(pizzasData);
    }, [pizzasData]);

    const renderCard = () => {

        return filteredPizzasData.map(item => {
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
            <div className="catalog">
                <div className="catalog-container">
                    {renderCard()}
                </div>
            </div>
        </div>
    );
}

export default PizzaPage;

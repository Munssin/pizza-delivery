import React, {useState} from "react";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";

// import BannerMain from "UI/BannerMain";
import FilterPizza from "./FilterPizza";
import ConstructorPizza from "./ConstructorPizza";
import Card from "./UI/Card";
import PizzaIMG from "../img/887590c4.jpeg"
import ButtonComponet from "./UI/button/ButtonComponet";

import Swiper from "./UI/carousel/Swiper";
import {useEffect} from "react";
import {useActions} from "../helpers/hooks/useActions";
import {fetchPizza} from "../redux/actions/pizzaActions";


const PizzaPage = (props) => {
    const getPizza = useActions(fetchPizza)

    const pizzasData = useSelector(state => state.pizza.data);
    console.log("pizzasData " , pizzasData);

    const [filteredPizzasData, setFilteredPizzasData] = useState(pizzasData);

    useEffect(() => {
        getPizza();
    }, [getPizza]);

    useEffect(() => {
        setFilteredPizzasData(pizzasData);
    }, [pizzasData]);

    console.log("before filteredPizzasData " , filteredPizzasData);

    const renderCard = () => {
        console.log('filteredPizzasData ', filteredPizzasData);

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

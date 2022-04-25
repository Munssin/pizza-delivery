import React from "react";

import FilterPizza from "./FilterPizza";
import ConstructorPizza from "./ConstructorPizza";
import Card from "./UI/Card";
import PizzaIMG from "./img/887590c4.jpeg"


const PizzaPage = (props) => {
    const dataPizza = [
            {
            id: 1,
            img: PizzaIMG,
                title: 'Frutti di mare',
            description: 'томат, моцарела, морепродукти, лимон, пармезан',
            size: '30',
            weight: '350',
            price: '200'
        },
        {
            id: 2,
            img: PizzaIMG,
            title: 'Salmone',
            description: 'томат, моцарела, морепродукти, лимон, sadsadasd asd as пармезан',
            size: '35',
            weight: '450',
            price: '220'
        },
        {
            id: 3,
            img: PizzaIMG,
            title: 'anasda',
            description: 'томат, моцарела, пармезан',
            size: '35',
            weight: '450',
            price: '220'
        },
        {
            id: 4,
            img: PizzaIMG,
            title: 'ZCCcasdd',
            description: 'томат, моцарела, томат, моцарела, пармезан пармезан',
            size: '32',
            weight: '250',
            price: '190'
        },
    ];

    const renderCard = () => {
       return dataPizza.map(item => {
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

    return (
        <div className="pizza-main">
            <div className="main-banner">
                <h1>Pizza Title</h1>
            </div>

            <FilterPizza/>
            <ConstructorPizza/>
            <div className="catalog">
                <div className="catalog-container">
                    {renderCard()}
                </div>
            </div>
        </div>
    );
}

export default PizzaPage;

import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import FilterDrink from "./FilterDrink";
// import {DrinkCard} from "./UI/index";
import {Card} from "./UI/index";
import {useActions} from "../helpers/hooks/useActions";
import {fetchDrink} from "../redux/actions/drinkActions";

const DrinkPage = () => {
    const drinksData = useSelector(state => state.drink.data);

    const [filteredDrinkData, setFilteredDrinksData] = useState(drinksData);

    const getDrink = useActions(fetchDrink)

    useEffect(() => {
        getDrink();
    }, [getDrink]);

    useEffect(() => {
        // setFilteredDrinksData(drinksData);
        drinksData.length > 0 && setFilteredDrinksData(drinksData);

    }, [drinksData]);

    const renderCard = () => {
        return filteredDrinkData.map(item => {
            return <Card
                type={item.type}
                key={item.id}
                img={item.img}
                title={item.title}
                size={item.size}
                volume={item.volume}
                price={item.price}
            />;
        })
    };

    const onSortDrink = (category) => {
        const updatedContent = drinksData.filter(item => category === "All" ? item : item.category === category);
        setFilteredDrinksData(updatedContent);
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
};

export default DrinkPage;

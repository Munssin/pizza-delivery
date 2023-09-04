import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {ButtonComponent, DrinksSlider} from "../components/UI";
import "../css/product-detail.scss";
import {useActions} from "../helpers/hooks/useActions";
import {fetchPizza} from "../redux/actions/pizzaActions";
import {fetchDrink} from "../redux/actions/drinkActions";
import {addProductToBasket} from "../redux/actions/basketAction";

const DetailPizza = () => {
    const match = useParams();

    const pizzasData = useSelector(state => state.pizza.data);
    const drinksData = useSelector(state => state.drink.data);

    const [getPizza, getDrink] = useActions([fetchPizza, fetchDrink]);

    useEffect(() => {
        if (pizzasData.length === 0) {
            getPizza();
        }
    }, [getPizza, pizzasData]);

    useEffect(() => {
        if (drinksData.length === 0) {
            getDrink();
        }
    }, [getDrink, drinksData]);

    const selectedPizza = pizzasData.find( item => item.id === match.id );
    const pushProductToBasket = useActions(addProductToBasket);

    return selectedPizza ? (
        <div className="pizza-detail">
            <div className="pizza-detail-main">
                <div className="pizza-detail-photo">
                    <img src={require(`../images/${selectedPizza?.img}`)} alt=""/>
                </div>
                <div className="pizza-detail-info">
                    <h1 className="pizza-detail-name">{selectedPizza.title}</h1>
                    <p className="pizza-detail-desc">
                        {selectedPizza.description}
                    </p>
                    <div className="pizza-detail-properties">
                        <span className="pizza-detail-properties__text">Розмір:{selectedPizza.size}см; </span>
                        <span className="pizza-detail-properties__text">Вага:{selectedPizza.weight}г; </span>
                    </div>
                    <div className="pizza-detail-properties-price">Ціна: <span>{selectedPizza.price } грн</span></div>
                    <ButtonComponent
                        buttonType='button'
                        buttonName='Замовити'
                        onClick={ () => pushProductToBasket(selectedPizza) }
                    />
                </div>
            </div>

            <div className="product-also">
                <h2 className="product-also__title">Не забудьте про напої</h2>
                <DrinksSlider drinksData={drinksData} />
            </div>

        </div>
    ) : null;
};

export default DetailPizza;
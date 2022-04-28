import {combineReducers} from "redux";
import {pizzaReducer} from "./redux/reducers/pizzaReducer";
import {drinkReducer} from "./redux/reducers/drinkReducer";
import {salatReducer} from "./redux/reducers/salatReducer";
import {discountReducer} from "./redux/reducers/discountReducer";

export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    drink: drinkReducer,
    salat: salatReducer,
    discount: discountReducer
})
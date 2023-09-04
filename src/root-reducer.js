import {combineReducers} from "redux";
import {pizzaReducer} from "./redux/reducers/pizzaReduser";
import {drinkReducer} from "./redux/reducers/drinkReducer";
import {salatReducer} from "./redux/reducers/salatReducer";
import {discountReducer} from "./redux/reducers/discountReducer";
import basketReducer from "./redux/reducers/basketReducer";
import alertReducer from "./redux/reducers/alertReducer";

export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    drink: drinkReducer,
    salat: salatReducer,
    discount: discountReducer,
    basket: basketReducer,
    alerts: alertReducer
})
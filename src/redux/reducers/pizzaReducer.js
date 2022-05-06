import {FETCH_PIZZA_STARTED} from "../types";

const initialState = {
    data: [],
};

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PIZZA_STARTED:
            console.log(action.payload.pizza);
            return {
              ...state,
              data: action.payload.pizza,
            };
            default: return state;
    }
};
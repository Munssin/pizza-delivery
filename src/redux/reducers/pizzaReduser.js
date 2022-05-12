import {FETCH_PIZZA_SUCCESS} from "../types";

const initialState = {
    data: [],
};

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PIZZA_SUCCESS:
            return {
                ...state,
                data: action.payload.pizza,
            };
        default: return state;
    }
};
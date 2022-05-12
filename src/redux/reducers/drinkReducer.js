import {FETCH_DRINK_SUCCESS} from "../types";

const initialState = {
    data: [],
};

export const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRINK_SUCCESS:
            return {
                ...state,
                data: action.payload.drink,
            };
        default: return state;
    }
};
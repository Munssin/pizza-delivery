
import {
    ADD_PRODUCT_TO_BASKET_STARTED,
    FETCH_PRODUCT_ITEMS_STARTED
} from "../types";

const initialState = {
   basketData: [],
    data: []
}

export default (state = initialState, {type, payload, action}) => {
    switch (type){
        case ADD_PRODUCT_TO_BASKET_STARTED:
            return {
                ...state,
                basketData: [...state.basketData, payload.product]
            };
        case FETCH_PRODUCT_ITEMS_STARTED:
            return {
                ...state,
                data: action.payload.items,
            }
        default:
            return state
    }
}

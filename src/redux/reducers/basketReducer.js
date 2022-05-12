
import {
    ADD_PRODUCT_TO_BASKET_STARTED,
    FETCH_PRODUCT_ITEMS_STARTED,
    DELETE_PRODUCT_ITEMS_STARTED
} from "../types";

const initialState = {
   basketData: [],
}

export default (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_PRODUCT_TO_BASKET_STARTED:
            return {
                ...state,
                basketData: [...state.basketData, payload.product]
            };
        case FETCH_PRODUCT_ITEMS_STARTED:
            return {
                ...state,
                basketData: payload.product,
            };
        case DELETE_PRODUCT_ITEMS_STARTED:
            console.log(payload.productId);
            return {
                ...state,
                basketData: state.basketData.filter((item) => item.id !== payload.productId)
            }
        default:
            return state
    }
}


import {
    ADD_PRODUCT_TO_BASKET_SUCCESS,
    FETCH_PRODUCT_ITEMS_SUCCESS,
    DELETE_PRODUCT_ITEMS_SUCCESS
} from "../types";

const initialState = {
   basketData: [],
}

export default (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_PRODUCT_TO_BASKET_SUCCESS:
            return {
                ...state,
                basketData: [...state.basketData, payload.product]
            };
        case FETCH_PRODUCT_ITEMS_SUCCESS:
            return {
                ...state,
                basketData: payload.product,
            };
        case DELETE_PRODUCT_ITEMS_SUCCESS:
            return {
                ...state,
                basketData: state.basketData.filter((item) => item.id !== payload.productId)
            };
        default:
            return state
    }
}

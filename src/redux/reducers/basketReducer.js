
import {ADD_PRODUCT_TO_BASKET_STARTED} from "../types";

const initialState = {
   basketData: []
}

export default (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_PRODUCT_TO_BASKET_STARTED:
            return {
                ...state,
                basketData: [...state.basketData, payload.product]
            }
        default:
            return state
    }
}

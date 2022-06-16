import {
    ADD_SUCCESS_ALERT, CLEAR_ALERTS_SUCCESS

} from "../types";

const initialState = {
    data: [],
}

export default (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_SUCCESS_ALERT:
            return {
                ...state,
                data: [...state.data, payload]
            };
        case CLEAR_ALERTS_SUCCESS:
            return {
                ...state,
                data: state.data.filter(item => item.key !== payload.key)
            };
        default:
            return state;
    }
}
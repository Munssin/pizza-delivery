import {FETCH_SALAT, FETCH_SALAT_STARTED} from "../types";

const initialState = {
    data: [],
};

export const salatReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SALAT_STARTED:
            return {
                ...state,
                data: action.payload.data,
            };
        default: return state;
    }
};
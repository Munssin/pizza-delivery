import PizzaIMG from "../../img/887590c4.jpeg";
import {FETCH_PIZZA} from "../types";

const dataDiscount = [
    {
        id: 1,
        img: PizzaIMG,
        listTitle: (
            <div>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
            </div>
        )
    },
    {
        id: 2,
        img: PizzaIMG,
        listTitle: (
            <div>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
            </div>
        )
    },
    {
        id: 3,
        img: PizzaIMG,
        listTitle: (
            <div>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
                <span>Акція діє з <strong>пн.-нд.</strong>;</span>
            </div>
        )
    },
];

const initialState = {
    data: dataDiscount,
};

export const discountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PIZZA:
            return {
                ...state,
                count: action.payload.pizza,
            };
        case FETCH_PIZZA:
            return {
                ...state,
                count: action.payload.pizza,
            };
        default: return state;
    }
};
import {INCREASE_COUNT, REDUCE_COUNT} from "../types";
import PizzaIMG from "../../components/img/887590c4.jpeg";

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
        case INCREASE_COUNT:
            return {
                ...state,
                count: action.payload.number,
            };
        case REDUCE_COUNT:
            return {
                ...state,
                count: action.payload.number,
            };
        default: return state;
    }
};
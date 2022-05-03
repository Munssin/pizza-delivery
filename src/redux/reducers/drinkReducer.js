import {INCREASE_COUNT, REDUCE_COUNT} from "../types";
import PizzaIMG from "../../img/887590c4.jpeg";


const dataDrink = [
        {
            type: 'drink',
            id: 1,
            img: PizzaIMG,
            title: 'Cola',
            size: '0,5г',
            price: '25',
            category: 'Water'
        },
        {
            type: 'drink',
            id: 2,
            img: PizzaIMG,
            title: 'Фанта',
            size: '1л',
            price: '40',
            category: 'Water'
        },
        {
            type: 'drink',
            id: 3,
            img: PizzaIMG,
            title: 'Rich',
            size: '1л',
            price: '45',
            category: 'Juice'
        },
    ];

const initialState = {
    data: dataDrink,
};

export const drinkReducer = (state = initialState, action) => {
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
import {INCREASE_COUNT, REDUCE_COUNT} from "../types";
import PizzaIMG from "../../img/887590c4.jpeg"

const dataPizza = [
    {
        type: 'pizza',
        id: 1,
        img: PizzaIMG,
        title: 'Frutti di mare',
        description: 'томат, моцарела, морепродукти, лимон, пармезан',
        size: '30',
        weight: '350',
        price: '200',
        category: 'meat'
    },
    {
        type: 'pizza',
        id: 2,
        img: PizzaIMG,
        title: 'Salmone',
        description: 'томат, моцарела, морепродукти, лимон, sadsadasd asd as пармезан',
        size: '35',
        weight: '450',
        price: '220',
        category: 'fish'
    },
    {
        type: 'pizza',
        id: 3,
        img: PizzaIMG,
        title: 'anasda',
        description: 'томат, моцарела, пармезан',
        size: '35',
        weight: '450',
        price: '220',
        category: 'meat'
    },
    {
        type: 'pizza',
        id: 4,
        img: PizzaIMG,
        title: 'ZCCcasdd',
        description: 'томат, моцарела, томат, моцарела, пармезан пармезан',
        size: '32',
        weight: '250',
        price: '190',
        category: 'vegetarian'
    },
];

const initialState = {
    data: dataPizza,
};

export const pizzaReducer = (state = initialState, action) => {
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
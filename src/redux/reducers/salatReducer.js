import {INCREASE_COUNT, REDUCE_COUNT} from "../types";
import PizzaIMG from "../../components/img/887590c4.jpeg";


const dataSalat = [
    {
        id: 1,
        img: PizzaIMG,
        title: 'З бастурмою',
        description: 'салат Айсберг, бастурма, перець болгарський, помідори чері, фета, горіхи кеш\'ю, соус',
        price: '120',
    },
    {
        id: 2,
        img: PizzaIMG,
        title: 'Аллегро',
        description: 'мікс салату, помідори чері, огірок, авокадо, фета, гарбузове насіння, соус',
        price: '110',
    },
    {
        id: 3,
        img: PizzaIMG,
        title: 'З бастурмою',
        description: 'салат Айсберг, бастурма, перець болгарський, помідори чері, фета, горіхи кеш\'ю, соус',
        price: '120',
    },
    {
        id: 4,
        img: PizzaIMG,
        title: 'Аллегро',
        description: 'мікс салату, помідори чері, огірок, авокадо, фета, гарбузове насіння, соус',
        price: '110',
    },
];

const initialState = {
    data: dataSalat,
};

export const salatReducer = (state = initialState, action) => {
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
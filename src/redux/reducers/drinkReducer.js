import {FETCH_DRINK_STARTED} from "../types";

// const dataDrink = [
        // {
        //     type: 'drink',
        //     id: 1,
        //     img: PizzaIMG,
        //     title: 'Cola',
        //     size: '0,5л',
        //     price: '25',
        //     category: 'Water'
        // },
        // {
        //     type: 'drink',
        //     id: 2,
        //     img: PizzaIMG,
        //     title: 'Фанта',
        //     size: '1л',
        //     price: '40',
        //     category: 'Water'
        // },
        // {
        //     type: 'drink',
        //     id: 3,
        //     img: PizzaIMG,
        //     title: 'Rich',
        //     size: '1л',
        //     price: '45',
        //     category: 'Juice'
        // },
// ];

const initialState = {
    // data: dataDrink,
    data: [],
};

export const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRINK_STARTED:
            return {
                ...state,
                data: action.payload.drink,
            };
        default: return state;
    }
};
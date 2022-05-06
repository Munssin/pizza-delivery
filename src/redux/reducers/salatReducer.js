import PizzaIMG from "../../img/887590c4.jpeg";


const dataSalat = [
    {
        type: 'salat',
        id: 1,
        img: PizzaIMG,
        title: 'З бастурмою',
        description: 'салат Айсберг, бастурма, перець болгарський, помідори чері, фета, горіхи кеш\'ю, соус',
        price: '120',
    },
    {
        type: 'salat',
        id: 2,
        img: PizzaIMG,
        title: 'Аллегро',
        description: 'мікс салату, помідори чері, огірок, авокадо, фета, гарбузове насіння, соус',
        price: '110',
    },
    {
        type: 'salat',
        id: 3,
        img: PizzaIMG,
        title: 'З бастурмою',
        description: 'салат Айсберг, бастурма, перець болгарський, помідори чері, фета, горіхи кеш\'ю, соус',
        price: '120',
    },
    {
        type: 'salat',
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
        default: return state;
    }
};
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';

import {useDispatch, useSelector} from "react-redux";
import {DrinkCard} from "../index";

export const SliderAlso = () => {
    const drinksData = useSelector(state => state.drink.data);
    useDispatch();
    const renderCard = () => {
        return drinksData.map(item => {
            return <SwiperSlide key={item.id}> <DrinkCard
                key={item.id}
                img={item.img}
                title={item.title}
                size={item.size}
                price={item.price}
            /> </SwiperSlide>;
        })
    };

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={2}
            navigation={true}
            className="mySwiper"
        >
                {renderCard()}

        </Swiper>
    );
};
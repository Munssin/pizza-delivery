import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';
import { Navigation } from "swiper";

import {useDispatch, useSelector} from "react-redux";
import Card from "../Card";
import DrinkCard from "../DrinkCard";
import DiscountPage from "../../DiscountsPage";


const SliderAlso = (props) => {
    const drinksData = useSelector(state => state.drink.data);
    const dispatch = useDispatch();

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
            // pagination={{ clickable: true }}
            // autoplay={ true }
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
        >
                {renderCard()}

        </Swiper>
    );
};

export default SliderAlso;

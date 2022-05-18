import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';

import {Card} from "../index";

export const DrinksSlider = ({drinksData}) => {

    const renderSwiperSlide = () => {
        return drinksData.map(item => (
            <SwiperSlide key={item.id}>
                <Card
                    id={item.id}
                    type={item.type}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                />
            </SwiperSlide>
        )
    )};

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={2}
            navigation={true}
            className="mySwiper"
        >
            {renderSwiperSlide()}
        </Swiper>
    );
};
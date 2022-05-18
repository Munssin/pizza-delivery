import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';

import {Card} from "../index";

export const SliderAlso = ({drinksData}) => {
    const renderCard = () => {
        return drinksData.map(item => {
            return <SwiperSlide key={item.id}> <Card
                type={item.type}
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
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';
import Banner from "../../../img/truffaldino_banner_3.mp4"


export default () => {
    return (
        <Swiper
            // spaceBetween={100}
            // slidesPerView={1}
            // pagination={{ clickable: true }}
            // autoplay={ true }
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
        >
            <SwiperSlide>
                (
                <video loop muted autoPlay>
                    <source src={Banner} type="video/mp4" />
                </video>
                )
            </SwiperSlide>
            <SwiperSlide>
                (
                <video loop muted autoPlay>
                    <source src={Banner} type="video/mp4" />
                </video>
                )
            </SwiperSlide>
        </Swiper>
    );
};

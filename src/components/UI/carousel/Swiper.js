import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';
import Banner from "../../../images/truffaldino_banner_3.mp4"


export default () => {
    return (
        <Swiper className="mySwiper">
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
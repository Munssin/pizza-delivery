import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';
// import Banner from "../../../images/truffaldino_banner_3.mp4"

const HomeSlider = () => {
    return (
        <Swiper className="mySwiper">
            <SwiperSlide>
                (
                <video loop muted autoPlay>
                    <source src="" type="video/mp4" />
                </video>
                )
            </SwiperSlide>
            <SwiperSlide>
                (
                <video loop muted autoPlay>
                    <source src="" type="video/mp4" />
                </video>
                )
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeSlider;
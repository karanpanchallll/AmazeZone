import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./Banner.css";






const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
];

const Banner = () => {
    return (
        <>
            <Swiper
                className="carousel"
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false, 
                }}
                loop={true} 
                spaceBetween={0}
                slidesPerView={1} 
                navigation={true} 
                pagination={{ clickable: true }
                }
                modules={[Navigation, Pagination, Autoplay]} // 
                grabCursor={true} 
            
            >
                 <SwiperSlide><img src='https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50' /></SwiperSlide>
                <SwiperSlide><img src='https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50' /> </SwiperSlide>
                <SwiperSlide><img src='https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50' /></SwiperSlide>
                <SwiperSlide><img src='https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50' /></SwiperSlide>
            </Swiper>
        </>
    );
}; 
  

export default Banner

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from '../../img/hombretravel.svg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/Carousel.css";
import data from '../../data'
// import required modules
import { Grid, Pagination, Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <section className='Hero'>            
            <h2>
            POPULAR MYTINERARIES!
            </h2>
            <img src={Hero} alt='hero' id='hero' />
      </section>
      <Swiper
        slidesPerView={2}
        grid={{   
          rows: 2
        }}
        slidesPerGroup={2}
        spaceBetween={30}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        pagination={{
          clickable: true
        }}
        hashNavigation={{
          watchState: true
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
          {data.map(evento=>
        <SwiperSlide>
            <img
            id="contain" 
            src={evento.photo}/>
            <div id="eventoname">
            <h3>
                {evento.city_name}</h3></div>
        </SwiperSlide>)}
      </Swiper>
    </>
  );
}

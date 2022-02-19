import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Carousel.css";
import data from '../data'
// import required modules
import { Grid, Pagination, Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{ 
          rows: 2
        }}
        slidesPerGroup={2}
        spaceBetween={30}
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

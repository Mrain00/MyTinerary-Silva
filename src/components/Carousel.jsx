import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/Carousel.css"

// import required modules
import { EffectCards } from "swiper";
import data from "../data";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
          {data.map(evento=>
        <SwiperSlide>
            <img
            id="contain" 
            src={evento.photo}
            width={500}
            height={450}/>
            <h3
            id="eventoname">
                {evento.city_name}</h3>
                <span>
                    {}
                </span>
        </SwiperSlide>)}
      </Swiper>
    </>
  );
}

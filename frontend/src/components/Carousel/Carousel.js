import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from '../../data'
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/Carousel.css";
// import required modules
import { Grid, Pagination, Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <div className="mainCarr">
      <section className='Hero'>            
            <h2>
            Popular MyTineraries!
            </h2>
      </section>
      <Swiper
        slidesPerView={4}
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
          {data.map((evento, index) =>
        <SwiperSlide id='swiperslide' key={index} style={{flexWrap:'nowrap'}}>
            <img
            id="contain" 
            src={evento.photo} alt="city"/>
            <div id="eventoname">
            <h3>
                {evento.city_name}</h3></div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
}

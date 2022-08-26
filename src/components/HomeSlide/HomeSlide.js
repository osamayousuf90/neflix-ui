import React from 'react'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay ,EffectFade, Navigation, Pagination } from "swiper";

const HomeSlide = () => {
  return (
    <div className='homeS'>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          // disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation ,EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="homeSlide">
        <img src="https://images.hdqwalls.com/download/1/beautiful-landscape-5k-c1.jpg" alt="" />
        <div className="homeSlide_content">
          <img src="https://logos-world.net/wp-content/uploads/2020/05/Stranger-Things-Logo.png" />
          <div className="homeSlide_text">
          <h5>Stranger Things is an American science fiction drama television series created by the Duffer
            Brothers , who also serve as showrunners and are executive producers along with Shawn Levy and
            Dan Cohen . Its first season was released on Netflix on July 15, 2016. In February 2022, the series
            was renewed for a fifth and final season.</h5>  
          </div>
        </div>
      </div>      
        </SwiperSlide>
        <SwiperSlide>
        <div className="homeSlide">
        <img src="https://images.hdqwalls.com/download/1/beautiful-landscape-5k-c1.jpg" alt="" />
        <div className="homeSlide_content">
          <img src="https://image.tmdb.org/t/p/original/aYKRKkxwkHTP3sGHp8E5tnNHhvy.png" />
          <div className="homeSlide_text">
          <h5>Stranger Things is an American science fiction drama television series created by the Duffer
            Brothers , who also serve as showrunners and are executive producers along with Shawn Levy and
            Dan Cohen . Its first season was released on Netflix on July 15, 2016. In February 2022, the series
            was renewed for a fifth and final season.</h5>  
          </div>
        </div>
      </div>      
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSlide
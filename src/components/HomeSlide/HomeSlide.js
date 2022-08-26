import React from 'react'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import imgSlide from '../../APIs/MainHomeSlide/MainHomeSlideAPI';

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
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation ,EffectFade]}
        className="mySwiper"
      >
        {imgSlide.map((res) => {
          return (
            <SwiperSlide>
            <div className="homeSlide">
            <img src={res?.img} />
            <div className="homeSlide_content">
              <img src={res?.logo}/>
              <div className="homeSlide_text container">
                    <h5 >{res?.description.length >= 30 ? `${res?.description.substring(0,300)}...` : res?.description}</h5>  
              <div className="homeSlide_buttons">
                <button className='play'><i class="fa-solid fa-play"></i>Play</button>
                <button className='addList'><i class="fa-solid fa-plus"></i>My List</button>
              </div>    
              </div>
            </div>
          </div>      
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HomeSlide
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import MovieSlidesTrendingAPI from '../../APIs/MoviesSlidesTrending/MovieSlidesTrendingAPI';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const MovieSlides = ({ trendingNow }) => {
    // trending
    const trendingList = [];
    for (let i = 0; i < 4; i++){
      trendingList.push(MovieSlidesTrendingAPI[i])
    }

  return (
    <div className="movieSlides">
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    slidesPerGroup={3}
    loop={false}
    loopFillGroupWithBlank={true}
    pagination={{
        clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
        >
            
    {/* Trending List */}
    {trendingNow === "true" ? <>
    {trendingList.map((res) => {
    return (
    <SwiperSlide>
    <div className="movieSlides_card">
    <img src={res?.img} />     
    </div>       
    </SwiperSlide> 
    )})} </> : ""}      

              
    </Swiper>    
    </div>
  )
}

export default MovieSlides
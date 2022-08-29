import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


// APIS
import MovieSlidesTrendingAPI from '../../APIs/MoviesSlidesTrending/MovieSlidesTrendingAPI';
import MovieSlidesPopularAPI from '../../APIs/MovieSlidesPopular/MovieSlidesPopularAPI';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const MovieSlides = ({ trendingNow , popularNow}) => {
    // trending
    const trendingList = [];
    for (let i = 0; i < 9; i++){
      trendingList.push(MovieSlidesTrendingAPI[i])
  }
  
  // popular
  const popularList = [];
  for (let i = 0; i < 7; i++){
   popularList.push(MovieSlidesPopularAPI[i])
  }


  return (
    <div className="movieSlides">
    <Swiper
    slidesPerView={6}
    spaceBetween={300}
    slidesPerGroup={6}
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
      )
    })} </> : ""}      
        
   {/* Popular Now */}
    {popularNow === "true" ? <>
    {popularList.map((res) => {
     return (<SwiperSlide>
     <div className="movieSlides_card">
     <img src={res?.img} />     
     </div>       
    </SwiperSlide>
     )  
    })}     
    </> : ""}

              
    </Swiper>    
    </div>
  )
}

export default MovieSlides
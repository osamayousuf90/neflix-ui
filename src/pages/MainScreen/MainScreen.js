import React, { useEffect } from 'react'
import HomeSlide from '../../components/HomeSlide/HomeSlide';
import MovieSlides from '../../components/MovieSlides/MovieSlides';
import Navbar from "../../components/Navbar/Navbar";

export const MainScreen = () => {

  return (
    <div className='mainScreen'>
      <Navbar mainHome={"true"}/>
      <HomeSlide />
      <h6 className='mainScreen_heading'>Trending Now</h6>
      <MovieSlides trendingNow={"true"} />
      <h6 className='mainScreen_heading'>Popular Now</h6>
      <MovieSlides popularNow={"true"}/>
    </div>
  )
}

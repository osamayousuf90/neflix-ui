import React from 'react'
import HomeSlide from '../../components/HomeSlide/HomeSlide';
import Navbar from "../../components/Navbar/Navbar";

export const MainScreen = () => {
  return (
    <div>
      <Navbar mainHome={"true"}/>
      <HomeSlide/>   
    </div>
  )
}

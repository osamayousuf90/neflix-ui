import React from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = ({ pswCreater, signUpPageView, mainHome }) => {
  console.log("main Home is true", mainHome)
  return (
    <div>
     <div className={mainHome === "true" ? "navbarBlackBg" : "navbar"}>
        <div className="navbar_logo">
         <img src={logo} />
        </div>
        {mainHome === "true" ? <div className="navbar_mainHome">
          <div className="navbar_pt1">
          {mainHome === "true" ? <p style={mainHome === "true" ? {color: "white"} : ""}>Home</p> : ""}  
          {mainHome === "true" ? <p style={mainHome === "true" ? {color: "white"} : ""}>Tv Shows</p> : ""}  
          {mainHome === "true" ? <p style={mainHome === "true" ? { color: "white" } : ""}>Movies</p> : ""}  
          {mainHome === "true" ? <p style={mainHome === "true" ? { color: "white" } : ""}>My List</p> : ""}
          </div>
          {mainHome === "true" ? <div className="navbar_pt2">
          <p style={mainHome === "true" ? { color: "white"} : ""}><i class="fa-solid fa-magnifying-glass"></i></p>
          </div> : ""}  
        </div> : ""}
        
        {pswCreater === "true" ? <div className="navbar_links">
          {/* password creater 1st step */}
         { pswCreater === "true" ? <Link to="/signin"><p className='blackSignIn'>Sign In</p></Link> : "" }
         {signUpPageView === "true" ? "" :"" }
         {signUpPageView === "true" ? <Link to="/signin"><p className="signinbtn">Sign In</p></Link>  : "" } 
        </div> : ""} 
      </div>
      { mainHome === "true" ? "" : <hr/> }
     </div>
  )
}

export default Navbar
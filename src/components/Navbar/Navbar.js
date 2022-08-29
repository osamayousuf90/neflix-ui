import React, { useEffect } from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { useState , useRef} from 'react';
import profile from "../../assets/images/profile.png"

const Navbar = ({ pswCreater, signUpPageView, mainHome }) => {
  const [close, setClose] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const [logOutOpen, setLogOutOpen] = useState(false);

  const inputRef = useRef();
  const logOutRef = useRef();
  const logOutInnerRef = useRef();

  const clickOutSideInput = (e) => {
    if (!inputRef.current.contains(e.target)) {
      setInputOpen(false);
    }
  }

  const clickOutSideLogOut = (e) => {
    if (!logOutRef.current.contains(e.target)) {
      setLogOutOpen(false);
    }
     if(logOutInnerRef.current.contains(e.target)) {
      setLogOutOpen(true)
    } 
  }

  useEffect(() => {
  document.addEventListener("click", clickOutSideInput, true)
  document.addEventListener("click", clickOutSideLogOut , true)
  }, [])
 
  return (
    <div>
     <div className={mainHome === "true" ? "navbarBlackBg" : "navbar"}>
        <div className="navbar_logo">
         <img src={logo} />
        </div>
        {/* Main Screen Navbar*/}
         {mainHome === "true" ?
          <div className="navbar_mainHome">
          <div className="navbar_pt1">
          {mainHome === "true" ? <p style={mainHome === "true" ? {color: "white"} : ""}>Home</p> : ""}  
          {mainHome === "true" ? <p style={mainHome === "true" ? {color: "white"} : ""}>Tv Shows</p> : ""}  
          {mainHome === "true" ? <p style={mainHome === "true" ? { color: "white" } : ""}>Movies</p> : ""}  
          {mainHome === "true" ? <p style={mainHome === "true" ? { color: "white" } : ""}>My List</p> : ""}
          </div>
          {mainHome === "true" ?
          <div className="navbar_pt2">
          { inputOpen === true ? <div className='navbar_searchbarDiv'><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder='Search...' ref={inputRef} onClick={(e) => clickOutSideInput(e)} /></div>  : <p style={mainHome === "true" ? { color: "white" } : ""}><i onClick={() => setInputOpen(!inputOpen) } class="fa-solid fa-magnifying-glass"></i></p>} 
          {mainHome === "true" && <><img src={profile} ref={logOutRef} onClick={() => setLogOutOpen(!logOutOpen)}/> <i class="fa-solid fa-caret-down"></i></>}
          {mainHome === "true" ? logOutOpen && <div ref={logOutInnerRef} onClick={(e) => clickOutSideLogOut(e)} className='navbar_logOut'><p>Osama</p> <hr /> <button>Log Out</button> <h6>Expiration Time : 28 Days</h6> </div> : ""}       
          </div> : ""} 
          <div className="navbar_togglerSwitch">
          {mainHome === "true" ? <i onClick={() => setClose(true)} class="fa-solid fa-bars"></i> : ""}
          </div>
          </div> : ""}
        
        {/* Signin & Signup Screen Navbar*/}
        {pswCreater === "true" ? <div className="navbar_links">
        { pswCreater === "true" ? <Link to="/signin"><p className='blackSignIn'>Sign In</p></Link> : "" }
        </div> : ""} 
        {signUpPageView === "true" ? <Link to="/signin"><p className="signinbtn">Sign In</p></Link> : ""} 
        </div>
        {mainHome === "true" ? "" : <hr />}

        {close && <SideBar setClose={setClose}/>}
     </div>
  )
}

export default Navbar
import React from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = ({pswCreater, signUpPageView}) => {
  return (
    <div>
     <div className="navbar">
        <div className="navbar_logo">
         <img src={logo} />
        </div>
        <div className="navbar_links">
         {/* password creater 1st step */}
         { pswCreater === "true" ? <Link to="/signin"><p className='blackSignIn'>Sign In</p></Link> : "" }
         {signUpPageView === "true" ? "" :"" }
         {signUpPageView === "true" ? <Link to="/signin"><p className="signinbtn">Sign In</p></Link>  : "" } 
        </div>  
     </div>
     <hr />
     </div>
  )
}

export default Navbar
import React from 'react'
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <div className="navbar">
        <div className="navbar_logo">
         <img src={logo} />
        </div>
        <div className="navbar_links">
          <Link to="/signin"><p>Sign In</p></Link>
          <Link to="/signup" className="signupbtn"><p>Sign Up</p></Link>
        </div>  
     </div>
  )
}

export default Navbar
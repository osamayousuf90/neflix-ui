import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const SignIn = () => {
  return (
    <div>
    <div className="bg2">
        <Navbar/>
        <div className="signin">
            <div className="signin_box">
              <div className="signin_heading">
                <h5>Sign In</h5>
              </div>
              <div className="signin_inputFields">
               <input type="text" placeholder='Email or Phone Number' />
               <input type="text" placeholder='Password' />
               <button>Sign In</button>
              </div>
              <div className="signin_forgot">
                <div className="signin_rememberMe">
                <input type="checkbox" />
                <p>Remember me</p>
                </div>
                <div className="signin_needHelp">
                    <p>Need Help?</p>
                </div>
              </div>
              <div className="signin_newToNetflix">
                <div className="signin_Now">
                <p>New To Netflix?</p>
                <Link to="/signup"><h6>Sign up now.</h6></Link>  
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignIn
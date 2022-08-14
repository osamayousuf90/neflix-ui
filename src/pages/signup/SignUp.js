import React from 'react'
import Navbar from "../../components/Navbar"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  return (
     <div>
    <div className="bg">
      <Navbar/>
      <div className="signup">
        <div className="signup_text">
          <h5>Unlimited movies, TV <br /> shows, and more.</h5>
          <p>Watch anywhere. Cancel anytime.</p>
          <div className="signup_getStarted">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="signup_subscription">
          <input type="text" placeholder='Email Address' />
          <button onClick={() => navigate("/passwordCreator")}>Get Started <i class="fa-solid fa-angle-right"></i></button>
          </div>
        </div>
        </div>
      </div>
     </div>
     </div>
  )
}

export default SignUp
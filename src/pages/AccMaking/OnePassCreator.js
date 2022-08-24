import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const OnePassCreator = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar pswCreater={"true"}/>
      <div className="step1">
      <div className="step1_box">
        <div className="step1_steps">
        <span>STEP 1 OF 3</span>
        </div>
         <div className="step1_heading">
          <h6> Welcome back! <br />
         Joining Netflix is easy.</h6>
         </div>
         <div className="step1_text">
          <p>Enter your password and you'll be watching in no time.</p>
          <h6>Email</h6>
          <span>osamayousuf26@gmail.com</span>
         </div>
         <div className="step1_input">
          <input type="text" placeholder='Enter Your Password' />
          <p>Forgot Your Paswsword?</p>
          <button onClick={() => navigate("/passwordCreater/choosePlan")}>Next</button>
         </div>
      </div>
      </div>
    </div>
  )
}

export default OnePassCreator
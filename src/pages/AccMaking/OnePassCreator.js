import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const OnePassCreator = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar pswCreater={"true"}/>
      <div className="onePassCreater">
      <div className="onePassCreater_box">
        <div className="onePassCreater_steps">
        <span>STEP 1 OF 3</span>
        </div>
         <div className="onePassCreater_heading">
          <h6> Welcome back! <br />
         Joining Netflix is easy.</h6>
         </div>
         <div className="onePassCreater_text">
          <p>Enter your password and you'll be watching in no time.</p>
          <h6>Email</h6>
          <span>osamayousuf26@gmail.com</span>
         </div>
         <div className="onePassCreater_input">
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
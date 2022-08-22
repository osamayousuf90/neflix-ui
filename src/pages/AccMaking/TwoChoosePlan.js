import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const TwoChoosePlan = () => {
  const navigate = useNavigate();
  return (
      <div>
        <Navbar pswCreater={"true"}/>
      <div className="twoChoosePlan">
      <div className="twoChoosePlan_box">
        <div className="twoChoosePlan_steps">
        <i class="fa-regular fa-circle-check"></i>
        <span>STEP 2 OF 3</span>
        </div>
         <div className="twoChoosePlan_heading">
          <h6>Choose Your Plan.</h6>
         </div>
         <div className="twoChoosePlan_text">
          <p><i class="fa-solid fa-check"></i>No commitments, cancel anytime.</p>
          <p><i class="fa-solid fa-check"></i>Everything on Netflix for one low price.</p>
          <p><i class="fa-solid fa-check"></i>No ads and no extra fees. Ever.</p>
         </div>
         <div className="twoChoosePlan_input">
          <button onClick={() => navigate("/passwordCreater/choosePlan/selectSubscription")}>Next</button>
         </div>
      </div>
      </div>
      </div>
  )
}

export default TwoChoosePlan
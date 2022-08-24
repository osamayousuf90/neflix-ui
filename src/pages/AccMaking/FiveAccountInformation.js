import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from 'react-router-dom'


const FiveAccountInformation = () => {

    const visa = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg";
    const masterCard = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
    const americaExpress = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
    const unionPay = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/unionpay.svg"

    const navigate = useNavigate();

  return (
      <div>
          <Navbar pswCreater={"true"}/>
        <div className="step5 container">
        <div className="step5_inner">
            <div className="step5_top">
            <span>STEP 3 OF 3</span> 
            <h6>Set up your credit or debit <br /> card</h6> 
            <div className="step5_visaImgs">
            <img src={visa}/> <img src={masterCard}/> <img src={americaExpress}/> <img src={unionPay}/>           
            </div>      
            <div className="step5_inputForm">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>          
                <input type="text" placeholder='Card Number'/>          
                <input type="text" placeholder='Expiration Date (MM/YY)'/>  
                <input type="text" placeholder='Security Code (CVV)'/>          
            </div>   
                <div className="step5_subscriptionDetail">
                <div className="step5_details">
                    <p> <b>Rs1,100/month</b> <br /> Premium Plan</p>          
                </div> 
                <div className="step5_detailsBtn">
                   <button onClick={() => navigate("/passwordCreater/choosePlan/selectSubscription")}>Change</button>              
                </div>          
                </div>   
                <div className="step5_information">
                <p>Your payments will be processed internationally. Additional bank fees may apply.</p>   

                <h6>By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and
                that you are over 18. Netflix will automatically continue your membership and charge the membership
                fee (currently Rs1,100/month) to your payment method until you cancel. You may cancel at any time to avoid
                future charges.</h6>

                <div className="step5_checkbox">
                <input className='check' type={"checkbox"} />  
                <p>I Agree</p>               
                </div>
                          
                <div className="step5_btn">
                <button>Start Membership</button>  
                </div>                                   
                </div>
            </div>        
        </div>      
        </div>      
    </div>
  )
}

export default FiveAccountInformation
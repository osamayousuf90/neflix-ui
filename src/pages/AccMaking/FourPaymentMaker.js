import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from 'react-router-dom'

const FourPaymentMaker = () => {
    
    const visa = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg";
    const masterCard = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
    const americaExpress = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
    const unionPay = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/unionpay.svg"
   
    const navigate = useNavigate();
  return (
      <div>
          <Navbar pswCreater={"true"}/>
        <div className="step4 container">
            <div className="step4_top">
            <div className="step4_inner">
            <i class="fa-solid fa-lock"></i>
            </div>  
                <div className="step4_content">
                <span>STEP 3 OF 3</span>
                <h6>Choose how to pay</h6>
                <div className="step4_paragraph">
                    <p>Your payment is encrypted and you can change how you pay anytime.</p>  
                     <h6>Secure for peace of mind. Cancel easily online.</h6>     
                </div>       
                </div> 
              </div>    
              <div className="step4_encrypted">
              <p>End-to-end encrypted <i class="fa-solid fa-lock"></i></p>    
              </div>
              <div onClick={() => navigate("/accountDetail")} className="step4_visaBtn">
                <p>Debit or Credit Card <img src={visa}/> <img src={masterCard}/> <img src={americaExpress}/> <img src={unionPay}/></p>  <i class="fa-solid fa-angle-right"></i>
              </div>   
        </div> 
      </div>
  )
}

export default FourPaymentMaker
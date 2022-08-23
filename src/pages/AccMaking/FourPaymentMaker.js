import React from 'react'
import Navbar from "../../components/Navbar/Navbar";

const FourPaymentMaker = () => {
    
    const visa = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg";
    const masterCard = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
    const americaExpress = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
    const unionPay = "https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/unionpay.svg"
  return (
      <div>
          <Navbar pswCreater={"true"}/>
        <div className="fourPaymentMaker container">
            <div className="fourPaymentMaker_top">
            <div className="fourPaymentMaker_inner">
            <i class="fa-solid fa-lock"></i>
            </div>  
                <div className="fourPaymentMaker_content">
                <span>STEP 3 OF 3</span>
                <h6>Choose how to pay</h6>
                <div className="fourPaymentMaker_paragraph">
                    <p>Your payment is encrypted and you can change how you pay anytime.</p>  

                     <h6>Secure for peace of mind. Cancel easily online.</h6>     
                </div>       
                </div> 
              </div>    

              <div className="fourPaymentMaker_encrypted">
              <p>End-to-end encrypted <i class="fa-solid fa-lock"></i></p>    
              </div>
              <div className="fourPaymentMaker_visaBtn">
                <p>Debit or Credit Card <img src={visa}/> <img src={masterCard}/> <img src={americaExpress}/> <img src={unionPay}/></p>  <i class="fa-solid fa-angle-right"></i>
              </div>   
        </div> 
      </div>
  )
}

export default FourPaymentMaker
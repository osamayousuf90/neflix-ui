import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Threestep3 = () => {
   const [clicked, setClicked] = useState("Basic");
   const navigate = useNavigate();

  return (
      <div>
        <Navbar pswCreater={"true"}/>
         <div className="step3 container">
          <div className="step3_top">
            <span>STEP 2 OF 3</span>
             <div className="step3_heading">
                <h6>Choose the plan that’s right for you</h6>
             </div>
         <div className="step3_text">
            <p><i class="fa-solid fa-check"></i>No commitments, cancel anytime.</p>
            <p><i class="fa-solid fa-check"></i>Everything on Netflix for one low price.</p>
            <p><i class="fa-solid fa-check"></i>No ads and no extra fees. Ever.</p>
             </div>
          </div>

            <div className="step3_parentBox">
                <div onClick={() => setClicked("Mobile")} className={clicked === "Mobile" ? "step3_box" : "step3_notSelectedBox"}>Mobile</div>
                <div onClick={() => setClicked("Basic")} className={clicked === "Basic" ? "step3_box" : "step3_notSelectedBox"}>Basic</div> 
                <div onClick={() => setClicked("Standard")} className={clicked === "Standard" ? "step3_box" : "step3_notSelectedBox"}>Standard</div> 
                <div onClick={() => setClicked("Premium")} className={clicked === "Premium" ? "step3_box" : "step3_notSelectedBox"}>Premium</div> 
            </div>

            <div className="step3_list">
            <div className="step3_content1"><h6>Monthly Price</h6></div>
            <div className="step3_content2"><h6 className={clicked === "Mobile" ? "step3_listClicked" : "step3_notListClicked"}>Rs.250</h6></div>
            <div className="step3_content3"><h6 className={clicked === "Basic" ? "step3_listClicked" : "step3_notListClicked"}>Rs.450</h6></div>
            <div className="step3_content4"><h6 className={clicked === "Standard" ? "step3_listClicked" : "step3_notListClicked"}>Rs.800</h6></div>
            <div className="step3_content5"><h6 className={clicked === "Premium" ? "step3_listClicked" : "step3_notListClicked"}>Rs.1100</h6></div>
            </div>

            <hr />

            <div className="step3_list">
            <div className="step3_content1"><h6>Video Quality</h6></div>
            <div className="step3_content2"><h6 className={clicked === "Mobile" ? "step3_listClicked" : "step3_notListClicked"}>Good</h6></div>
            <div className="step3_content3"><h6 className={clicked === "Basic" ? "step3_listClicked" : "step3_notListClicked"}>Good</h6></div>
            <div className="step3_content4"><h6 className={clicked === "Standard" ? "step3_listClicked" : "step3_notListClicked"}>Better</h6></div>
            <div className="step3_content5"><h6 className={clicked === "Premium" ? "step3_listClicked" : "step3_notListClicked"}>Best</h6></div>
            </div>


            <hr />


            <div className="step3_list">
            <div className="step3_content1"><h6>Resolution</h6></div>
            <div className="step3_content2"><h6 className={clicked === "Mobile" ? "step3_listClicked" : "step3_notListClicked"}>480p</h6></div>
            <div className="step3_content3"><h6 className={clicked === "Basic" ? "step3_listClicked" : "step3_notListClicked"}>480p</h6></div>
            <div className="step3_content4"><h6 className={clicked === "Standard" ? "step3_listClicked" : "step3_notListClicked"}>1080p</h6></div>
            <div className="step3_content5"><h6 className={clicked === "Premium" ? "step3_listClicked" : "step3_notListClicked"}>4K+HDR</h6></div>
            </div>


            <hr />


            <div className="step3_list devices">
            <div className="step3_content1"><h6>Devices You Can Watch</h6></div>
            <div className="step3_content2"><h6 className={clicked === "Mobile" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-mobile-button"></i>Phone</h6>  <h6 className={clicked === "Mobile" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-tablet"></i>Tablet</h6></div>
            <div className="step3_content3"><h6 className={clicked === "Basic" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-mobile-button"></i>Phone</h6>  <h6 className={clicked === "Basic" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-tablet"></i>Tablet</h6> <h6 className={clicked === "Basic" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-desktop"></i>Laptop</h6>  <h6 className={clicked === "Basic" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-display"></i>Tv</h6></div>
            <div className="step3_content4"><h6 className={clicked === "Standard" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-mobile-button"></i>Phone</h6>  <h6 className={clicked === "Standard" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-tablet"></i>Tablet</h6> <h6 className={clicked === "Standard" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-desktop"></i>Laptop</h6>  <h6 className={clicked === "Standard" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-display"></i>Tv</h6></div>
            <div className="step3_content5"><h6 className={clicked === "Premium" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-mobile-button"></i>Phone</h6>  <h6 className={clicked === "Premium" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-tablet"></i>Tablet</h6> <h6 className={clicked === "Premium" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-desktop"></i>Laptop</h6>  <h6 className={clicked === "Premium" ? "step3_listClicked" : "step3_notListClicked"}><i class="fa-solid fa-display"></i>Tv</h6></div>
            </div>

           
           <div className="step3_termsOfUse">
              <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all <br /> content is available in all resolutions. See our Terms of Use for more details.</p>

              <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, <br /> and 1 with Basic and Mobile.</p>
           </div>  

           <div className="step3_button">
              <button onClick={() => navigate("/paymentMaker")}>Next</button>
            </div>
            
         </div>
      </div>
  )
}

export default Threestep3
import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { useState } from 'react';

const ThreePackageChooser = () => {
   const [clicked , setClicked] = useState("Basic");

  return (
      <div>
        <Navbar pswCreater={"true"}/>
         <div className="packageChooser container">
          <div className="packageChooser_top">
            <span>STEP 2 OF 3</span>
             <div className="packageChooser_heading">
                <h6>Choose the plan that’s right for you</h6>
             </div>
         <div className="packageChooser_text">
            <p><i class="fa-solid fa-check"></i>No commitments, cancel anytime.</p>
            <p><i class="fa-solid fa-check"></i>Everything on Netflix for one low price.</p>
            <p><i class="fa-solid fa-check"></i>No ads and no extra fees. Ever.</p>
             </div>
          </div>

            <div className="packageChooser_parentBox">
                <div onClick={() => setClicked("Mobile")} className={clicked === "Mobile" ? "packageChooser_box" : "packageChooser_notSelectedBox"}>Mobile</div>
                <div onClick={() => setClicked("Basic")} className={clicked === "Basic" ? "packageChooser_box" : "packageChooser_notSelectedBox"}>Basic</div> 
                <div onClick={() => setClicked("Standard")} className={clicked === "Standard" ? "packageChooser_box" : "packageChooser_notSelectedBox"}>Standard</div> 
                <div onClick={() => setClicked("Premium")} className={clicked === "Premium" ? "packageChooser_box" : "packageChooser_notSelectedBox"}>Premium</div> 
            </div>

            <div className="packageChooser_list">
            <div className="packageChooser_content1"><h6>Monthly Price</h6></div>
            <div className="packageChooser_content2"><h6 className={clicked === "Mobile" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>Rs.250</h6></div>
            <div className="packageChooser_content3"><h6 className={clicked === "Basic" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>Rs.450</h6></div>
            <div className="packageChooser_content4"><h6 className={clicked === "Standard" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>Rs.800</h6></div>
            <div className="packageChooser_content5"><h6 className={clicked === "Premium" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>Rs.1100</h6></div>
            </div>

            <hr />

            <div className="packageChooser_list">
            <div className="packageChooser_content1"><h6>Video Quality</h6></div>
            <div className="packageChooser_content2"><h6 className={clicked === "Mobile" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>Good</h6></div>
            <div className="packageChooser_content3"><h6 className={clicked === "Basic" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>Good</h6></div>
            <div className="packageChooser_content4"><h6 className={clicked === "Standard" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>Better</h6></div>
            <div className="packageChooser_content5"><h6 className={clicked === "Premium" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>Best</h6></div>
            </div>


            <hr />


            <div className="packageChooser_list">
            <div className="packageChooser_content1"><h6>Resolution</h6></div>
            <div className="packageChooser_content2"><h6 className={clicked === "Mobile" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>480p</h6></div>
            <div className="packageChooser_content3"><h6 className={clicked === "Basic" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>480p</h6></div>
            <div className="packageChooser_content4"><h6 className={clicked === "Standard" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>1080p</h6></div>
            <div className="packageChooser_content5"><h6 className={clicked === "Premium" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}>4K+HDR</h6></div>
            </div>


            <hr />


            <div className="packageChooser_list devices">
            <div className="packageChooser_content1"><h6>Devices You Can Watch</h6></div>
            <div className="packageChooser_content2"><h6 className={clicked === "Mobile" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-mobile-button"></i>Phone</h6>  <h6 className={clicked === "Mobile" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-tablet"></i>Tablet</h6></div>
            <div className="packageChooser_content3"><h6 className={clicked === "Basic" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-mobile-button"></i>Phone</h6>  <h6 className={clicked === "Basic" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-tablet"></i>Tablet</h6> <h6 className={clicked === "Basic" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-desktop"></i>Laptop</h6>  <h6 className={clicked === "Basic" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-display"></i>Tv</h6></div>
            <div className="packageChooser_content4"><h6 className={clicked === "Standard" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-mobile-button"></i>Phone</h6>  <h6 className={clicked === "Standard" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-tablet"></i>Tablet</h6> <h6 className={clicked === "Standard" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-desktop"></i>Laptop</h6>  <h6 className={clicked === "Standard" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-display"></i>Tv</h6></div>
            <div className="packageChooser_content5"><h6 className={clicked === "Premium" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-mobile-button"></i>Phone</h6>  <h6 className={clicked === "Premium" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-tablet"></i>Tablet</h6> <h6 className={clicked === "Premium" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-desktop"></i>Laptop</h6>  <h6 className={clicked === "Premium" ? "packageChooser_listClicked" : "packageChooser_notListClicked"}><i class="fa-solid fa-display"></i>Tv</h6></div>
            </div>
         </div>
      </div>
  )
}

export default ThreePackageChooser
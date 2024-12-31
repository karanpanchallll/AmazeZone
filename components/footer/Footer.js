import React from 'react';
import "./Footer.css";

const Footer = () => {

    const year =new Date().getFullYear();
  return (
   <footer>
        <div class="footer_container">
            <div class="footr_details_one">
                <h3>Get to know us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
            </div>
            <div class="footr_details_one">
                <h3>Connect with us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                
            </div>
            <div class="footr_details_one forres">
                <h3>Make money with us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div class="footr_details_one forres">
                <h3>Make money with us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
        <div class="lastdetails">
            <img src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png" alt=""/>
            <p>Conditions of Use & Sale &nbsp; &nbsp; &nbsp; Privacy Notice &nbsp; &nbsp; &nbsp; Interest-Based Ads &nbsp; &nbsp; &nbsp; © 996-{year}, Amazon.com, Inc. or its affiliates</p>
        </div>
   </footer>
  )
}

export default Footer

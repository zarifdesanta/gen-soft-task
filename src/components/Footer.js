import React from "react";
import "../styles/Footer.css";

import Icon1 from "../assets/Icon/visa 1.svg";
import Icon2 from "../assets/Icon/apple-pay 1.svg";
import Icon3 from "../assets/Icon/visa 2.svg";
import Icon4 from "../assets/Icon/diners-club 1.svg";
import Icon5 from "../assets/Icon/amex 1.svg";
import Icon6 from "../assets/Icon/paypal 1.svg";
import Icon7 from "../assets/Icon/american-express (1) 1.svg";

import Telephone from "../assets/Icon/telephone (2) 1.svg";
import Email from "../assets/Icon/email 1.svg";

import Facebook from "../assets/Icon/facebook (4).svg";
import Twitter from "../assets/Icon/twitter (4).svg";
import LinkedIn from "../assets/Icon/linkedin (3).svg";
import Instagram from "../assets/Icon/instagram-logo (1).svg";

import Logo from "../assets/Logo/Valuetainment-red.svg";

function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="container">
        <div className="sub-section">
          <div className="logo">
            <div>
              <img src={Logo}></img>
            </div>
            <p>VTMERCH</p>
          </div>
          <div className="separator"></div>
          <div className="grid">
            <div className="subscribe">
              <p>
                Subscribe and be the first to receive notifications about our
                upcoming releases and the latest news.
              </p>
              <button className="email-btn">Enter your email</button>
              <button className="sub-btn">Subscribe</button>
            </div>
            <div>
              <p className="header">Customer Services</p>
              <div className="links">
                <a href="#">About Us</a>
                <a href="#">Search</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact Us</a>
                <a href="#">Terms of Service</a>
                <a href="#">Refund Policy</a>
                <a href="#">Track Order</a>
              </div>
            </div>
            <div>
              <p className="header">Products</p>
              <div className="links">
                <a href="#">Featured products</a>
                <a href="#">Bestseller</a>
                <a href="#">Latest product</a>
                <a href="#">All collections</a>
                <a href="#">All products</a>
              </div>
            </div>
            <div>
              <p className="header">Contact Us</p>
              <div className="contact-us">
                <p>
                  Available between 8AM to 8PM. Ready to answer your questions.
                </p>
                <p>
                  <img src={Telephone}></img>013456789
                </p>
                <p>
                  <img src={Email}></img>store@valuetainment.com
                </p>
                <div className="social-icons">
                  <a href="#">
                    <img src={Facebook}></img>
                  </a>
                  <a href="#">
                    <img src={Twitter}></img>
                  </a>
                  <a href="#">
                    <img src={LinkedIn}></img>
                  </a>
                  <a href="#">
                    <img src={Instagram}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="all-rights-reserved-row">
            <p>© 2024 Valuetainment Store. All rights reserved.</p>
            <div className="icons">
              <a href="#">
                <img src={Icon1}></img>
              </a>
              <a href="#">
                <img src={Icon2}></img>
              </a>
              <a href="#">
                <img src={Icon3}></img>
              </a>
              <a href="#">
                <img src={Icon4}></img>
              </a>
              <a href="#">
                <img src={Icon5}></img>
              </a>
              <a href="#">
                <img src={Icon6}></img>
              </a>
              <a href="#">
                <img src={Icon7}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

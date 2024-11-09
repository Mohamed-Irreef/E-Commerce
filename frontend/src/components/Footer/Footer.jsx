import React from "react";
import "./Footer.css";
import { AzzueLogo } from "../../assets/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Payment } from "../../assets/Images";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscription">
        <div className="head">
        <div className="subscribtion-head">
          {" "}
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Signup to news letter</p>
        </div>
        <p className="rs">...and recieve ₹799 coupon for shopping.</p>
        <div className="subscription-input">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        </div>
      </div>
      <div className="col1-footer">
        <div className="footer-logo">
          <img src={AzzueLogo} alt="" />
        </div>
        <p>
          Azzu Shop offers a curated selection of stylish men's clothing,
          blending quality with affordability. From casual to formal, our
          collection suits every occasion, helping you elevate your wardrobe
          effortlessly.
        </p>
        <h4>Follow Me</h4>

        <div className="footer-social">
          <span className="social-icon">
            <FontAwesomeIcon
              icon={faFacebook}
              color="#1877F2"
              style={{ fontSize: "25px" }}
            />
          </span>
          <span className="social-icon">
            <FontAwesomeIcon
              icon={faTwitter}
              className="#1DA1F2"
              style={{ fontSize: "25px" }}
            />
          </span>
          <span className="social-icon">
            <FontAwesomeIcon
              icon={faInstagram}
              color="#C13584"
              style={{ fontSize: "25px" }}
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="#25D366"
              style={{ fontSize: "25px" }}
            />
          </span>
        </div>
      </div>

      <div className="col2-footer">
        <h3>Addrress</h3>
        <ul>
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Provacy Policy</li>
          <li>Terms & Condition</li>
          <li>Contact Us</li>
          <li>Support Center</li>
        </ul>
      </div>

      <div className="col3-footer">
        <h3>My Account</h3>
        <ul>
          <li>Sign In</li>
          <li>View Cart</li>
          <li>My Whistlist</li>
          <li>Track My Order</li>
          <li>Help</li>
          <li>Order</li>
        </ul>
      </div>

      <div className="col4-footer">
        <h3>Company Addrress</h3>
        <ul>
          <li>
            <span>Address:</span> Wellington Road, Street 32, San Francisco
          </li>
          <li>
            <span>Phone:</span>+91 892682514 / +91 9037252710
          </li>
          <li>
            <span>Hours:</span> 10 AM - 10 PM, Mon-Sat
          </li>
        </ul>
      </div>

      <div className="col5-footer">
        <p class="footer-text">
          &copy; 2024 Azzu Shop. All rights reserved. |{" "}
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>{" "}
        </p>
        <img src={Payment} alt="" className="payment-img" />
      </div>
    </div>
  );
};

export default Footer;

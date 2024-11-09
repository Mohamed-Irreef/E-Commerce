// src/components/Navbar/Navbar.jsx
import { useState } from "react";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faUser,
  faHeart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { AzzueLogo } from "../../assets/Images.js"; // Ensure this path is correct

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={AzzueLogo} alt="Logo" />
        </div>

        <ul className="nav-menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/product">PRODUCT</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        <div className="navMenu-icon">
          <div className="search-box">
            <button className="btn-search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
            />
          </div>

          <FontAwesomeIcon icon={faUser} className="nav-icon user-icon" />

          <div className="whistlist">
            <span>3</span>
            <FontAwesomeIcon
              icon={faHeart}
              className="nav-icon whistlist-icon"
            />
          </div>

          <div className="cart">
            <span>5</span>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="nav-icon  cart-icon"
            />
          </div>

          <div className="menu-bar">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setSideBar((prev) => !prev)}
            />
          </div>
        </div>
      </nav>

      <div className="sub-nav">
        <input type="text" placeholder="search here..."/>
        <FontAwesomeIcon icon={faSearch} className="sub-search-icon" />
        <button>Search</button>
      </div>

      {/* <span className="close-icon">
            <FontAwesomeIcon icon={faTimes} className="close-icon"/>
            </span> */}

      {sideBar && (
        <div className="side-bar">
          <div className="menu-head">
            <h3>Menu</h3>
          </div>

          <div className="sideBar-menu">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/product">PRODUCT</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>

          <div className="social-media">
            <span className="social-icon"><FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2"/></span>
            <span className="social-icon"><FontAwesomeIcon icon={faTwitter} size="2x" className="#1DA1F2"/></span>
            <span className="social-icon"><FontAwesomeIcon icon={faInstagram} size="2x" color="#C13584"/></span>
            <span><FontAwesomeIcon icon={faWhatsapp} size="2x" color="#25D366" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

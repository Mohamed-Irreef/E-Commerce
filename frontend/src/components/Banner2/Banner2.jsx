import React from "react";
import "./Banner2.css";
import { banner3 } from "../../assets/Images";

const Banner2 = () => {
  return (
    <div className="banner2-container">
      <img src={banner3} alt="" />
      

      <button className="shop-now">SHOP NOW</button>
    </div>
  );
};

export default Banner2;

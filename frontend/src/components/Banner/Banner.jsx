import React, { useState, useEffect } from "react";
import "./Banner.css";
import { banner1 } from "../../assets/Images";

const Banner = () => {
  
  const targetTime = 1 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000; 
  const endTime = Date.now() + targetTime; 

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = endTime - now;

  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, difference };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-container">
      <img src={banner1} alt="Banner" />

      <div className="banner-contents">
        <div className="inner-head1">
          <h1>Deal Of The Day</h1>
          <p>Limited Quantities</p>
        </div>
        <div className="inner-head2">
          <h3 >Summer Collection New Modern Design</h3>
          <p>
            <span>₹1999</span>
          </p>
        </div>
        <div className="timmer-box">
          <h4>Hurry Up! Offer Ends In</h4>
          <div className="timmer">
            <div className="days box">
              <div className="num-days">{timeLeft.days}</div>
              <p>{timeLeft.days > 1 ? "Days" : "Day"}</p>
            </div>
            <span>:</span>
            <div className="hours box">
              <div className="num-days">{timeLeft.hours}</div>
              <p>Hours</p>
            </div>
            <span>:</span>
            <div className="mins box">
              <div className="num-days">{timeLeft.minutes}</div>
              <p>Mins</p>
            </div>
            <span>:</span>
            <div className="secs box">
              <div className="num-days">{timeLeft.seconds}</div>
              <p>Secs</p> {/* Updated label to 'Secs' for clarity */}
            </div>
          </div>
          <div className="shop-button">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

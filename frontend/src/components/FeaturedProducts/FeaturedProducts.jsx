import React, { useRef, useEffect } from "react";
import "./FeaturedProducts.css";
import {
  popular1,
  popular2,
  popular3,
  popular4,
  popular5,
  popular6,
  popular7,
  popular8,
  popular9,
  popular10,
  popular11,
  popular12,
} from "../../assets/Images";

const FeaturedProducts = () => {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null); // Ref to store the interval
  const productsCount = 12; // Total number of products
  const scrollAmount = 400; // Adjust to scroll two images (assuming each image has a width of 200px)

  // Function to handle scrolling
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Check if we've reached the end
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        // Reset to the start
        setTimeout(() => {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }, 300); // Add a slight delay before resetting
      }
    }
  };

  // Effect to handle automatic scrolling
  useEffect(() => {
    scrollIntervalRef.current = setInterval(() => {
      scroll("right"); // Scroll right every 3 seconds
    }, 3000); // Change 3000 to adjust the scroll interval

    // Clear the interval on component unmount
    return () => clearInterval(scrollIntervalRef.current);
  }, []);

  return (
    <div className="featured-products">
      <h2 className="animated-heading">
        <span className="highlight">Popular </span>
        <span className="categories">Categories</span>
      </h2>

      <div className="arrow-buttons">
        <button onClick={() => scroll("left")} className="left">&lt;</button>
        <button onClick={() => scroll("right")} className="right">&gt;</button>
      </div>

      <div className="scroll-product" ref={scrollContainerRef}>
        {[
           { image: popular1, name: "Crew Neck T-shirt" },
           { image: popular2, name: "V-Neck T-shirt" },
           { image: popular3, name: "Graphic T-shirt" },
           { image: popular4, name: "Henley T-shirt" },
           { image: popular5, name: "Pocket T-shirt" },
           { image: popular6, name: "Long Sleeve T-shirt" },
           { image: popular7, name: "Raglan T-shirt" },
           { image: popular8, name: "Muscle T-shirt" },
           { image: popular9, name: "Crop T-shirt" },
           { image: popular10, name: "Oversized T-shirt" },
           { image: popular11, name: "Bamboo T-shirt" },  
           { image: popular12, name: "Performance T-shirt" },
        ].map((item, index) => (
          <div key={index} className="prod-card">
            <div className="prod-image">
              <img src={item.image} alt={`Product ${index + 1}`} />
            </div>
            <p>{ item.name}</p>
            {/* <button>View</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

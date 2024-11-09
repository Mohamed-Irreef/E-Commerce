import React from "react";
import "./GalleryGrid.css";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery11,
  gallery12,
} from "../../assets/Images";

const GalleryGrid = () => {
  return (
    <div>
      <div className="grid-container">
        <div
          className="grid-item grid-item1"
          style={{ backgroundImage: `url(${gallery1})` }}
        ></div>
        <div
          className="grid-item grid-item2"
          style={{ backgroundImage: `url(${gallery2})` }}
        ></div>
        <div
          className="grid-item grid-item3"
          style={{ backgroundImage: `url(${gallery11})` }}
        ></div>
        <div
          className="grid-item grid-item4"
          style={{ backgroundImage: `url(${gallery12})` }}
        ></div>
      </div>
    </div>
  );
};

export default GalleryGrid;

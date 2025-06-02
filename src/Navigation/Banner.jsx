import React from "react";
import "./banner.css";

const Banner = ({ image, buttonText, heading, subheading }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner-content">
        <button className="banner-btn">{buttonText}</button>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export default Banner;
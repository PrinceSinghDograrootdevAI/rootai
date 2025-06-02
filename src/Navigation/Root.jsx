import React from "react";
import "./root.css";

const Root = ({ image, buttonText, heading, subheading }) => {
  return (
    <div
      className="root"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="root-content">
        <button className="root-btn">{buttonText}</button>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export default Root;

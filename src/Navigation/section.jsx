import React from "react";
import "./section.css";

const Section = ({ image1, image2, buttonText }) => {
  return (
    <div className="section">
      {/* Icon with blue dot on border */}
      <div className="section-icon">
        <div className="icon-circle">
    <div className="background-circle">
    <img src={image1} alt="Icon" className="icon-image" />
    <span className="blue-dot"></span>
    </div>
  </div>
      </div>

      {/* Text */}
      <div className="section-text">
        <p>
          <strong>
            Emerging technologies such as{" "}
            <span className="highlight">artificial intelligence</span>,
            <br />
            GenAI and the IoT are transforming the business.
          </strong>
        </p>
      </div>

      {/* Diagram */}
      <div className="section-diagram">
        <img src={image2} alt="Diagram" className="diagram" />
      </div>

      {/* Button */}
      <div className="section-button">
        <button className="contact-btn">{buttonText}</button>
      </div>
    </div>
  );
};

export default Section
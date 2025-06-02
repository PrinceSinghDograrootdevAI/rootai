
import React from "react";
import "./Services.css";
import Banner from "./Banner";
import Section from "./section";
import Card from "./card";
import serviceBanner from "../Pictures/image.png";
import img1 from "../Pictures/serv1.svg.png";
import img2 from "../Pictures/Vector.png";
import sectionImage from "../Pictures/section.png";
import diagramImage from "../Pictures/Diagram.png";

import TechStack from "./TechStack";
import Discovery from "./Discovery";

const Service = () => {
  return (
    <div>
      <Banner
        image={serviceBanner}
        buttonText="Our Services"
        heading="Premium Services"
        subheading="The best service: Identify the service you need"
      />

      <Section
        image1={img1}
        paragraph="Emerging technologies such as artificial intelligence, GenAI and the IOT are transforming the business."
        image2={img2}
        buttonText="Get in Touch"
      />

      <div className="lineContainer">
        <div className="line">
          <div className="edge-line"></div>
          <div className="middle-line"></div>
          <div className="edge-line"></div>
        </div>
      </div>

      <div className="card-wrapper">
        <Card
          heading="Chatbot Development:"
          definition="Advanced LLM chatbots leveraging Retrieval-Augmented Generation for improved user interactions."
          buttonText="Learn More"
          points={[
            "NLP & Multimodal Integration.",
            "Comprehensive Cross-Platform Compatibility.",
            "Enhanced User Personalization.",
            "Customizable Deployment & Monitoring.",
          ]}
        />
        <Card
          heading="Chatbot Development:"
          definition="Advanced LLM chatbots leveraging Retrieval-Augmented Generation for improved user interactions."
          buttonText="Learn More"
          points={[
            "NLP & Multimodal Integration.",
            "Comprehensive Cross-Platform Compatibility.",
            "Enhanced User Personalization.",
            "Customizable Deployment & Monitoring.",
          ]}
        />
        <Card
          heading="Chatbot Development:"
          definition="Advanced LLM chatbots leveraging Retrieval-Augmented Generation for improved user interactions."
          buttonText="Learn More"
          points={[
            "NLP & Multimodal Integration.",
            "Comprehensive Cross-Platform Compatibility.",
            "Enhanced User Personalization.",
            "Customizable Deployment & Monitoring.",
          ]}
        />
      </div>

      <div className="section-image-wrapper">
        <img src={sectionImage} alt="Section Design" className="section-image" />
      </div>

      <TechStack />

      <Discovery /> 
    </div>
  );
};

export default Service;

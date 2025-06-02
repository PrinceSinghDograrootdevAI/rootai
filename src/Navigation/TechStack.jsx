import React from "react";
import "./TechStack.css";

const technologies = [
  { name: "TensorFlow", color: "white", border: "orange", position: { top: '20px', left: '1%' }, rotate: -18 },
  { name: "PyTorch", color: "white", position: { top: '20px', left: '20%' }, rotate: 8.28 },
  { name: "Scikit-learn", color: "white", border: "orange", position: { top: '30px', left: '38%' }, rotate: -18 },
  { name: "LLM", color: "black", position: { top: '24px', left: '57%' }, rotate: 9.28},
  { name: "Keras", color: "white", position: { top: '110px', left: '6%' }, rotate: 10.28 },
  { name: "OpenCV", color: "white", border: "orange", position: { top: '130px', left: '22.5%' }, rotate: -23},
  { name: "spaCy", color: "black", position: { top: '91px', left: '49%' }, rotate: 4 },
  { name: "Hugging Face", color: "white", position: { top: '148px', left: '40%' }, rotate: 20 },
  { name: "TensorFlow", color: "orange", position: { top: '165px', left: '58%' }, rotate: -18 },
  { name: "TensorFlow", color: "white", position: { top: '210px', left: '3%' }, rotate: -18 },
  { name: "TensorFlow", color: "white", position: { top: '210px', left: '30%' }, rotate: 0 },
];



const TechStack = () => {
  return (
    <div className="techstack-wrapper">
      <div className="header-container">
        <div className="techstack-subtitle">Our Services</div>
        <div className="title-content">
          <h2 className="techstack-title">
            Our Prime <span>Technology Stack</span>
          </h2>
          <p className="techstack-desc">
            Smart Automation. Real Results. Combat Solutions builds next-gen AI agents that streamline
            operations, boost productivity, and cut costs — from intelligent chatbots to fully automated workflows.
          </p>
        </div>
      </div>

      <div className="tech-pill-container">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`tech-pill ${tech.color}`}
            data-border={tech.border}
            style={{
              transform: `rotate(${tech.rotate}deg)`,
              top: tech.position.top,
              left: tech.position.left,
              right: tech.position.right, 
              bottom: tech.position.bottom
            }}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;



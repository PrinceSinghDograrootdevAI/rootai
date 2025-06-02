import React from "react";
import "./Layout.css";
import serviceImg from "../Pictures/dot.png";

const Layout = () => {
  const cards = [
    {
      title: "PCB Design and Repair",
      description:
        "Expert PCB repair services across various industries, including defence, industrial automation, medical, and railway sectors.",
      tags: ["SBCs", "Communication Cards"],
      image: serviceImg,
    },
    {
      title: "PCB Design and Repair",
      description:
        "Expert PCB repair services across various industries, including defence, industrial automation, medical, and railway sectors.",
      tags: ["SBCs", "Communication Cards"],
      image: serviceImg,
    },
    {
      title: "PCB Design and Repair",
      description:
        "Expert PCB repair services across various industries, including defence, industrial automation, medical, and railway sectors.",
      tags: ["SBCs", "Communication Cards"],
      image: serviceImg,
    },
  ];

  return (
    <div className="layout-container">
      {cards.map((card, index) => (
        <div
          className={`layout-card ${
            index === 1 ? "no-border" : "with-border"
          }`}
          key={index}
        >
          <div className="circle-image">
            <img src={card.image} alt="feature" />
            <span className="blue-dot" />
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <div className="tags">
            {card.tags.map((tag, i) => (
              <span key={i}>• {tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Layout;

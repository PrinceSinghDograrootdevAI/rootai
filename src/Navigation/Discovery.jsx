// import React from 'react';
// import './Discovery.css';
// import layerImage from '../Pictures/layer.png';
// import { FaArrowRight } from 'react-icons/fa';

// const Discovery = () => {
//   return (
//     <div className="prise-wrapper">
//       <div className="prise-inner">
        
//         <div className="prise-right">
//           <button className="enterprise-btn">Our Enterprise</button>
//           <h2 className="prise-heading">
//             How We <span className="highlight-bg">Generative</span> <span className="highlight-blue">AI Services</span>
//           </h2>
//         </div>

      
//         <div className="prise-left">
      
//           <div className="pills-row">
//             <div className="pill active">Discovery</div>
//             <div className="pill">Validate</div>
//             <div className="pill">Technology</div>
//             <div className="pill">Improve</div>
//           </div>

          
//           <h3 className="subtitle">Discovery</h3>

          
//           <div className="info-row">
//             <div className="info-box">
//               <p>
//                 In the discovery phase, our team engages deeply with your stakeholders to grasp your business
//                 objectives, challenges, and industry nuances. This understanding forms the foundation for identifying
//                 areas where generative AI can deliver the most value. We prioritize potential initiatives based on
//                 feasibility, impact, and alignment with your strategic goals.
//               </p>
//             </div>
//             <div className="info-box">
//               <p>
//                 Once we've identified key opportunities, we develop a tailored roadmap outlining the steps for
//                 implementation. This includes selecting the right generative AI technologies, defining success metrics,
//                 and preparing your data infrastructure. Our goal is to ensure a seamless and impactful integration into
//                 your business lifecycle.
//               </p>
//             </div>
//             <div className="info-box image-box">
//               <img src={layerImage} alt="Decorative Layer" />
//             </div>
//           </div>

          
//           <div className="button-row">
//             <button className="talk-btn">Talk to Expert</button>
//             <button className="see-more-btn">See More <FaArrowRight /></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discovery;
// import React from "react";
// import "./Discovery.css";
// import last from "../Pictures/last.png";
// import layer from "../Pictures/layer.png";

// const Discovery = () => {
//   return (
//     <div className="discovery-container">
//       <img src={last} alt="background" className="last-img" />

//       <div className="discovery-content">
//         <p className="enterprise-tag">Our Enterprise</p>
//         <h1 className="discovery-heading">
//           How We Generative <span>AI Services</span>
//         </h1>
//         <div className="horizontal-line"></div>

//         <div className="discovery-details">
//           <div className="text-block">
//             <h3>Discovery</h3>
//             <p>
//               In the discovery phase, our team engages deeply with your
//               stakeholders to grasp your business objectives, challenges, and
//               industry nuances. We conduct thorough analyses to pinpoint the
//               areas where customized Generative AI solutions can create the most
//               significant impact. This collaborative approach allows us to build
//               a comprehensive understanding of your needs, ensuring that our
//               solutions are aligned with your strategic goals.
//             </p>
//             <p>
//               Once we've identified key opportunities, we develop a tailored
//               roadmap outlining the steps for implementation. This roadmap
//               serves as a guide, detailing timelines, milestones, and success
//               metrics. By setting clear expectations from the outset, we foster
//               a collaborative environment that encourages open communication and
//               innovation throughout the project lifecycle.
//             </p>

//             <div className="buttons">
//               <button className="talk-btn">Talk To Experts</button>
//               <button className="see-more-btn">See More →</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <img src={layer} alt="layer" className="layer-img" />
//     </div>
//   );
// };

// export default Discovery;
// import React from "react";
// import "./Discovery.css";
// import last from "../Pictures/last.png";
// import layer from "../Pictures/layer.png";

// const Discovery = () => {
//   return (
//     <div className="discovery-container">
//       <img src={last} alt="background" className="last-img" />

//       <div className="discovery-content">
        
//         <div className="left-section">
//           <p className="enterprise-tag">Our Enterprise</p>

//           <h1 className="discovery-heading">
//             How We Generative <span>AI Services</span>
//           </h1>

//           <h3 className="section-title">Discovery</h3>

//           <p className="description">
//             In the discovery phase, our team engages deeply with your
//             stakeholders to grasp your business objectives, challenges, and
//             industry nuances. We conduct thorough analyses to pinpoint the areas
//             where customized Generative AI solutions can create the most
//             significant impact. This collaborative approach allows us to build a
//             comprehensive understanding of your needs, ensuring that our
//             solutions are aligned with your strategic goals.
//           </p>

//           <p className="description">
//             Once we've identified key opportunities, we develop a tailored
//             roadmap outlining the steps for implementation. This roadmap serves
//             as a guide, detailing timelines, milestones, and success metrics. By
//             setting clear expectations from the outset, we foster a
//             collaborative environment that encourages open communication and
//             innovation throughout the project lifecycle.
//           </p>

//           <div className="buttons">
//             <button className="talk-btn">Talk To Experts</button>
//             <button className="see-more-btn">See More →</button>
//           </div>
//         </div>

    
//         <div className="right-section">
//           <div className="nav-tabs">
//             <button className="tab active">Discovery</button>
//             <button className="tab">Validate</button>
//             <button className="tab">Technology</button>
//             <button className="tab">Improve</button>
//           </div>
//           <img src={layer} alt="visual" className="layer-img" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discovery;
import React from "react";
import "./Discovery.css";
import layer from "../pictures/layer.png";   // Blue 3D image (main visual)
import last from "../pictures/vector.png";     // Grey background pattern

const Discovery = () => {
  return (
    <div className="discovery-section">
      <img src={last} alt="Background Layer" className="background-layer" />

      <div className="discovery-header">
        <button className="enterprise-btn">Our Enterprise</button>

        <div className="heading-tabs">
          <h2>
            <span className="black-text">How We Generative </span>
            <span className="blue-text">AI Services</span>
          </h2>
          <div className="tabs">
            <button className="active-tab">Discovery</button>
            <button className="active-tab">Validate</button>
            <button className="active-tab">Technology</button>
            <button className="active-tab">Improve</button>
          </div>
        </div>
      </div>

      <div className="discovery-content">
        <div className="text-content">
          <h3>Discovery</h3>
          <div className="paragraphs">
            <p>
              In the discovery phase, our team engages deeply with your stakeholders
              to grasp your business objectives, challenges, and industry nuances.
              We conduct thorough analyses to pinpoint the areas where customized
              Generative AI solutions can create the most significant impact. This
              collaborative approach allows us to build a comprehensive understanding
              of your needs, ensuring that our solutions are aligned with your
              strategic goals.
            </p>
            <p>
              Once we’ve identified key opportunities, we develop a tailored roadmap
              outlining the steps for implementation. This roadmap serves as a guide,
              detailing timelines, milestones, and success metrics. By setting clear
              expectations from the outset, we foster a collaborative environment that
              encourages open communication and innovation throughout the project lifecycle.
            </p>
          </div>

          <div className="btn-group">
            <button className="primary-btn">Talk To Experts</button>
            <button className="secondary-btn">
              See More <span>→</span>
            </button>
          </div>
        </div>

        <div className="image-content">
          <img src={layer} alt="3D Discovery Visual" />
        </div>
      </div>
    </div>
  );
};

export default Discovery;
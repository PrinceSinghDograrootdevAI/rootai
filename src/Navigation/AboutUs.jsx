import React from 'react';
import './AboutUs.css';
import Root from './Root';
import about from "../Pictures/about.png";
import Layout from "./layout";
import TechStack from "./TechStack"; 
import Robust from "./robust";
import Teamimages from './Teamimages';
const AboutUs = () => {
  return (
    <div>
      <Root 
        image={about}
        buttonText="About Us"
        heading="root.ai"
        subheading={`AI-Powered Intelligent Surveillance and\ncommunication systems`}
      />
      <Layout />
      <TechStack /> 
      <Teamimages />
      <Robust />

    </div>
  );
};

export default AboutUs;


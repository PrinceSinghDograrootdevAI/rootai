import React from 'react'
import {useRef} from 'react';
import slide1 from '../../Pictures/slide1.gif';
import slide2 from '../../Pictures/slide2.jpg';
import slide3 from '../../Pictures/slide3.jpg';
import slide4 from '../../Pictures/slide4.jpg';
import slide5 from '../../Pictures/slide5.gif';
import slide6 from '../../Pictures/slide6.jpg';
import CaseStudies from '../../Pictures/CaseStudies.png';
import './slide.css';
const slide = () => {
      const caseStudyRef = useRef(null);
    const scroll = (direction, type) => {
         const ref = type === 'case' ? caseStudyRef : testimonialRef;
       
        const { current } = ref;
        const scrollAmount = 700;
    
        if (direction === 'left') {
          current.scrollLeft -= scrollAmount;
        } else {
          current.scrollLeft += scrollAmount;
        }
      const fileInputRef = useRef(null);
    
    
    
      
      };
  return (
    <>
    <div className='section1'>
            <div className="section11">
              <div className="section111">
                <div className='section111para1'><p>Our Latest Projects</p></div>
              </div>
              <div className="section111para"><button className='section111para2'  onClick={() => scroll('left', 'case')}>← Prev</button><button className='section111para3'  onClick={() => scroll('right', 'case')}>Next → </button></div>
              <div className='section2'><img src={CaseStudies}></img><div></div></div>
              {/* &rarr; */}
               <div className="slider-container">
               <div className="slider" ref={caseStudyRef}>
                <div className="slide"><div className="slide1"><img src={slide1} className='slide1image'></img></div>
                                       <div className="slide2">
                                             <div className="slide21"><p className="slide21para1">Rag Based ChatBot</p>
                                                  <p className="slide21para2">AI Solution Application</p></div><div className="slide22"><p>Our custom chatbot has revolutionized our
                                                                                              customer support. It offers quick and
                                                                                              accurate answers, making our website
                                                                                              much more user-friendly and efficient</p></div>
                                                                                              </div>
                                                                                              </div>
                <div className="slide"><div className="slide1"><img src={slide2} className='slide1image'></img></div>
                                      <div className="slide2">
                                             <div className="slide21"><p className="slide21para1">Medical IOT</p>
                                                  <p className="slide21para2">Web Solution</p></div><div className="slide22"><p>Medical IoT refers to the network
                                                                                                                                   of connected medical devices that
                                                                                                                                   gather and transmit health data 
                                                                                                                                   in real-time.</p></div>
                                                                                              </div>
                                       </div>
                <div className="slide"><div className="slide1"><img src={slide3} className='slide1image'></img></div>
                                      <div className="slide2">
                                             <div className="slide21"><p className="slide21para1">Predictive gap analysis</p>
                                                  <p className="slide21para2"> Application</p></div><div className="slide22"><p>Apps for wearables are becoming increasingly
                                                                                                                                popular as wearable technology becomes 
                                                                                                                                more prevalent.</p></div>
                                                                                              </div>
                                      </div>
                <div className="slide"><div className="slide1"><img src={slide4} className='slide1image'></img></div>
                                      <div className="slide2">
                                             <div className="slide21"><p className="slide21para1">Industrial IOT Solution</p>
                                                  <p className="slide21para2">AI Solution </p></div><div className="slide22"><p>Industrial IoT solutions are designed
                                                                                                                                to optimize efficiency, productivity, 
                                                                                                                                and safety in manufacturing operations.</p></div>
                                                                                              </div></div>
                <div className="slide"><div className="slide1"><img src={slide5} className='slide1image'></img></div>
                                      <div className="slide2">
                                             <div className="slide21"><p className="slide21para1">AI-Powered Tender process</p>
                                                  <p className="slide21para2">AI Solution Application</p></div><div className="slide22"><p>Our tailored AI algorithms effectively
                                                                                                                                           processed the massive dataset, extracting
                                                                                                                                           features and categorizing tenders with 
                                                                                                                                           industry-specific precision</p></div>
                                                                                              </div></div>
                <div className="slide"><div className="slide1"><img src={slide6} className='slide1image'></img></div>
                                       <div className="slide2">
                                             <div className="slide21"><p className="slide21para1">Intelligent Document Processing</p>
                                                  <p className="slide21para2">AI Solution </p></div><div className="slide22"><p>Intelligent Document Processing (IDP),
                                                                                                                                Form Parsing, Table Extraction, Data
                                                                                                                                Structuring, Export Automation.</p></div>
                                                                                              </div></div>
               
               </div>
              </div>
            </div>
         
    
          </div>
    </>
  )
}

export default slide
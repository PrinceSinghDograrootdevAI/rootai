import React from 'react';
import {useRef} from 'react';
import './slide2.css';
import greylogo from '../../Pictures/greylogo.png';

import coma from '../../Pictures/coma.png';
import star from '../../Pictures/List.png';
import Reslogo1 from '../../Pictures/reslogo1.png';
import Reslogo2 from '../../Pictures/reslogo2.png';
import Reslogo3 from '../../Pictures/reslogo3.png';

const slide2 = () => {
      const testimonialRef = useRef(null);
        const scroll = (direction, type) => {
             const ref = type === 'case' ? caseStudyRef : testimonialRef;
           
            const { current } = ref;
            const scrollAmount = 700;
        
            if (direction === 'left') {
              current.scrollLeft -= scrollAmount;
            } else {
              current.scrollLeft += scrollAmount;
            }
          
        
        
        
          
          };
  return (
    <div>   <div className="sections2">
            <div className="sect">
            <div className="sections21"><b><p className="sections21para1">Testimonials</p></b> </div>
            <div className="section211"><button   className="section211para1" onClick={() => scroll('left', 'test')}>&larr; Prev</button><button className="section211para2" onClick={() => scroll('right', 'test')}>Next &rarr;</button></div>
             <div className="section211para3"><p>What our client says</p></div>
          <div className="slider-container2">
              <div className="slider" ref={testimonialRef}>
                <div className="slidec1">
                  <div className="div1"><img src={coma} className=""></img><img src={star} className=""></img></div>
                  <div className="div2"><p>We are associated with teamfor a past few
                           months for updating and maintaining our 
                           existing web site. It has been a very
                            pleasant and equally professional 
                            experience while working with team.
                            The technical support that we have
                            received during this entire period 
                            is particularly note worthy.</p></div>
                  <div className="div3"><img src={Reslogo1} className="reslogo"></img><div><p>Mukund Bhagwat</p><p>enteki.com</p></div></div>
                </div>
                 <div className="slidec1">
                  <div className="div1" ><img src={coma} className=""></img><img src={star} className=""></img></div>
                  <div className="div2"><p>We have been connected for six months 
                          for technical support, and it has been 
                          a great experience working with the team.</p></div>
                  <div className="div3"><img src={Reslogo2} className="reslogo"></img><div><p>Bobby Thomas</p><p>imfpa.org</p></div></div>
                </div>
                 <div className="slidec1">
                  <div className="div1"><img src={coma} className=""></img><img src={star} className=""></img></div>
                  <div className="div2"><p>Their high level of customer service
                          complemented their technical expertise.
                          They were responsive, supportive, and 
                          communicative.</p></div>
                  <div className="div3"><img src={Reslogo3} className="reslogo"></img><div><p>Charmaine</p><p>mammothtech.co.za</p></div></div>
                </div>
                <div className="slidec1">
                  <div className="div1"><img src={coma} className=""></img><img src={star} className=""></img></div>
                  <div className="div2"><p>We had the opportunity to work with root
                          AI on a range of AI-powered projects, 
                          including image processing and intelligent
                           chatbot systems for data categorization. 
                           The collaboration was smooth, and the 
                           solutions delivered real value to our 
                           operations.</p></div>
                  <div className="div3"><img src={Reslogo3} className="reslogo"></img><div className="Reslogo31"><p>Sanjay Vyas</p><p>tendersontime.com</p></div></div>
                </div>
              </div>
          </div>
            </div>
        <div className='greylogo'><img src={greylogo}></img></div>
          </div></div>
  )
}

export default slide2
import React from 'react';
import "./card.css";
import logo02 from '../../Pictures/serv19.svg';

const card = () => {
  return (
    <>
     <div className="Hservices">
            <div className="Hservices1">
              <div className="Hservices11">
              <div className="Hservices111"><p className='Hservices111P'>How We Can Help You</p></div>
              <div className="Hservices112"><p className="Hservices112para1">Driving Innovation and Transformation intelligent</p> <p className='Hservices112para'>
                      AI powered</p>
                      <p className='Hservices112para2'>Smart Automation, real result . Root.AI builds next-gen AI agents that streamline operations,boast productivity and cut costs - from intelligent chatbots to fully aotomated workflows</p></div>
                      </div>
              <div className="Hservices12">
                <div className="Hservices121">              
                  <div className="card1">
                    
                     
                    <div className="card11"><img src={logo02} className="logo01"></img></div> 
                    <div className="card12"><div className="number01"><b>01</b></div><div className="title"><b><p>Generative AI</p></b></div>
                    </div> 
                    <div className="card13"><p>Ignite creativity and innovation by
                            AI-generated content, unlocking new
                            possibilities and
                            outcomes in industries.</p></div>
                          
                            </div>
                  <div className="card1">
                    <div className="card11"><img src={logo02} className="logo01"></img></div> 
                    <div className="card12"><div className="number01"><b>02</b></div><div className="title"><b><p>AI model training & Fine tuning</p></b></div>
                    </div> 
                    <div className="card13"><p>
                            Custom training solutions for
                business  needs for enhancing 
                accuracy and performance. Which can 
                give you edge in technology 				</p></div>
                            </div>
                  <div className="card1">
                    <div className="card11"><img src={logo02} className="logo01"></img></div> 
                    <div className="card12"><div className="number01"><b>03</b></div><div className="title"><b><p>Analytics and Research</p></b></div>
                    </div> 
                    <div className="card13"><p>
                                         
                            Analytics and research play a crucial
                role in today's data-driven world. Can gain valuable insights to 
                 drive informed decision-making.										</p></div>
    
                            </div>
                            
                </div>
                   <div className="Hservices121">
                  <div className="card1">
              
                    <div className="card11"><img src={logo02} className="logo01"></img></div> 
                    <div className="card12"><div className="number01"><b>04</b></div><div className="title"><b><p>PCB Design and Repair</p></b></div>
                    </div> 
                    <div className="card13"><p>Expert PCB repair services across 
                                                  various industries, including 
                                                  defense, industrial automation, 
                                                  medical, and railway sectors</p></div>
              
                            </div>
                  <div className="card1">
                    <div className="card11"><img src={logo02} className="logo01"></img></div> 
                    <div className="card12"><div className="number01"><b>05</b></div><div className="title"><b><p>IOT Management Services</p></b></div>
                    </div> 
                    <div className="card13"><p>Seamless connectivity, real-time 
                                                     monitoring and efficient management
                                                     of your IoT devices. To increase the productivity of task.</p></div>
    
                            </div>
                  <div className="card1">
                  
                    <div className="card11"><img src={logo02} className="logo01"></img></div> 
                    <div className="card12"><div className="number01"><b>06</b></div><div className="title"><b><p>Reverse Engineering</p></b></div>
                    </div> 
                    <div className="card13"><p>
                            Offering reverse engineering services 
                for industrial PCBs and repair
                services for teach pendants used in
                various industries.
    </p></div>
                
                            </div>
                            
                </div>
          
                <div className="learn">
                  <button className="LearnB"> <b>Learn More</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default card
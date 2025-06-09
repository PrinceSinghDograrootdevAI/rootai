import React from 'react'
import footerimage from '../Pictures/map.png';
import logoimage from '../Pictures/hlogo1.png';
import logoimage3 from '../Pictures/logoimage3.png';
import './footer.css';

const footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${footerimage})` }}>
        {/* <img src={footerimage} alt="footerimage" className="footerImage"></img> */}
        <div className='f'>
        <div className='fbox'>
        <div className="fbox1">
          <div>
        <div>
           {/* <p className="LogoSign">Root AI</p> */}
         <img src={logoimage3} className="LogoSign"></img>
           </div>
        <div> <p className="footerpara">We prioritize Customer Centric AI chatbots
                 and  analytics , fostering partenership 
                 for mutual  success . We are committed to 
                 pushing tech boundaries for efficiency
                 and intelligence. 
                 </p></div>
          </div>

        
        </div>
        <div className="fbox2"><div>
          <div className="footerp"><p className="footerpara1">Join The </p><p className="footerpara2">Root.AI </p> <p className="footerpara3"> Experience   </p></div>
          <div><p className="footerpara">Join us and experience firsthand 
                  the power of customized solutions 
                  designed to drive efficiency and 
                  effectiveness. Together, we can 
                  navigate the complexities of the
                   digital landscape</p></div></div>
                   </div>
        <div className="fbox3">
          <div className='fbox3box'>
            <div className='button'><input placeholder="Your Email Address" className="button1"></input></div>
          {/* <div><button className='button1'>Your Email Address</button></div> */}
          <div className='button'><button className='button2'>Subscriber Now</button></div>
          </div>
        </div>
        </div>
        <div className='last'>
         <div className='flineContainer'>
        <div className='fline'>
          <div className='fedge-line'></div>
          <div className='fmiddle-line'></div>
          <div className='fedge-line'></div>
        </div>
        
      </div>
      <div className="flastdiv">
        <div className="fSocial1">
          <div><p className="footerpara">Facebook</p></div>
          <div><p className="footerpara">Instagram</p></div>
          {/* <div><p className="footerpara">Twitter</p></div> */}
          <div><p className="footerpara">LinkedIn</p></div>
        </div>
        <div className="fSocial2"><p className="footerpara">Privacy Policy</p></div>
        </div>
        </div>
        </div>
        </div>
    
    
  )
}

export default footer
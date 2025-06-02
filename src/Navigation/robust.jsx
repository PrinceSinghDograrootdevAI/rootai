import React from 'react';
import './robust.css';
import robustBg from '../Pictures/robust.png';
import dot from '../Pictures/dot.png';
import last from '../Pictures/last.png';

const Robust = () => {
  return (
    <div className="robust-section">
      <img src={robustBg} alt="background" className="robust-bg" />
      <img src={dot} alt="dot" className="dot-img" />
      <div className="robust-content">
        <h5>Robust security</h5>
        <p className='robust-content1'>
          Choose <span className="highlight">Root.AI</span> for robust and secure 
          <span className="highlight"> defence services</span> tailored to meet the unique 
          demands of the sector, ensuring optimal performance and protection against threats.
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <img src={last} alt="last" className="last-img" />
    </div>
  );
};

export default Robust;
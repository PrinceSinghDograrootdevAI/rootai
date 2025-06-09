import React from 'react';
import './Contact.css';
import Contact2 from "./Component/Contact2";

import ContactUs1 from '../Pictures/contactUs.png';


const CLIENT_ID = "368088075490-r5bc3vo76mjfsgeaulhso5o6ucue09cq.apps.googleusercontent.com";
const SHEET_ID = '1V9obfXkyRKK4MSKdvVTPF7m62RAbnWvAPoSagz-p3Hk';

const ContactUs = () => {

  
  return (
    <div>
      <div className="contact1"  style={{ backgroundImage: `url(${ContactUs1})`} }>
        <div className='contactusbox'>
         <div className="contact11"><p>Contact Us</p></div> 
         <div><p className='contact12'>Let's Discuss Your Apportunity</p></div>
         <div><p className='contact13'>The best service identify the services you need</p></div>
          
        </div>
      </div>
      < Contact2 />
     
    </div>
  );
};

export default ContactUs;

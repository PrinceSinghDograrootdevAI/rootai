import React from 'react';
import {useState ,useEffect} from 'react';
import "./Teamimages.css";
import image1 from '../Pictures/groupimage1.jpg';
import image2 from '../Pictures/groupimage2.jpg';
import image3 from '../Pictures/groupimage3.jpg';

const Teamimages = () => {
     const image11 = [image1, image2, image3];
            const [currentIndex, setCurrentIndex] = useState(0);
            useEffect(()=>{
              const interval = setInterval(()=>{
                 setCurrentIndex((prevIndex) => (prevIndex + 1) % image11.length);
              },3000);
              return () => clearInterval(interval);
            },[]);
  return (
    <div> 
        <div className='Teamimages'>
            <div className='Team1'>
        <div className='T1div'>
        <div className='Tpara'>
            <p className='Tpara1'>Our Team</p>
        </div>
        </div>
        <div className="T2div">
        <div classname='Tpara2div'> <p  className='Tpara2'>Why Choose Our Team ?</p></div>
        <div className='Tpara3div'><p className='Tpara3'>Choose us because we bring expertise, innovation, and dedication 
                             to every project. Our tailored solutions are designed to fit your 
                             unique needs, ensuring measurable results and long-term success.</p></div>
        </div>
        </div>
        <div className='Team2'>
        <div className='groupimages'>
             <img src={image11[currentIndex]} alt="Something" className="group" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Teamimages
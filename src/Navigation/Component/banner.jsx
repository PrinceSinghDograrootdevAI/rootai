import React,{useState,useEffect} from 'react';
import content1 from '../../Pictures/content1.png';
import content2 from '../../Pictures/content2.png';
import image1 from '../../Pictures/AI1.jpg';
import image2 from '../../Pictures/AI2.png';
import image3 from '../../Pictures/AI3.png';
import './banner.css';

const banner = () => {
    const image = [image1, image2, image3];
        const [currentIndex, setCurrentIndex] = useState(0);
        useEffect(()=>{
          const interval = setInterval(()=>{
             setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
          },3000);
          return () => clearInterval(interval);
        },[]);
  return (
    <div
  className="hero-container"
  style={{ backgroundImage: `url(${image[currentIndex]})` }}
>
      
     <div className='fcontainer'><div className='fcontainer1'><p className='para1'>The Next </p><p className='para2'> GenAI</p></div>
      <p className='para3'><img src={content1}></img></p></div> 
      <div className="fcontainer2">
        <p className="para8">Lets Talk</p>
        <p className='para9'><img src={content2}></img></p>
      </div>
    </div>
  );
};

export default banner;
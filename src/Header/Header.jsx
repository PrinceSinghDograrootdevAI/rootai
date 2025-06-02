import React,{useEffect,useState} from 'react'
import Index from '../Index';
import hlogo1 from '../Pictures/hlogo1.png';
import hlogo2 from '../Pictures/hlogo2.png';


import './Header.css';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [scrolled,setScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
     return ()=>{
      window.removeEventListener('scroll', handleScroll);
     }},[])
  return (
    <div className={ scrolled ?'container1 colored':'container1 transparent'}>
    <div>
    <img src={scrolled? hlogo2:hlogo1} className='hlogo'></img></div>
      <div>
    <nav className="container">
        <NavLink to="/" className="box"><b>Home</b></NavLink>
        <NavLink to="/Services" className="box"><b>Services</b></NavLink>
        {/* <NavLink to="/Defence" className="box"><b>Defence</b></NavLink> */}
        <NavLink to="/AboutUs" className="box"><b>About Us</b></NavLink>
        {/* <NavLink to="/Enterprise" className="box"><b>Enterprise</b></NavLink> */}
        <NavLink to="/ContactUs" className="box"><b>Contact us</b></NavLink>
        
    </nav>
    </div>
     
    </div>
  )
}

export default Header

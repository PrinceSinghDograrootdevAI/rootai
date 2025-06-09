import React,{useEffect,useState} from 'react'
import Index from '../Index';
import hlogo1 from '../Pictures/hlogo1.png';
import hlogo2 from '../Pictures/hlogo2.png';


import './Header.css';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [scrolled,setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= 1200);
    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
     return ()=>{
      window.removeEventListener('scroll', handleScroll);
     }},[]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
   useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 1200); // 👈
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={ scrolled || isMobileSize ?'container1 colored':'container1 transparent'}>
    <div>
    <img src={scrolled || isMobileSize ? hlogo2:hlogo1} className='hlogo'></img></div>
     <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> 
     
    <div>
    <nav className={`container ${isMobileMenuOpen ? 'show-menu' : ''}`}>
    {/* <nav className="container"> */}
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

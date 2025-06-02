import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Navigation/Home';
import Services from './Navigation/Services';
import Defence from './Navigation/Defence';
import Showcase from './Navigation/Showcase';
import Enterprise from './Navigation/Enterprise';
import ContactUs from './Navigation/ContactUs';
import AboutUs from './Navigation/AboutUs';
import Blog from './Navigation/Blog';
import Career from './Navigation/Career';
import Footer from './Footer/footer';

const Index = () => {
  return (
    <div>
      
        <Header/>
      <Routes>
        <Route path="/" element = {< Home /> }/>
        <Route path="/Services" element = {< Services />}/>
        <Route path="/Defence" element = {<Defence />}/>
        <Route path="/Showcase" element = {<Showcase />}/>
        <Route path="/Enterprise" element = {<Enterprise />}/>
        <Route path="/ContactUs" element = {<ContactUs />}/>
        <Route path= "/AboutUs" element = {<AboutUs />}/>
        <Route path = "/Blog" element = {<Blog />}/>
        <Route path = "/Careers" element = {<Career />}/>

      </Routes>
         <Footer/>
      
      
    </div>
  )
}

export default Index

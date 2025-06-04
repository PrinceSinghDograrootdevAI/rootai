import React,{useState,useEffect} from 'react';
import { useRef } from 'react';
import { FaUpload } from "react-icons/fa"; 
import image1 from '../Pictures/AI1.jpg';
import image2 from '../Pictures/AI2.png';
import image3 from '../Pictures/AI3.png';
import icon1 from '../Pictures/icon1.png';
import icon2 from '../Pictures/icon2.png';
import icon3 from '../Pictures/icon3.png';
import icon4 from '../Pictures/icon4.png';
import icon5 from '../Pictures/icon5.png';
import icon6 from '../Pictures/icon6.png';
import icon7 from '../Pictures/icon7.png';
import icon8 from '../Pictures/icon8.png';
import logo01 from '../Pictures/serv22.svg';
import logo02 from '../Pictures/serv19.svg';
import logo03 from '../Pictures/serv18.svg';
import logo04 from '../Pictures/serv15.svg';
import logo05 from '../Pictures/serv5.svg';
import logo06 from '../Pictures/serv4.svg';
import slide1 from '../Pictures/slide1.gif';
import slide2 from '../Pictures/slide2.jpg';
import slide3 from '../Pictures/slide3.jpg';
import slide4 from '../Pictures/slide4.jpg';
import slide5 from '../Pictures/slide5.gif';
import slide6 from '../Pictures/slide6.jpg';
import coma from '../Pictures/coma.png';
import star from '../Pictures/List.png';
import Reslogo1 from '../Pictures/reslogo1.png';
import Reslogo2 from '../Pictures/reslogo2.png';
import Reslogo3 from '../Pictures/reslogo3.png';
import uploadsymbol from '../Pictures/uploadsymbol.png';
import content1 from '../Pictures/content1.png';
import content2 from '../Pictures/content2.png';
import CaseStudies from '../Pictures/CaseStudies.png';
import bluelogo from '../Pictures/Vector.png';
import greylogo from '../Pictures/greylogo.png';

import './Home.css';
const CLIENT_ID = "368088075490-r5bc3vo76mjfsgeaulhso5o6ucue09cq.apps.googleusercontent.com";
const SHEET_ID = '1V9obfXkyRKK4MSKdvVTPF7m62RAbnWvAPoSagz-p3Hk';
const Home = () => {
     const [formData, setFormData] = useState({
        name: '',
        telephone: '',
        email: '',
        message: '',
      });
    
      const [file, setFile] = useState(null);
      const [tokenClient, setTokenClient] = useState(null);
      const [accessToken, setAccessToken] = useState('');
      const fileInputRef1 = useRef(null);
    useEffect (()=>{
      const identityScript = document.createElement('script');
    identityScript.src = 'https://accounts.google.com/gsi/client';
    identityScript.onload = () => {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets',
        callback: (tokenResponse) => {
          if (tokenResponse.access_token) {
            setAccessToken(tokenResponse.access_token);
          }
        },
      });
      setTokenClient(client);
    };
    document.body.appendChild(identityScript);
    },[]);
    const image = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
      const interval = setInterval(()=>{
         setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
      },3000);
      return () => clearInterval(interval);
    },[]);
   
  const sliderRef = useRef(null);
  const caseStudyRef = useRef(null);
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
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click(); 
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     console.log("Selected file:", file.name);
  //   }}
  };
   const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click(); 
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleIconClick1 = () => {
    fileInputRef1.current.click();
  };

  const uploadFileToDrive = async (file) => {
    const metadata = {
      name: file.name,
      mimeType: file.type,
    };
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: new Headers({ Authorization: 'Bearer ' + accessToken }),
      body: form,
    });

    const data = await response.json();
    const fileId = data.id;

    await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: 'reader',
        type: 'anyone',
      }),
    });

    return `https://drive.google.com/uc?id=${fileId}`;
  };

  const submit = async () => {
    if (!accessToken) {
      tokenClient.requestAccessToken();
      return;
    }

    let fileUrl = '';
    if (file) {
      fileUrl = await uploadFileToDrive(file);
    }

    const values = [[
      formData.name,
      formData.email,
      formData.telephone,
      formData.message,
      fileUrl,
      new Date().toLocaleString()
    ]];

    await window.gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: { values },
    });

    alert('Form submitted successfully!');
  };


  return (
    <div className='bigbox'>
      <img src={image[currentIndex]} alt="Something" className="myImage" />
      <div className='fcontainer1'><p className='para1'>The Next </p><p className='para2'> GenAI</p></div>
      <p className='para3'><img src={content1}></img></p>
      <div className="fcontainer2">
       <p className="para8">Lets Talk</p>
      <p className='para9'>
                           {/* <p className="p1">Smart Automation. Real Results. root</p>
                           <p className="p1">AI    builds next-gen  AI agents that</p>
                            <p className="p1">streamline operations,boost productivity</p>
                            <p className="p1">,and cut costs—from intelligent chatbots </p>
                           <p className="p1"> chatbots to fully automated workflows.</p> */}
                           <img src={content2}></img>
                           </p>
                           </div>
      {/* <p className='para10'>AI agents developer solution </p>
      <p className='para11'>help bussines automate </p>
      <p className='para12'>workflows, enhance customer</p>
      <p className='para13'>engagement.</p> */}
      {/* <div className='icon'>
        <div><img src={icon1} alt="Something" className="icon1" ></img></div>
        <div><img src={icon2} alt="Something" className="icon1" ></img></div>
        <div><img src={icon3} alt="Something" className="icon1" ></img></div>
        <div><img src={icon4} alt="Something" className="icon1" ></img></div>
        <div><img src={icon5} alt="Something" className="icon1" ></img></div>
        <div><img src={icon6} alt="Something" className="icon1" ></img></div>
        <div><img src={icon7} alt="Something" className="icon1" ></img></div>
        <div><img src={icon8} alt="Something" className="icon1" ></img></div>
      </div>
      <div className='lineContainer'>
        <div className='line'>
          <div className='edge-line'></div>
          <div className='middle-line'></div>
          <div className='edge-line'></div>
        </div>
      </div> */}
      <div className="Hservices">
        <div className="Hservices1">
          <div className="Hservices11">
          <div className="Hservices111"><p className='Hservices111P'>How We Can Help You</p></div>
          <div className="Hservices112"><p className="Hservices112para1">Driving Innovation and Transformation intelligent <p className='Hservices112para'>
                  AI powered</p></p>
                  <p className='Hservices112para2'>Smart Automation, real result . Root.AI builds next-gen AI agents that streamline operations,boast productivity and cut costs - from intelligent chatbots to fully aotomated workflows</p></div>
                  </div>
          <div className="Hservices12">
            <div className="Hservices121">
              
              <div className="card1">
                 {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                 
                <div className="card11"><img src={logo02} className="logo01"></img></div> 
                <div className="card12"><div className="number01"><b>01</b></div><div className="title"><b><p>Generative AI</p></b></div>
                </div> 
                <div className="card13"><p>Ignite creativity and innovation by
                        AI-generated content, unlocking new
                        possibilities and
                        outcomes in industries.</p></div>
                         {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                        </div>
              <div className="card1">
                 {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                <div className="card11"><img src={logo02} className="logo01"></img></div> 
                <div className="card12"><div className="number01"><b>02</b></div><div className="title"><b><p>AI model training & Fine tuning</p></b></div>
                </div> 
                <div className="card13"><p>
						Custom training solutions for
            business  needs for enhancing 
            accuracy and performance. Which can 
            give you edge in technology 				</p></div>
                 {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                        </div>
              <div className="card1">
                 {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                <div className="card11"><img src={logo02} className="logo01"></img></div> 
                <div className="card12"><div className="number01"><b>03</b></div><div className="title"><b><p>Analytics and Research</p></b></div>
                </div> 
                <div className="card13"><p>
						             
						Analytics and research play a crucial
            role in today's data-driven world. Can gain valuable insights to 
             drive informed decision-making.										</p></div>
                         {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                        </div>
                        
            </div>
               <div className="Hservices121">
              <div className="card1">
                 {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                <div className="card11"><img src={logo02} className="logo01"></img></div> 
                <div className="card12"><div className="number01"><b>04</b></div><div className="title"><b><p>PCB Design and Repair</p></b></div>
                </div> 
                <div className="card13"><p>Expert PCB repair services across 
                                              various industries, including 
                                              defense, industrial automation, 
                                              medical, and railway sectors</p></div>
                 {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                        </div>
              <div className="card1">
                 {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                <div className="card11"><img src={logo02} className="logo01"></img></div> 
                <div className="card12"><div className="number01"><b>05</b></div><div className="title"><b><p>IOT Management Services</p></b></div>
                </div> 
                <div className="card13"><p>Seamless connectivity, real-time 
                                                 monitoring and efficient management
                                                 of your IoT devices. To increase the productivity of task.</p></div>
                  {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                        </div>
              <div className="card1">
                 {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
                <div className="card11"><img src={logo02} className="logo01"></img></div> 
                <div className="card12"><div className="number01"><b>06</b></div><div className="title"><b><p>Reverse Engineering</p></b></div>
                </div> 
                <div className="card13"><p>
						Offering reverse engineering services 
            for industrial PCBs and repair
            services for teach pendants used in
            various industries.
</p></div>
                         {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div>
            */}
                        </div>
                        
            </div>
             {/* <div className='s1lineContainer'>
              <div className='s1line'>
               <div className='s1edge-line'></div>
               <div className='s1middle-line'></div>
               <div className='s1edge-line'></div>
              </div>
           </div> */}
            <div className="learn">
              <button className="LearnB"> <b>Learn More</b>
              </button>
            </div>
          </div>
        </div>
        {/* <div className='bluedot1'>.</div>
         <div className='bluedot2'>.</div>
      <div className='bluedot3'>.</div>
      <div className='bluedot4'>.</div>
      <div className='bluedot5'>.</div>
      <div className='bluedot6'>.</div> */}
      </div>
      
     
     {/* <div className='services'>
          
        
         
        
      </div> */}
      <div className='section1'>
        <div className="section11">
          <div className="section111">
            <p className='section111para1'><p>Our Latest Projects</p></p>
          </div>
          <div className="section111para"><button className='section111para2'  onClick={() => scroll('left', 'case')}>← Prev</button><button className='section111para3'  onClick={() => scroll('right', 'case')}>Next → </button></div>
          <div className='section2'><img src={CaseStudies}></img><div></div></div>
          {/* &rarr; */}
           <div className="slider-container">
           <div className="slider" ref={caseStudyRef}>
            <div className="slide"><div className="slide1"><img src={slide1} className='slide1image'></img></div>
                                   <div className="slide2">
                                         <div className="slide21"><p className="slide21para1">Rag Based ChatBot</p>
                                              <p className="slide21para2">AI Solution Application</p></div><div className="slide22"><p>Our custom chatbot has revolutionized our
                                                                                          customer support. It offers quick and
                                                                                          accurate answers, making our website
                                                                                          much more user-friendly and efficient</p></div>
                                                                                          </div>
                                                                                          </div>
            <div className="slide"><div className="slide1"><img src={slide2} className='slide1image'></img></div>
                                  <div className="slide2">
                                         <div className="slide21"><p className="slide21para1">Medical IOT</p>
                                              <p className="slide21para2">Web Solution</p></div><div className="slide22"><p><p>Medical IoT refers to the network
                                                                                                                               of connected medical devices that
                                                                                                                               gather and transmit health data 
                                                                                                                               in real-time.</p></p></div>
                                                                                          </div>
                                   </div>
            <div className="slide"><div className="slide1"><img src={slide3} className='slide1image'></img></div>
                                  <div className="slide2">
                                         <div className="slide21"><p className="slide21para1">Predictive gap analysis</p>
                                              <p className="slide21para2"> Application</p></div><div className="slide22"><p>Apps for wearables are becoming increasingly
                                                                                                                            popular as wearable technology becomes 
                                                                                                                            more prevalent.</p></div>
                                                                                          </div>
                                  </div>
            <div className="slide"><div className="slide1"><img src={slide4} className='slide1image'></img></div>
                                  <div className="slide2">
                                         <div className="slide21"><p className="slide21para1">Industrial IOT Solution</p>
                                              <p className="slide21para2">AI Solution </p></div><div className="slide22"><p>Industrial IoT solutions are designed
                                                                                                                            to optimize efficiency, productivity, 
                                                                                                                            and safety in manufacturing operations.</p></div>
                                                                                          </div></div>
            <div className="slide"><div className="slide1"><img src={slide5} className='slide1image'></img></div>
                                  <div className="slide2">
                                         <div className="slide21"><p className="slide21para1">AI-Powered Tender process</p>
                                              <p className="slide21para2">AI Solution Application</p></div><div className="slide22"><p>Our tailored AI algorithms effectively
                                                                                                                                       processed the massive dataset, extracting
                                                                                                                                       features and categorizing tenders with 
                                                                                                                                       industry-specific precision</p></div>
                                                                                          </div></div>
            <div className="slide"><div className="slide1"><img src={slide6} className='slide1image'></img></div>
                                   <div className="slide2">
                                         <div className="slide21"><p className="slide21para1">Intelligent Document Processing</p>
                                              <p className="slide21para2">AI Solution </p></div><div className="slide22"><p>Intelligent Document Processing (IDP),
                                                                                                                            Form Parsing, Table Extraction, Data
                                                                                                                            Structuring, Export Automation.</p></div>
                                                                                          </div></div>
           
           </div>
          </div>
        </div>
     

      </div>
      
      <div className="sections2">
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
      </div>
      <div className="section3">
        <div className="section31">
          <div className="section311">
            <p className="section311para1" style={{ display: 'inline' , fontFamily : 'Syne', fontSize : '42px' }}>Contact</p><p className='section311para2' style={{ display: 'inline',fontFamily : 'Syne' , fontSize: '42px' , color: '#0D99FF'}}>Us</p>
          </div>
          <div className='section312'>
            <div className='section312cont1'>

              <input type="text" placeholder="Name" name="name" className="inputtag1" value={formData.name} onChange={handleChange} required />
              <input type="text" placeholder="Email" name="email" className="inputtag1" value={formData.email} onChange={handleChange} required />
              <input type="text" placeholder="Telephone" name="telephone" className="inputtag1" value={formData.telephone} onChange={handleChange} required />
              <input type="file" ref={fileInputRef1} name='file' className='inputtag2' accept=".pdf,.doc,.docx,.jpg,.png,.xlsx" onChange={handleFileChange} style={{ display: 'none' }} />
              
              
              <div className='section312cont11'>  {/* <FaUpload size={40} color="#4CAF50" style={{ cursor: "pointer" }} onClick={handleIconClick}/> */}
                <img src={uploadsymbol} style={{ cursor: "pointer" }} className='inputtag3' onClick={handleIconClick1}></img>
                <div> <p className='inputtag4'>Attach Your file</p>
                <p className='inputtag5'>up to 10MB</p></div>
                </div>
            </div>
            <div className="section312cont2">
               <textarea placeholder="Message" className='Message' name='message' value={formData.message} onChange={handleChange}></textarea>
              <p className='inputtag6'>We will process your personal information in accordance with our privacy policy</p>
               <div className='inputtag7'><input  type="checkbox"   /> <p>I would like to be contacted with news and updated about your events and services</p></div>
               {/* checked={isChecked} onChange={handleCheckboxChange} */}
            </div>
          </div>
          <div className='section313'>
            <button className="section313cont1" >Send Message Now</button>
          </div>

        </div>
      <div className='contactimage'><img src={bluelogo}></img></div>
      </div>
    </div>
    
  );
};

export default Home;
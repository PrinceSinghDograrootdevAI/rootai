import React from 'react';
import './ContactUs.css';
import { useRef} from "react";
import {useEffect,useState} from "react";
import bluelogo from '../../Pictures/Vector.png';
import uploadsymbol from '../../Pictures/uploadsymbol.png';
const CLIENT_ID = "368088075490-r5bc3vo76mjfsgeaulhso5o6ucue09cq.apps.googleusercontent.com";
const SHEET_ID = '1V9obfXkyRKK4MSKdvVTPF7m62RAbnWvAPoSagz-p3Hk';
const Contact = () => {
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
  useEffect(() => {
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
      }, []);
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
   const submit = async (e) => {
     const metadata = {
    name: file.name,
      mimeType: file.type,
   };
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);
    
     e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbyvFGe19vpcygPhpur7RpnpVtV-RVHrzTOw2Ie_P4UaET90GLKhm-iWIcrI0URte3hc/exec", {
      method: 'POST',
       headers: {
    "Content-Type": "application/json"
  },
      body : JSON.stringify({formData}),
      
    }).then(res => res.json())
      .then(data => {
        console.log(data);
       
      })
      .catch(err => console.log(err));
    console.log(formData);
    alert('Form submitted successfully!');
  };
  return (

    <>
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
                  
                  
                  <div className='section312cont11'>  
                    <img src={uploadsymbol} style={{ cursor: "pointer" }} className='inputtag3' onClick={handleIconClick1}></img>
                    <div> <p className='inputtag4'>Attach Your file</p>
                    <p className='inputtag5'>up to 10MB</p></div>
                    </div>
                </div>
                <div className="section312cont2">
                   <textarea placeholder="Message" className='Message' name='message' value={formData.message} onChange={handleChange}></textarea>
                  <p className='inputtag6'>We will process your personal information in accordance with our privacy policy</p>
                   <div className='inputtag7'><input  type="checkbox"   /> <p>I would like to be contacted with news and updated about your events and services</p></div>
         
                </div>
              </div>
              <div className='section313'>
                <button className="section313cont1" >Send Message Now</button>
              </div>
    
            </div>
          <div className='contactimage'><img src={bluelogo}></img></div>
          </div>
    </>
  )
}

export default Contact
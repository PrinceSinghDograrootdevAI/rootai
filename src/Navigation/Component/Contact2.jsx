import React from 'react'
import { useEffect, useState } from 'react';
import {useRef} from 'react';
import "./Contact2.css";
import uploadsymbolb from '../../Pictures/uploadsymbolb.png';

const CLIENT_ID = "368088075490-r5bc3vo76mjfsgeaulhso5o6ucue09cq.apps.googleusercontent.com";
const SHEET_ID = '1V9obfXkyRKK4MSKdvVTPF7m62RAbnWvAPoSagz-p3Hk';

const Contact2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        telephone: '',
        email: '',
        message: '',
      });
    
      const [file, setFile] = useState(null);
      const [tokenClient, setTokenClient] = useState(null);
      const [accessToken, setAccessToken] = useState('');
      const fileInputRef = useRef(null);
    
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
    
      const handleIconClick = () => {
        fileInputRef.current.click();
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
          // body: new formData(formRef.current),
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            // alert(data.msg);
          })
          .catch(err => console.log(err));
        console.log(formData);
        alert('Form submitted successfully!');
      };
    
  return (
    <div>
         <div className="csection3">
                <div className="csection31">
                  <div className="csection311">
                    <p className="section311para1" style={{ display: 'inline', fontFamily: 'Syne', fontSize: '42px', color: 'black' }}>Contact</p>
                    <p className='section311para2' style={{ display: 'inline', fontFamily: 'Syne', fontSize: '42px', color: 'blue' }}>Us</p>
                  </div>
                  <div className='csection312'>
                    <div className='csection312cont1'>
                      <input type="text" placeholder="Name" name="name" className="cinputtag1" value={formData.name} onChange={handleChange} required />
                      <input type="text" placeholder="Email" name="email" className="cinputtag1" value={formData.email} onChange={handleChange} required />
                      <input type="text" placeholder="Telephone" name="telephone" className="cinputtag1" value={formData.telephone} onChange={handleChange} required />
                      <input type="file" ref={fileInputRef} name='file' className='cinputtag2' accept=".pdf,.doc,.docx,.jpg,.png,.xlsx" onChange={handleFileChange} style={{ display: 'none' }} />
                      <div>
                        <img src={uploadsymbolb} className='cinputtag3' onClick={handleIconClick} style={{ cursor: 'pointer' }} alt='Upload Icon' />
                        <p className='cinputtag4'>Upload file not more than 10MB</p>
                      </div>
                    </div>
                    <div className="section312cont2">
                      <textarea placeholder="Message" className='cMessage' name='message' value={formData.message} onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className='csection313'>
                    <button className="csection313cont1" type="submit" onClick={submit}>Send Message Now</button>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Contact2
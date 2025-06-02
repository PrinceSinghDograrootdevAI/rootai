// import React from 'react'
// import './Contact.css';
// import { useRef } from 'react';
// import uploadsymbolb from '../Pictures/uploadsymbolb.png';
// import ContactUs1 from '../Pictures/contactUs.png';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import {useState} from 'react';
// const CLIENT_ID = '368088075490-r5bc3vo76mjfsgeaulhso5o6ucue09cq.apps.googleusercontent.com';
// const SHEET_ID = '1V9obfXkyRKK4MSKdvVTPF7m62RAbnWvAPoSagz-p3Hk';



// const ContactUs = () => {
         
    
//   return (
//     <div>
//       <div>
//         <img src={ContactUs1} className='contactsection'></img>
//       </div>
//        <div className="section3">
//               <div className="section31">
//                 <div className="section311">
//                   <p className="section311para1" style={{ display: 'inline' , fontFamily : 'Syne', fontSize : '42px' ,color: 'black' }}>Contact</p><p className='section311para2' style={{ display: 'inline',fontFamily : 'Syne' , fontSize: '42px' , color: 'blue'}}>Us</p>
//                 </div>
//                 <div className='section312'>
//                   <div className='section312cont1'>
      
//                     <input type="text" placeholder="Name" name="name" className="inputtag1"  value={formData.name} onChange={handleChange} required ></input>
//                     <input type="text" placeholder="Email"  name="email" className="inputtag1" value={formData.email} onChange={handleChange} required></input>
//                     <input type="text" placeholder="Telephone" name="telephone" className="inputtag1" value={formData.telephone} onChange={handleChange} required ></input>
                    
//                     <input type="file" ref={fileInputRef}  placeholder="file" name='file' className='inputtag2'  accept=".pdf,.doc,.docx,.jpg,.png,.xlsx"></input>
//                     <div>  {/* <FaUpload size={40} color="#4CAF50" style={{ cursor: "pointer" }} onClick={handleIconClick}/> */}
//                       <img src={uploadsymbolb} style={{ cursor: "pointer" }} className='inputtag3' onClick={handleIconClick}></img>
//                       <p className='inputtag4'>Upload file not more than 10MB</p>
//                       </div>
//                   </div>
//                   <div className="section312cont2">
//                     <textarea placeholder="Message" className='Message'></textarea>
//                   </div>

//                 </div>
//                 <div className='section313'>
//                   <button className="section313cont1"  type="submit" onClick={submit}>Send Message Now</button>
//                 </div>
      
//               </div>
//             </div>
      
//         <LoadScript googleMapsApiKey="AIzaSyAMYyKhOZJ_3kPOZ1YLXWgt6g0RhbERyNw">
//       <GoogleMap mapContainerStyle={{ height: '750px', width: '100%' }}  center={{lat: 30.72,  lng: 76.79}} zoom={12}>
//         <Marker position={{ lat: 30.72, lng: 76.79 }} />
//       </GoogleMap>
//     </LoadScript>

//     </div>
//   )
// }

// export default ContactUs

import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import uploadsymbolb from '../Pictures/uploadsymbolb.png';
import ContactUs1 from '../Pictures/contactUs.png';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const CLIENT_ID = "368088075490-r5bc3vo76mjfsgeaulhso5o6ucue09cq.apps.googleusercontent.com";
const SHEET_ID = '1V9obfXkyRKK4MSKdvVTPF7m62RAbnWvAPoSagz-p3Hk';

const ContactUs = () => {
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
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      window.gapi.load('client', async () => {
        console.log("The data 1 ");
        await window.gapi.client.init({
          
          discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4']
        });
        console.log("The data 2");
      });
    };
    document.body.appendChild(script);

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
    <div>
      <div className="contact1">
        <img src={ContactUs1} className='contactsection' alt='Contact' />
        <div className='contactusbox'>
         <div className="contact11"><p>Contact Us</p></div> 
         <div><p className='contact12'>Let's Discuss Your Apportunity</p></div>
         <div><p className='contact13'>The best service identify the services you need</p></div>
          
        </div>
      </div>
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
      <LoadScript googleMapsApiKey="AIzaSyAMYyKhOZJ_3kPOZ1YLXWgt6g0RhbERyNw">
        <GoogleMap mapContainerStyle={{ height: '750px', width: '100%' }} center={{ lat: 30.72, lng: 76.79 }} zoom={12}>
          <Marker position={{ lat: 30.72, lng: 76.79 }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ContactUs;
``
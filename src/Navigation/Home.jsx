import React,{useState,useEffect} from 'react';
import { useRef } from 'react';
import { FaUpload } from "react-icons/fa"; 
import Banner from "./Component/banner";
import Card from "./Component/card";
import Slide from "./Component/slide";
import Slide2 from "./Component/slide2";
import Contact from "./Component/Contact";
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
   
   
  const sliderRef = useRef(null);


 




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
      
     <Banner/>
     <Card />
    <Slide />
    <Slide2 /> 
    <Contact />
   
      
    
     
    </div>
    
  );
};

export default Home;
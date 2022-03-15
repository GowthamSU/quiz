import React from 'react';
import './QrCode.css';
import qr from './qr.png';

function QrCode(){
  return(
    <div className='Container'>
    <div className='centerContainer'>
    <div className='imageFlex'>
      <img className='image' src={qr}/>
      
      </div>
      <h2 className='header'>
      Improve your front-end skills by building projects
      
      </h2>
      <p className='header title'>
      Scan the QR code to visit Frontend Mentor and take your coding skills to the next level

      
      </p>

  </div>
  </div>)}

export default QrCode;
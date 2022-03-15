import React from 'react';
import qr from './qr.png';
function Qr() {
  return <div className='QrContainer'>
  
  <div className='centerContainer'>
    <div className='imageFlex'>
      <img className='image' src={qr}/>
      
      </div>
      <h2 className='heading'>
      Improve your front-end skills by building projects
      
      </h2>
      <p className='heading title'>
      Scan the QR code to visit Frontend Mentor and take your coding skills to the next level

      
      </p>

  </div>
  </div>;
}

export default Qr;

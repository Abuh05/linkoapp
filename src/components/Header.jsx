import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id='main'>
        <Navbar />
        <div className="name">
            <h1><span>Find The Perfect Doctor For Your Health Need</span></h1>
            <p className="details">This app will alert you of nearby hospitals, medical laboratories, and pharmacies and their 
          </p>
          <a href="#" className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header
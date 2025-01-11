import React from 'react'
import './nav.css'

function Nav({ThemeMode}) {
  return (
    <div className={`navbar ${ThemeMode}`}>
      
        <p>logo</p>
        <p>Man</p>
        <p>Woman</p>
        <p>Kids</p>
        <p>Electronics</p>
        <p>profile</p>
      </div>
   
  );
}

export default Nav

import React, { useState } from 'react'
import { useTheme } from '../../context/themecontext';

function Button({className}) {
    const[IsClicked, setIsclicked]= useState(false)
     const { ThemeMode, lighttheme, darktheme } = useTheme();

     const handleclick = () =>{
        setIsclicked((prev)=>!prev)
         IsClicked ? darktheme() : lighttheme();
         console.log(ThemeMode);
         

     }
    
  return (
    <div>
       <button className={className} onClick={handleclick}>{ThemeMode=='light'?'dark':'light'}</button>
      
    </div>
  )
}

export default Button

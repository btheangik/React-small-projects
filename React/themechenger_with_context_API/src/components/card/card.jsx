import React from 'react'
import './card.css'
import iPhone from '../../image/iPhone15.jpg'
import Button from '../button/button';


function Card({ThemeMode}) {
  return (
    <div className={`maincard ${ThemeMode}`}>
      <Button className={`themechangebtn ${ThemeMode}`}  />
      <div className="imagecontainer">
        <img src={iPhone} alt="iphone" />
      </div>
      <div className="textcontainer">
        <p className="price">$89000</p>
        <p className="prodname">iPhone15</p>
        <button className="buybutton">Buy now</button>
      </div>
    </div>
  );
}

export default Card

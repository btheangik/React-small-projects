import React from 'react'
import './searchbox.css'
import Button from '../button/button';


function Searchbox({value,onChange,onClick,placeholder}) {
  return (
    <div className="main">
      <span className="search-section">
        <form action="" onSubmit={(e)=>{
          e.preventDefault()
          onClick()
        }}>
          <input
            type="text"
            className="search"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </form>

        <Button classname="search-button" onClick={onClick} />
      </span>
    </div>
  );
}

export default Searchbox

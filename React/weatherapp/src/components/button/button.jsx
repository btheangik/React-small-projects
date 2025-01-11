import React from "react";
import "./button.css";
import Searchicon from '../images/search.png'
function Button({classname, onClick}) {
  return (
    <div>
      <button className={classname} onClick={onClick}>
        <img src={Searchicon} alt=""  className="search-icon"/>
      </button>
    </div>
  );
}

export default Button;

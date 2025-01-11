import React from "react";
import "./addbutton.css";

function Addpostbutton({ clickedfrinputbox }) {
  return (
    <div className="buttonsec">
      <button className="addbtn" onClick={clickedfrinputbox}>
        Add post
      </button>
    </div>
  );
}

export default Addpostbutton;

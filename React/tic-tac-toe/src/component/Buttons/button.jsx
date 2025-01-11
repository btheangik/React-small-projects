import React from 'react'
import './button.css'

function Button({ text, onClick, disabled }) {
  return (
    <div>
      <button className="btns" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}

export default Button

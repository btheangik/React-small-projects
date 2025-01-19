import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addtodo,updatetodo} from "../../feature/todo/todoslice"
import './Addtodo.css'

function Addtodo({ btntext, selectedid }) {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const handleclick = (e) => {
    e.preventDefault();
    if (btntext ==="Add Todo" && text !== "") {
      dispatch(addtodo(text));
    }
    if (btntext == "Update Todo" && selectedid !== null) {
      dispatch(updatetodo({id:selectedid, text:text}));
    }
  };

  return (
    <div>
      <input
        type="text"
        className="input-feild"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button className="btn" onClick={handleclick}>
        {btntext}
      </button>
    </div>
  );
}

export default Addtodo

import React, { useState } from 'react'
import Addtodo from '../Todoform/Addtodo'
import { useDispatch, useSelector } from "react-redux";
import { removetodo,updatetodo } from '../../feature/todo/todoslice';
import './Todo.css'

function Todo() {
    const[buttontext,setbuttontext]= useState("Add Todo")
    const[selectedid, setselectedid]=useState(null)
    const dispatch=useDispatch()

    const todos= useSelector((state)=>state.todos)
    const handleclick=(id) =>{
        setbuttontext('Update Todo')
        setselectedid(id)
    }
  
    

  return (
    <div>
      <Addtodo btntext={buttontext} selectedid={selectedid} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todolist">
            {todo.text}
            <div>
              <button onClick={() => handleclick(todo.id)} className="ubtn">
                Update
              </button>
              <button
                onClick={() => dispatch(removetodo(todo.id))}
                className="rbtn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo

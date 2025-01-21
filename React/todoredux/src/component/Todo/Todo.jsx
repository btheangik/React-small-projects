import React, { useState,useEffect } from "react";
import Addtodo from "../Todoform/Addtodo";
import { useDispatch, useSelector } from "react-redux";
import {
  removetodo,
  setTodos,
  completetodo,
} from "../../feature/todo/todoslice";
import "./Todo.css";

function Todo() {
  const [buttontext, setbuttontext] = useState("Add Todo");
  const [selectedid, setselectedid] = useState(null);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const handleclick = (id) => {
    setbuttontext("Update Todo");
    setselectedid(id);
  };
  useEffect(
    () => {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      dispatch(setTodos(savedTodos));
    },
    [dispatch],
   
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

   return (
    <div>
      <Addtodo btntext={buttontext} selectedid={selectedid} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todolist ${todo.completed ? "completed" : ""}`}
          >
            {todo.text}
            <div>
              <input
                type="checkbox"
                onChange={() => dispatch(completetodo(todo.id))}
              />
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

export default Todo;

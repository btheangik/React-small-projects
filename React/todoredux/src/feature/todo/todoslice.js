import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hallo World",
    },
  ],
};

const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removetodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },

    updatetodo: (state,action) =>{
        const{id,text}=action.payload
        state.todos= state.todos.map((todo)=>todo.id==id?{...todo, text:text}:todo)
    }
  },
});

export const{addtodo, removetodo, updatetodo}= todoslice.actions
export default todoslice.reducer

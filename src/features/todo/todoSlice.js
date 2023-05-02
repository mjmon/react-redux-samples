import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { todo } = action.payload;
      return [
        ...state,
        {
          id: uuidv4(),
          complete: false,
          todo: todo,
        },
      ];
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      return state.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      );
    },
  },
});

export const { addTodo, toggleTodo } = todoListSlice.actions;

export default todoListSlice.reducer;

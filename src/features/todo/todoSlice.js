import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          text: action.text,
        },
      ];
    },
    toggleTodo: (state, action) => {
      state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      );
    },
  },
});

export default todoListSlice;

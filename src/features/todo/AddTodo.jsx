import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./todoSlice";

const AddTodo = () => {
  const newTodoRef = useRef("");
  const dispatch = useDispatch();

  const onAdd = (event) => {
    event.preventDefault();
    let newTodo = newTodoRef.current.value.trim();
    console.log(`new todo: ${newTodo}`);
    dispatch(
      addTodo({
        todo: newTodo,
      })
    );
  };

  return (
    <div>
      <form onSubmit={onAdd}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:placeholder-gray-400 mr-2"
          placeholder="Todo"
          ref={newTodoRef}
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-800 font-medium rounded-lg text-sm p-2.5"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

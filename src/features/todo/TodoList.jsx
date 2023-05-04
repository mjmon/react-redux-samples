import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { toggleTodo } from "./todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const onToggle = (id) => {
    console.log(`onToggle: ${id}`);
    dispatch(
      toggleTodo({
        id: id,
      })
    );
  };

  return (
    <ul>
      {todoList.map((t) => (
        <Todo key={t.id} todo={t} onTap={() => onToggle(t.id)} />
      ))}
    </ul>
  );
};

export default TodoList;

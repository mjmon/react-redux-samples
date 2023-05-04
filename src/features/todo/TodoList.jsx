import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const onToggle = (id) => {
    console.log(`onToggle: ${id}`);
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

import React from "react";

const Todo = (props) => {
  const { todo, onTap } = props;

  return (
    <li
      onClick={onTap}
      className={`hover:cursor-pointer ${
        todo.complete ? "line-through" : "no-underline"
      }`}
    >
      {todo.title}
    </li>
  );
};

export default Todo;

import React from "react";
import { REMOVE_TODO } from "./constants";

const Todo = React.memo(({ todo, dispatch }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => dispatch({ type: REMOVE_TODO, id: todo.id })}>
        Remove
      </button>
    </li>
  );
});

export default Todo;

import React from "react";
import { EDIT_TODO, REMOVE_TODO } from "./constants";

const Todo = React.memo(({ todo, dispatch }) => {
  console.log("TCL: todo", todo);

  const handleChange = ({ target: { value } }) => {
    console.log(todo, value);
    dispatch({ ...todo, type: EDIT_TODO, text: value });
  };

  return (
    <div style={{ display: "flex" }}>
      <input type="text" value={todo.text} onChange={handleChange} />
      <button onClick={() => dispatch({ type: REMOVE_TODO, id: todo.id })}>
        Remove
      </button>
    </div>
  );
});

export default Todo;

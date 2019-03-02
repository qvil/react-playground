import React, { useState } from "react";
import { REMOVE_TODO } from "./constants";

const Todo = React.memo(({ todo, dispatch }) => {
  const [text, setText] = useState(todo.text);

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  return (
    <div style={{ display: "flex" }}>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={() => dispatch({ type: REMOVE_TODO, id: todo.id })}>
        Remove
      </button>
    </div>
  );
});

export default Todo;

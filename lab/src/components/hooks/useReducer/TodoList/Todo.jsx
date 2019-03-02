import React, { useState } from "react";
import { EDIT_TODO } from "./constants";

const Todo = React.memo(({ todo, dispatch }) => {
  const [text, setText] = useState(todo.text);
  const handleChange = e => {
    setText(e.target.value);
    dispatch({ type: EDIT_TODO, text });
  };

  return (
    <div style={{ display: "flex" }}>
      {`${todo.id}. `}
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
});

export default Todo;

import React, { useState } from "react";
import { EDIT_TODO } from "./constants";

const Todo = React.memo(({ todo, dispatch }) => {
  const [text, setText] = useState(todo.text);
  const handleChange = ({ target: { value } }) => {
    setText(value);
    dispatch({ ...todo, type: EDIT_TODO, text: value });
  };

  return (
    <div style={{ display: "flex" }}>
      {`${todo.id + 1}. `}
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
});

export default Todo;

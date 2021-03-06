import React, { useState, useReducer } from "react";
import { ADD_TODO } from "./constants";
import reducer from "./reducer";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  // If you want to set initial state refer to below comment.
  // const initialState = [{ id: 0, text: "Lean React Hooks!" }];
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (todo === "") return;
    dispatch({ type: ADD_TODO, text: todo });
    setTodo("");
  };

  return (
    <div>
      <h3>TodoList</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ol>
        {state.map((todo, index) => (
          <Todo key={index} todo={todo} dispatch={dispatch} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;

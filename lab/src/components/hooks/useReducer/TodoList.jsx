import React, { useState, useReducer } from "react";

const ADD_TODO = "ADD_TODO";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text
        }
      ];
    default:
      return state;
  }
};

const initialState = [{ id: 0, text: "Lean React Hooks!" }];

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
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
        {state.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;

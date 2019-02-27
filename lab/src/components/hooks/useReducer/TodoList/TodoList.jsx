import React, { useState, useReducer } from "react";
import { ADD_TODO } from "./constants";
import reducer from "./reducer";
import { TodoContext } from "./store";

const initialState = [{ id: 0, text: "Lean React Hooks!" }];

const Todo = React.memo(({ todo }) => {
  console.log("Todo render!");
  return <li>{todo.text}</li>;
});

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text: todo });
    setTodo("");
  };

  return (
    <TodoContext.Provider value={1}>
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
            <Todo key={todo.id} todo={todo} />
          ))}
        </ol>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoList;

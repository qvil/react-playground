import React, { useState } from "react";

export default function ManyState() {
  const [age, setAge] = useState(28);
  const [fruit, setFruit] = useState("apple");
  const [todos, setTodos] = useState([{ text: "Lean Hooks!" }]);

  return (
    <div>
      <h2>Many States</h2>
      <h3>Age</h3>
      <div>
        <p>{`Age is ${age}`}</p>
        {/* <input value={age} onChange={() => setAge(age)} /> */}
        <button onClick={() => setAge(20)}>Set Age to 20</button>
      </div>
      <h3>Fruit</h3>
      <div>
        <p>{`My favorite Fruit is ${fruit}`}</p>
        <button onClick={() => setFruit("Water Melon")}>Water Melon</button>
      </div>
      <h3>Todos</h3>
      <div>
        <button onClick={() => setTodos([...todos, { text: "Learn React" }])}>
          Add Learn React
        </button>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

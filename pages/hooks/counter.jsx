import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>
        <a
          href="https://reactjs.org/docs/hooks-intro.html#its-hard-to-reuse-stateful-logic-between-components"
          target="_blank"
          rel="noopener noreferrer"
        >
          Basic Example(Counter)
        </a>
      </h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;

import React, { useState, useEffect } from "react";

const MultiEffect = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Ready");

  // Run once at mounted
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  // Run when to change count
  useEffect(() => {
    if (count > 0) {
      setText("Increased!");
    }
  }, [count]);

  return (
    <div>
      <h1>MultiEffect</h1>
      <p>Count : {count}</p>
      <p>Text: {text}</p>
      <h2>Reference</h2>
      <a href="https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns">
        Tip: Use Multiple Effects to Separate Concerns
      </a>
    </div>
  );
};

export default MultiEffect;

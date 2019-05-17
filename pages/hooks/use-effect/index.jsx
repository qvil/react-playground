import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const sayHello = () => {
    console.log("Hello");
  };

  // useEffect(sayHello); // console.log when update state
  // useEffect(sayHello, []); // console.log once when mount component
  useEffect(sayHello, [number]); // console.log when when update only number state

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </div>
  );
};

export default UseEffect;

import React, { useEffect, useState } from "react";

const EffectTiming = () => {
  console.log("render start");
  const [state, setState] = useState(1);

  useEffect(() => {
    console.log("effect");
  });

  console.log("render end");

  return (
    <div>
      <h1>EffectTiming</h1>
      <p>Check your console</p>
      <button onClick={() => setState(state + 1)}>setState</button>
      <p>state: {state}</p>
    </div>
  );
};

export default EffectTiming;

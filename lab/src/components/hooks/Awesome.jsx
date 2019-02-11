import React, { useState } from "react";

export function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

export default function Awesome() {
  const name = useInput("");
  console.log("TCL: Awesome -> name", name);

  return (
    <div>
      <h2>Awesome Hooks</h2>
      <input {...name} placeholder="Check your console" />
    </div>
  );
}

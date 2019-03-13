// More information : https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
import React, { useRef } from "react";

const UseRef = () => {
  const InputEl = useRef(null);
  const handleClick = () => {
    InputEl.current.focus();
  };

  return (
    <>
      <h3>useRef</h3>
      <input ref={InputEl} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default UseRef;

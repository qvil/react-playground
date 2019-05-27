import React, { useRef, useEffect } from "react";

const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();

  useEffect(() => {
    // componentDidMount
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // componentWillUnmount
    return () => {
      if (element) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

const UseClick = () => {
  const sayHi = () => console.log("Say Hi!");
  const titleEl = useClick(sayHi);

  return (
    <div>
      <h1 ref={titleEl}>UseClick</h1>
    </div>
  );
};

export default UseClick;

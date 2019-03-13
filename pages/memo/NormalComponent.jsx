import React from "react";

const NormalComponent = props => {
  console.log("Rendered Normal Component");
  return (
    <>
      <h3>Normal Component</h3>
      <div>{props.text}</div>
    </>
  );
};

export default NormalComponent;

import React from "react";
import NestedComponent2 from "./NestedComponent2";

const NestedComponent1 = () => {
  console.log("Rendered NestedComponent1");
  return (
    <div style={{ marginLeft: 8 }}>
      - NestedComponent1
      <NestedComponent2 />
    </div>
  );
};

export default NestedComponent1;

import React from "react";
import NestedComponent3 from "./NestedComponent3";

const NestedComponent2 = () => {
  return (
    <div style={{ marginLeft: 8 }}>
      - NestedComponent2
      <NestedComponent3 />
    </div>
  );
};

export default NestedComponent2;

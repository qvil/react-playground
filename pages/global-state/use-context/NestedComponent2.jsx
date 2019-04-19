import React, { memo } from "react";
import NestedComponent3 from "./NestedComponent3";

const NestedComponent2 = () => {
  console.log("Rendered NestedComponent2");
  return (
    <div style={{ marginLeft: 8 }}>
      - NestedComponent2 :
      <p>
        {`This component created with `}
        <a
          href="https://reactjs.org/docs/react-api.html#reactmemo"
          target="_blank"
        >
          React.memo
        </a>
        <br />
        Check it out console!{" "}
        <i style={{ textDecoration: "underline" }}>
          Not render when change the store state.
        </i>
      </p>
      <NestedComponent3 />
    </div>
  );
};

export default memo(NestedComponent2);

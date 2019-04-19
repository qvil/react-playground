import React, { useContext } from "react";
import Store from "./store";
import { INCREMENT, DECREMENT } from "./reducer";

const NestedComponent3 = () => {
  console.log("Rendered NestedComponent3");
  const { store, dispatch } = useContext(Store);

  return (
    <div style={{ marginLeft: 8 }}>
      - NestedComponent3
      <div>
        data : {store.data}
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      </div>
    </div>
  );
};

export default NestedComponent3;

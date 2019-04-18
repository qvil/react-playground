import React, { useReducer } from "react";
import reducer, { INCREMENT, DECREMENT, initialState } from "./reducer";

const NestedComponent3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ marginLeft: 8 }}>
      - NestedComponent3
      <div>
        data : {state.data}
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      </div>
    </div>
  );
};

export default NestedComponent3;

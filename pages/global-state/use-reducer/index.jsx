import React, { useReducer } from "react";
import NestedComponent from "./NestedComponent1";
import reducer, { initialState, INCREMENT, DECREMENT } from "./reducer";

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Global State with only useReducer</h2>
      <p>
        Note that : This is not working exactly. It just show not able to
        managing global state using only useReducer!
      </p>
      <div>
        data : {state.data}
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      </div>
      <NestedComponent />
    </div>
  );
};

export default UseReducer;

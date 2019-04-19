import React, { useReducer } from "react";
import NestedComponent1 from "./NestedComponent1";
import reducer, {
  initialState,
  INCREMENT,
  DECREMENT
} from "../use-reducer/reducer";
import Store from "./store";

const UseContext = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ store, dispatch }}>
      <div>
        <h1>Global State with useReducer + useContext </h1>
        data : {store.data}
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
        <NestedComponent1 />
      </div>
    </Store.Provider>
  );
};

export default UseContext;

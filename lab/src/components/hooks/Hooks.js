import React from "react";
import { Counter, ManyStates } from ".";
import Awesome from "./Awesome";
import ReducerCounter from "./useReducer/ReducerCounter";

function Hooks() {
  return (
    <div>
      <Counter />
      <ManyStates />
      <Awesome />
      <ReducerCounter />
    </div>
  );
}

export default Hooks;

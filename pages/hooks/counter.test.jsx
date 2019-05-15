import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "./counter";
import { isMainThread } from "worker_threads";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("Can render and update a counter", () => {
  console.log("Test!");
  // Test first render and effect
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
});

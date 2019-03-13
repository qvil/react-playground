export { default as ReducerCounter } from "./reducer-counter";
export { default as TodoList } from "./todo-list";
import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

function UseReducer({ router: { pathname } }) {
  return (
    <>
      <h2>Use Reducer</h2>
      <ul>
        <li>
          <Link href={`${pathname}/reducer-counter`}>
            <a>reducer-counter</a>
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/todo-list`}>
            <a>todo-list</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default withRouter(UseReducer);

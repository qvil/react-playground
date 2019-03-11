import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { Counter, ManyStates } from ".";
import Awesome from "./Awesome";
import { ReducerCounter, TodoList } from "./useReducer";
import UseRef from "./UseRef";

function Hooks({ match }) {
  return (
    <>
      <h2>Hooks</h2>
      <ul>
        <li>
          <Link to={`${match.url}/use-reducer-counter`}>
            use reducer-counter
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/use-reducer-todo`}>use-reducer-todo</Link>
        </li>
        <li>
          <Link to={`${match.url}/counter`}>counter</Link>
        </li>
        <li>
          <Link to={`${match.url}/many-states`}>many-states</Link>
        </li>
        <li>
          <Link to={`${match.url}/awesome`}>awesome</Link>
        </li>
        <li>
          <Link to={`${match.url}/useref`}>useRef</Link>
        </li>
      </ul>
      <Route
        path={`${match.url}/use-reducer-counter/`}
        component={ReducerCounter}
      />
      <Route path={`${match.url}/use-reducer-todo/`} component={TodoList} />
      <Route path={`${match.url}/counter/`} component={Counter} />
      <Route path={`${match.url}/many-states/`} component={ManyStates} />
      <Route path={`${match.url}/awesome/`} component={Awesome} />
      <Route path={`${match.url}/useref/`} component={UseRef} />
    </>
  );
}

export default withRouter(Hooks);

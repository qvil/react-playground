import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { Counter, ManyStates } from ".";
import Awesome from "./Awesome";
import ReducerCounter from "./useReducer/ReducerCounter";

function Hooks({ match }) {
  console.log("TCL: Hooks -> match.url", match.url);
  return (
    <>
      <h2>Hooks</h2>
      <ul>
        <li>
          <Link to={`${match.url}/use-reducer`}>use reducer</Link>
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
      </ul>
      <Route path={`${match.url}/use-reducer/`} component={ReducerCounter} />
      <Route path={`${match.url}/counter/`} component={Counter} />
      <Route path={`${match.url}/many-states/`} component={ManyStates} />
      <Route path={`${match.url}/awesome/`} component={Awesome} />
    </>
  );
}

export default withRouter(Hooks);

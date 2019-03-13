import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

function Hooks({ router: { pathname } }) {
  return (
    <>
      <h2>Hooks</h2>
      <ul>
        <li>
          <Link href={`${pathname}/use-reducer`}>
            <a>use-reducer</a>
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/counter`}>
            <a>counter</a>
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/many-states`}>
            <a>many-states</a>
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/awesome`}>
            <a>awesome</a>
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/use-ref`}>
            <a>useRef</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default withRouter(Hooks);

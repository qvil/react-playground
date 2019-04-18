import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const menuList = ["use-reducer", "use-context"];

function GlobalState({ router: { pathname } }) {
  return (
    <>
      <h2>Global State</h2>
      <ul>
        {menuList.map((menu, index) => (
          <li key={index}>
            <Link href={`${pathname}/${menu}`}>
              <a>{menu}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default withRouter(GlobalState);

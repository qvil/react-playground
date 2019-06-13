import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const menuList = [
  "use-reducer",
  "counter",
  "many-states",
  "awesome",
  "use-ref",
  "use-tabs",
  "use-effect",
  "use-title",
  "use-click",
  "middle-ware",
  "use-axios",
  "use-enhanced-axios",
  "use-before-leave",
  "use-confirm",
  "use-prevent-leave",
  "use-local-storage"
];

const exampleList = ["effect-timing"];

function Hooks({ router: { pathname } }) {
  return (
    <>
      <h1>Hooks</h1>
      <ul>
        {menuList.map((menu, index) => (
          <li key={index}>
            <Link href={`${pathname}/${menu}`}>
              <a>{menu === "" ? "Home" : menu}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h2>Example</h2>
      <ul>
        {exampleList.map((menu, index) => (
          <li key={index}>
            <Link href={`${pathname}/${menu}`}>
              <a>{menu === "" ? "Home" : menu}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default withRouter(Hooks);

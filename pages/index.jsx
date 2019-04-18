import Link from "next/link";

const menuList = ["", "memo", "hooks", "web-components", "global-state"];

function Home() {
  return (
    <div>
      <h1>react.js playground. 🚀</h1>
      <nav>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <Link href={`/${menu}`}>
                <a>{menu === "" ? "Home" : menu}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;

import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>react.js playground. 🚀</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/memo">
              <a>Memo</a>
            </Link>
          </li>
          <li>
            <Link href="/hooks">
              <a>Hooks</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

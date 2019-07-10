import Link from "next/link";

const DynamicRoute = () => {
  const postList = ["question", "victory", "insight", "leverage"];
  return (
    <div>
      <h1>DynamicRoute</h1>
      <h2>Post List</h2>
      <ul>
        {postList.map((value, index) => (
          <li key={index}>
            <Link href={`dynamic-route/post/${value}`}>
              <a>{value}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicRoute;

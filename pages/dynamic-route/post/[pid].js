import { useRouter } from "next/router";
import Link from "next/link";

import React from "react";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const commentList = ["Hi", "Hello", "Bye"];

  return (
    <div>
      <h1>Post: {pid}</h1>
      <h2>Comments</h2>
      <ul>
        {commentList.map((value, index) => (
          <li key={index}>
            <Link href={`${pid}/comments/${value}`}>
              <a>{value}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;

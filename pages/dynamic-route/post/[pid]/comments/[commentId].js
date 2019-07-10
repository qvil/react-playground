import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  const { pid, commentId } = router.query;

  return (
    <div>
      <h1>Post: {pid}</h1>
      <p>comment: {commentId}</p>
    </div>
  );
};

export default Comment;

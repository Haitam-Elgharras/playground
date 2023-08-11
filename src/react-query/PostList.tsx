import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
  } = usePosts({ userId, page, pageSize });

  if (isLoading) return <p>"Loading..."</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <select
        onChange={(e) => setUserId(+e.target.value)}
        value={userId}
        className="form-select mb-3"
      >
        <option value="">Select a user</option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 ms-2"
      >
        Next
      </button>
    </>
  );
};

export default PostList;

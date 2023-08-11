import { useState } from "react";
import usePosts from "./hooks/usePosts";
import React from "react";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ userId, pageSize });

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
        {
          // load each page separately
          posts.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.map((post) => (
                <li key={post.id} className="list-group-item">
                  {post.title}
                </li>
              ))}
            </React.Fragment>
          ))
        }
      </ul>

      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-2"
      >
        {isFetchingNextPage ? "Loading ..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;

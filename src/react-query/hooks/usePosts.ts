import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios, { all } from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostQuery {
  userId?: number;
  pageSize: number;
}
// userId: number | undefined
const usePosts = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    // just to structure the cache and make a deps. it's like endpoints users/1/posts
    //any time a deps change, react-query will refetch the data
    queryKey: query.userId ? ["users", query.userId, "posts"] : ["posts"],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId: query.userId,
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
    keepPreviousData: true,
    // will be returned automatically to the queryFn
    getNextPageParam: (lastPage, allPages) => {
      //1->2
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePosts;

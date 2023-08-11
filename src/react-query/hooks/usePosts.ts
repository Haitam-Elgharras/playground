import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostQuery {
  // userId?: number;
  page: number;
  pageSize: number;
}
// userId: number | undefined
const usePosts = (query: PostQuery) =>
  useQuery<Post[], Error>({
    // just to structure the cache and make a deps. it's like endpoints users/1/posts
    //any time a deps change, react-query will refetch the data
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
    keepPreviousData: true,
  });

export default usePosts;

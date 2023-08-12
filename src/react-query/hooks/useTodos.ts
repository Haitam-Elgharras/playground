import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  //just a call back to use with react query
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  // we add the type of the error cause react query doesn't know the type of the error that might happen(deps on the library)
  return useQuery<Todo[], Error>({
    // the data will be accessible in the cache via this key
    queryKey: CACHE_KEY_TODOS,
    queryFn: fetchTodos,
    staleTime: 10 * 1000,
  });
};

export default useTodos;

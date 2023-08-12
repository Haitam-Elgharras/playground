import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Todo>("/todos");

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  // we add the type of the error cause react query doesn't know the type of the error that might happen(deps on the library)
  return useQuery<Todo[], Error>({
    // the data will be accessible in the cache via this key
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;

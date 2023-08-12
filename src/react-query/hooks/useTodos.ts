import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  // we add the type of the error cause react query doesn't know the type of the error that might happen(deps on the library)
  return useQuery<Todo[], Error>({
    // the data will be accessible in the cache via this key
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;

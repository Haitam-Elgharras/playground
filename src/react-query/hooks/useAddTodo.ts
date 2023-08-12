import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Todo>("/todos");

interface addTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  //add todo=...
  return useMutation<Todo, Error, Todo, addTodoContext>({
    mutationFn: apiClient.post, //the todo el is passed automatically

    //for optimistic updates: this fn called before the mutationFn
    onMutate: (newTodo: Todo) => {
      // old todos
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      // APPROACH 2: Updating the cache directly
      //just because we have a fake api so if we refetch we will lose the new todo
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();
      // if (ref.current) ref.current.value = ""; this is about UI but the hooks are about data management

      // the context object
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      /*
      APPROACH 1: Invalidating the cache(refetching)

      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_TODOS,
      })

      */
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;

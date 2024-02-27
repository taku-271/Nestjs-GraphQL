import { useCreateTodoMutation } from "./mutate";
import { useGetTodosQuery } from "./query";

export const useGetTodos = () => {
  const { data, loading, error } = useGetTodosQuery();

  if (error) {
    throw error;
  }

  return { todos: data?.getTodos, getTodosLoading: loading };
};

export const useCreateTodo = () => {
  const [mutateFunction, { loading, error }] = useCreateTodoMutation();

  if (error) {
    throw error;
  }

  return { createTodo: mutateFunction, createTodoLoading: loading };
};

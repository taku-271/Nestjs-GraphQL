import { CreateTodoDocument, GetTodosDocument } from "@/graphql/graphql";
import { useMutation } from "@apollo/client";

export const useCreateTodoMutation = () => {
  return useMutation(CreateTodoDocument, {
    refetchQueries: [{ query: GetTodosDocument }],
  });
};

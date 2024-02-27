import {
  CreateTodoDocument,
  GetTodosDocument,
  UpdateTodoDocument,
} from "@/graphql/graphql";
import { useMutation } from "@apollo/client";

export const useCreateTodoMutation = () => {
  return useMutation(CreateTodoDocument, {
    refetchQueries: [{ query: GetTodosDocument }],
  });
};

export const useUpdateTodoMutation = () => {
  return useMutation(UpdateTodoDocument, {
    refetchQueries: [{ query: GetTodosDocument }],
  });
};

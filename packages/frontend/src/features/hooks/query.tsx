import { GetTodosQuery, GetTodosDocument } from "@/graphql/graphql";
import { useQuery } from "@apollo/client";

export const useGetTodosQuery = () => {
  return useQuery<GetTodosQuery>(GetTodosDocument);
};

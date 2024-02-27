import { useMutation, useQuery } from "@apollo/client";
import {
  CreateTodoDocument,
  GetTodosDocument,
  GetTodosQuery,
} from "@/graphql/graphql";
import { useState } from "react";
import TodoList from "@/features/components/TodoList";
import TodoCreate from "@/features/components/TodoCreate";

const Index = () => {
  const { loading, error } = useQuery<GetTodosQuery>(GetTodosDocument);

  if (error) throw error;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <TodoCreate />
      <TodoList />
    </>
  );
};

export default Index;

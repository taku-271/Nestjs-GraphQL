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
  const [title, setTitle] = useState("");
  const { data, loading, error } = useQuery<GetTodosQuery>(GetTodosDocument);
  const [mutateFunction] = useMutation(CreateTodoDocument, {
    refetchQueries: [{ query: GetTodosDocument }],
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutateFunction({ variables: { input: { title } } });
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

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

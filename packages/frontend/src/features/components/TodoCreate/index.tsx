import { useCreateTodo } from "@/features/hooks/store";
import { useState } from "react";

const TodoCreate = () => {
  const { createTodo } = useCreateTodo();

  const [title, setTitle] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTodo({ variables: { input: { title } } });
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>Create Todo</h1>
        <input type="text" onChange={(e) => onChangeTitle(e)} />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default TodoCreate;

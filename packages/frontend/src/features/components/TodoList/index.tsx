import { useGetTodos } from "@/features/hooks/store";

const TodoList = () => {
  const { todos, getTodosLoading } = useGetTodos();

  return (
    <div>
      {getTodosLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Todo List</h1>
          {todos?.map((todo) => (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.is_completed ? "Completed" : "Not completed"}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TodoList;

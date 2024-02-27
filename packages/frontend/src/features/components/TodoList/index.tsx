import { useGetTodos, useUpdateTodo } from "@/features/hooks/store";
import { Todo } from "@/graphql/graphql";

const TodoList = () => {
  const { todos, getTodosLoading } = useGetTodos();
  const { updateTodo } = useUpdateTodo();

  const onChangeChecked = (todo: { id: number; isCompleted: boolean }) => {
    updateTodo({
      variables: {
        input: {
          id: todo.id,
          isCompleted: !todo.isCompleted,
        },
      },
    });
  };

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
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => onChangeChecked(todo)}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TodoList;

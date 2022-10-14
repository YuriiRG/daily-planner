import { useMainStore } from '../store';

type TodoItemProps = {
  dayId: string;
  todoId: number;
};

export default function TodoItem({ dayId, todoId }: TodoItemProps) {
  const data = useMainStore(
    (s) =>
      s.days[dayId]?.todos.filter((todo) => todo.id === todoId)[0]
  );
  const deleteTodo = useMainStore((s) => s.deleteTodo);
  const editTodo = useMainStore((s) => s.editTodo);
  if (!data) {
    return <div>Error, todo not found</div>;
  }
  return (
    <div>
      <input
        type={'checkbox'}
        onChange={(e) =>
          editTodo(dayId, todoId, {
            text: data.text,
            isDone: e.currentTarget.checked,
          })
        }
        checked={data.isDone}
      />
      {data.text}
      <button onClick={() => deleteTodo(dayId, todoId)}>X</button>
    </div>
  );
}

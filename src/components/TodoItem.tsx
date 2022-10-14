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
  if (!data) {
    return <div>Error, todo not found</div>;
  }
  return (
    <div>
      {data.text}
      <button onClick={() => deleteTodo(dayId, todoId)}>X</button>
    </div>
  );
}

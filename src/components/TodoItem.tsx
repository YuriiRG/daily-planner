import { useState } from 'react';
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

  const [isEditing, setIsEditing] = useState(false);

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
      {isEditing ? (
        <input
          type={'text'}
          value={data.text}
          onInput={(e) =>
            editTodo(dayId, todoId, {
              text: e.currentTarget.value,
              isDone: data.isDone,
            })
          }
          autoFocus={true}
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>
          {data.text}
        </span>
      )}

      <button onClick={() => deleteTodo(dayId, todoId)}>X</button>
    </div>
  );
}

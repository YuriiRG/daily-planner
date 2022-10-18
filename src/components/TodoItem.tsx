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
    <div className='group flex items-end gap-2'>
      <input
        type={'checkbox'}
        onChange={(e) =>
          editTodo(dayId, todoId, {
            text: data.text,
            isDone: e.currentTarget.checked,
          })
        }
        checked={data.isDone}
        className='h-4 w-4 self-center outline-0 focus:outline-none'
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
          className=''
        />
      ) : (
        <div
          onDoubleClick={() => setIsEditing(true)}
          className={
            'max-w-[14.5rem] break-words ' +
            (data.isDone
              ? 'text-gray-600 line-through'
              : 'text-gray-900 ')
          }
        >
          {data.text}
        </div>
      )}
      <div className='hidden flex-grow justify-end self-center group-hover:flex'>
        <button
          onClick={() => deleteTodo(dayId, todoId)}
          className='mr-3 h-6 w-6'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M0 0h24v24H0z' stroke='none' />
            <path d='M18 6L6 18' />
            <path d='M6 6L18 18' />
          </svg>
        </button>
      </div>
    </div>
  );
}

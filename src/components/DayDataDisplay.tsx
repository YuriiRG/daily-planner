import getToday from '../helpers/getToday';
import { useMainStore } from '../store';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';
import XButton from './XButton';

type DayDataDisplayProps = {
  id: string;
};

export default function DayDataDisplay({ id }: DayDataDisplayProps) {
  const data = useMainStore((s) => s.days[id]);
  const addTodo = useMainStore((s) => s.addTodo);
  if (data === undefined) {
    return <div>Error. Day not found</div>;
  }
  return (
    <div className='flex flex-col items-stretch sm:h-full sm:flex-grow sm:flex-row'>
      <div className='sm:flex-shrink sm:flex-grow sm:basis-0'>
        {id}
      </div>
      <div className='border-l-2 border-gray-300 text-lg sm:flex-shrink sm:basis-80'>
        {data.todos.map((todo) => (
          <TodoItem key={todo.id} dayId={id} todoId={todo.id} />
        ))}
        <NewTodo
          addTodo={(newTodo) => addTodo(getToday(), newTodo)}
        />
      </div>
    </div>
  );
}

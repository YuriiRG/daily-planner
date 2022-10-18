import getToday from '../helpers/getToday';
import { useMainStore } from '../store';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';

type DayDataDisplayProps = {
  id: string;
};
// Add check if length of one word is equal 0 don't allow to create todo item
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
      <div className='border-l-2 border-gray-300 pl-3 text-lg sm:flex-shrink sm:basis-80'>
        <h2 className='text-2xl'>Todos</h2>
        <div className='flex flex-col'>
          {data.todos.map((todo) => (
            <TodoItem key={todo.id} dayId={id} todoId={todo.id} />
          ))}
        </div>
        <NewTodo
          addTodo={(newTodo) => addTodo(getToday(), newTodo)}
        />
      </div>
    </div>
  );
}

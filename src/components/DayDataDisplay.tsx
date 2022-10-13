import getToday from '../helpers/getToday';
import { useMainStore } from '../store';
import NewTodo from './NewTodo';

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
      <div className='min-h-[10rem] bg-red-500 sm:flex-shrink sm:flex-grow sm:basis-0'>
        {'TODO'}
      </div>
      <div className='min-h-[10rem] bg-blue-500 sm:flex-shrink sm:flex-grow sm:basis-0'>
        {data.todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
        <NewTodo
          addTodo={(newTodo) => addTodo(getToday(), newTodo)}
        />
      </div>
    </div>
  );
}

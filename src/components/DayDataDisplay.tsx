import { DayData } from '../types';

type DayDataDisplayProps = DayData;

export default function DayDataDisplay({
  notes,
  todos,
}: DayDataDisplayProps) {
  return (
    <div className='flex flex-col items-stretch sm:h-full sm:flex-grow sm:flex-row'>
      <div className='min-h-[10rem] bg-red-500 sm:flex-shrink sm:flex-grow sm:basis-0'>
        {notes}
      </div>
      <div className='min-h-[10rem] bg-blue-500 sm:flex-shrink sm:flex-grow sm:basis-0'>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    </div>
  );
}

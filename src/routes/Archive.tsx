import { Link } from 'react-router-dom';
import { useMainStore } from '../store';

export default function Archive() {
  const days = useMainStore((s) => s.days);
  return (
    <div className='flex gap-6 m-6 flex-col sm:px-20 md:px-40'>
      {days.map((day) => (
        <Link key={day.id} className='block' to={`/archive/${day.id}`}>
          <div className='bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition-colors flex gap-4'>
            <div className='basis-40'>
              {new Date(day.id).toLocaleDateString('en', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className='basis-20'>{day.todos.length} todos </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

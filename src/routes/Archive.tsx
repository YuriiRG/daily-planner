import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useMainStore } from '../store';

export default function Archive() {
  const days = useMainStore((s) => s.days);
  return (
    <div className='flex gap-6 m-6 flex-col sm:px-20 md:px-40'>
      {
        // map on object
        Object.keys(days)
          .reduce((result, key) => {
            result.push(
              <Link key={key} className='block' to={`/archive/${key}`}>
                <div className='bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition-colors flex gap-4'>
                  <div className='basis-40'>
                    {new Date(key).toLocaleDateString('en', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className='basis-20'>
                    {days[key].todos.length} todos{' '}
                  </div>
                </div>
              </Link>
            );
            return result;
          }, [] as ReactNode[])
          .reverse()
      }
    </div>
  );
}

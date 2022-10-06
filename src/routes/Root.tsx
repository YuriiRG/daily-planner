import { useState } from 'react';

export default function Root() {
  const [count, setCount] = useState(0);

  return (
    <div className='text-center'>
      <h1>Vite + React + TS</h1>
      <div className='card'>
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useMainStore } from '../store';

export default function Root() {
  const count = useMainStore((s) => s.counter);
  const increment = useMainStore((s) => s.inc);
  return (
    <div className='text-center'>
      <h1>Vite + React + TS</h1>
      <div className='card'>
        <button onClick={increment}>count is {count}</button>
        <div>Some changes</div>
      </div>
    </div>
  );
}

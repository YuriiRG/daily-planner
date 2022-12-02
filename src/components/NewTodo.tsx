import { useState } from 'react';
import { Todo } from '../store';
import Button from './Button';

type NewTodoProps = {
  addTodo: (newTodo: Todo) => void;
};

export default function NewTodo({ addTodo }: NewTodoProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  const handleStartingNewTodo = () => {
    setIsCreating(true);
  };

  const handleAddingTodo = () => {
    setIsCreating(false);
    addTodo({
      id: Date.now(),
      text: newTodoText,
      isDone: false
    });
    setNewTodoText('');
  };

  const handleCancelingTodo = () => {
    setIsCreating(false);
    setNewTodoText('');
  };
  return (
    <div className='mt-2'>
      {isCreating ? (
        <>
          <input
            placeholder='New todo text'
            value={newTodoText}
            onInput={(e) => setNewTodoText(e.currentTarget.value)}
            className='mb-1 block rounded border-2 px-1'
          />
          <Button className='mr-1' onClick={handleAddingTodo}>
            Add
          </Button>
          <Button className='ml-1' onClick={handleCancelingTodo}>
            Cancel
          </Button>
        </>
      ) : (
        <Button onClick={handleStartingNewTodo}>Add</Button>
      )}
    </div>
  );
}

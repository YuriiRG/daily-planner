import { useState } from 'react';
import { Todo } from '../store';

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
    });
    setNewTodoText('');
  };

  const handleCancelingTodo = () => {
    setIsCreating(false);
    setNewTodoText('');
  };
  return isCreating ? (
    <div>
      <input
        placeholder='New todo text'
        value={newTodoText}
        onInput={(e) => setNewTodoText(e.currentTarget.value)}
        className='block'
      />
      <button onClick={handleAddingTodo}>Add</button>
      <button onClick={handleCancelingTodo}>Cancel</button>
    </div>
  ) : (
    <button onClick={handleStartingNewTodo}>Add</button>
  );
}

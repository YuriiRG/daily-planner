import create from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type Day = {
  id: string;
  todos: Todo[];
  notes: string;
};

export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

export type MainState = {
  days: Day[];
};

export type MainActions = {
  importData: (newStore: MainState) => void;
  exportData: () => MainState;
  initNewDay: (id: string) => void;
  deleteTodo: (dayId: string, todoId: number) => void;
  addTodo: (dayId: string, newTodo: Todo) => void;
  editTodo: (dayId: string, newTodo: Todo) => void;
  editNotes: (dayId: string, newNotes: string) => void;
};

type MainStore = MainState & MainActions;

export const initialState: MainState = {
  days: [
    {
      id: 'permanent',
      notes: '',
      todos: []
    }
  ]
};
export const useMainStore = create<MainStore>()(
  immer(
    persist(
      (set, get) => ({
        ...initialState,
        addTodo: (dayId, newTodo) =>
          set((s) => {
            s.days.find((d) => d.id === dayId)?.todos.push(newTodo);
          }),
        initNewDay: (newId) =>
          set((s) => {
            if (s.days.find((d) => d.id === newId) === undefined) {
              s.days.push({ id: newId, todos: [], notes: '' });
            }
          }),
        deleteTodo: (dayId, todoId) =>
          set((s) => {
            const todos = s.days.find((d) => d.id === dayId)?.todos;
            todos?.splice(
              todos.findIndex((t) => t.id === todoId),
              1
            );
          }),
        editTodo: (dayId, newTodo) =>
          set((s) => {
            const todos = s.days.find((d) => (d.id = dayId))?.todos;
            const todoIndex = todos?.findIndex((t) => t.id === newTodo.id);
            if (!todos || todoIndex === undefined) {
              console.log(todos, todoIndex);
              throw new Error('Todos not found');
            }
            todos[todoIndex] = newTodo;
          }),
        editNotes: (dayId, newNotes) =>
          set((s) => {
            const day = s.days.find((d) => d.id === dayId);
            if (!day) {
              throw new Error('Day not found');
            }
            day.notes = newNotes;
          }),
        importData: (newStore) => set(newStore),
        exportData: () => get()
      }),
      {
        name: 'main-storage'
      }
    )
  )
);

import create from 'zustand';
import type { StoreApi } from 'zustand';
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

export type MainStore = {
  days: Day[];
};

export type MainStoreActions = {
  importData: (newStore: MainStore) => void;
  exportData: () => MainStore;
  initNewDay: (id: string) => void;
  deleteTodo: (dayId: string, todoId: number) => void;
  addTodo: (dayId: string, newTodo: Todo) => void;
  editTodo: (dayId: string, newTodo: Todo) => void;
  editNotes: (dayId: string, newNotes: string) => void;
};

type Store = MainStore & MainStoreActions;

export const initialState: MainStore = {
  days: []
};

function createStoreActions(
  set: StoreApi<Store>['setState'],
  get: StoreApi<Store>['getState']
): MainStoreActions {
  return {
    addTodo: (dayId, newTodo) =>
      set((s) => {
        s.days.find((d) => d.id === dayId)?.todos.push(newTodo);
        return s;
      }),
    initNewDay: (newId) =>
      set((s) => {
        console.log(s);
        if (s.days.find((d) => d.id === newId) === undefined) {
          s.days.push({ id: newId, todos: [], notes: '' });
        }
        return s;
      }),
    deleteTodo: (dayId, todoId) =>
      set((s) => {
        const todos = s.days.find((d) => d.id === dayId)?.todos;
        todos?.splice(
          todos.findIndex((t) => t.id === todoId),
          1
        );
        return s;
      }),
    editTodo: (dayId, newTodo) =>
      set((s) => {
        const todos = s.days.find((d) => (d.id = dayId))?.todos;
        const todoIndex = todos?.findIndex((t) => t.id === newTodo.id);
        if (!todos || !todoIndex) {
          throw new Error('Todos not found');
        }
        todos[todoIndex] = newTodo;
        return s;
      }),
    editNotes: (dayId, newNotes) =>
      set((s) => {
        const day = s.days.find((d) => d.id === dayId);
        if (!day) {
          throw new Error('Day not found');
        }
        day.notes = newNotes;
        return s;
      }),
    importData: (newStore) => set(newStore),
    exportData: () => get()
  };
}

export const useMainStore = create<Store>()(
  immer(
    persist(
      (set, get) => ({
        ...initialState,
        ...createStoreActions(set, get)
      }),
      {
        name: 'main-storage'
      }
    )
  )
);

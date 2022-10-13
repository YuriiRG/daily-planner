import produce from 'immer';
import { s } from 'vitest/dist/index-6e18a03a';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export type MainStore = {
  days: Days;
};
type Days = {
  [id: string]: Day | undefined;
};
type Day = {
  todos: Todo[];
};
type Todo = {
  id: number;
  text: string;
};

export type MainStoreActions = {
  addTodo: (dayId: string, newTodo: Todo) => void;
  import: (newStore: MainStore) => void;
  export: () => MainStore;
};

export const initialState: MainStore = {
  days: {
    '2022-10-13': {
      todos: [
        {
          id: 1,
          text: 'test todo',
        },
        {
          id: 2,
          text: 'second test todo',
        },
      ],
    },
  },
};

export const useMainStore = create<MainStore & MainStoreActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      addTodo: (dayId, newTodo) => {
        set((s) =>
          produce(s, (draftState) => {
            draftState.days[dayId]?.todos.push(newTodo);
          })
        );
      },
      import: (newStore) => set(newStore),
      export: () => get(),
    }),
    {
      name: 'main-storage',
    }
  )
);

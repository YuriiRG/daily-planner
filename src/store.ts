import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export type MainStore = {
  days: Days;
};

export type Days = {
  [id: string]: Day | undefined;
};

export type Day = {
  todos: Todo[];
};

export type Todo = {
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

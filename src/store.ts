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
  import: (newStore: MainStore) => void;
  export: () => MainStore;
};

export const initialState: MainStore = {
  days: {
    '2022-10-13': {
      todos: [
        {
          id: 123,
          text: 'test todo',
        },
        {
          id: 1234,
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
      import: (newStore) => set(newStore),
      export: () => get(),
    }),
    {
      name: 'main-storage',
    }
  )
);

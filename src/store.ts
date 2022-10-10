import create from 'zustand';
import { persist } from 'zustand/middleware';

export type MainStore = {
  counter: number;
};

export type MainStoreActions = {
  inc: () => void;
  import: (newStore: MainStore) => void;
  export: () => MainStore;
};

export const initialState: MainStore = {
  counter: 0,
};

export const useMainStore = create<MainStore & MainStoreActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      inc: () => set((s) => ({ counter: s.counter + 1 })),
      import: (newStore) => set(newStore),
      export: () => get(),
    }),
    {
      name: 'main-storage',
    }
  )
);

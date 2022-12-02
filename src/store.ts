import produce from 'immer';
import create from 'zustand';
import type { StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';

export type MainStore = {
  days: Days;
};

export type Days = {
  [id: string]: Day;
};

export type Day = {
  todos: Todo[];
  notes: string;
};

export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

export type MainStoreActions = {
  importData: (newStore: MainStore) => void;
  exportData: () => MainStore;
  initNewDay: (id: string) => void;
  deleteTodo: (dayId: string, todoId: number) => void;
  addTodo: (dayId: string, newTodo: Todo) => void;
  editTodo: (
    dayId: string,
    todoId: number,
    newTodo: Omit<Todo, 'id'>
  ) => void;
  editNotes: (dayId: string, newNotes: string) => void;
};

type Store = MainStore & MainStoreActions;

export const initialState: MainStore = {
  days: {},
};

function createStoreActions(
  set: StoreApi<Store>['setState'],
  get: StoreApi<Store>['getState']
): MainStoreActions {
  return {
    addTodo: (dayId, newTodo) => {
      set((s) => {
        return produce(s, (draftState) => {
          draftState.days[dayId]?.todos.push(newTodo);
        });
      });
    },
    initNewDay: (newId) => {
      set((s) => {
        if (s.days[newId] === undefined) {
          return {
            days: { ...s.days, [newId]: { todos: [], notes: '' } },
          };
        }
        return s;
      });
    },
    deleteTodo: (dayId, todoId) => {
      set((s) => {
        const newTodos = s.days[dayId]?.todos.filter(
          (todo) => todo.id !== todoId
        );
        if (!newTodos) {
          return s;
        }
        const notes = s.days[dayId]?.notes;
        if (notes === undefined) {
          return s;
        }
        return {
          days: {
            ...s.days,
            [dayId]: {
              todos: newTodos,
              notes,
            },
          },
        };
      });
    },
    editTodo: (dayId, todoId, newTodo) => {
      set((s) => {
        let newTodos = s.days[dayId]?.todos.slice();
        if (!newTodos) {
          return s;
        }
        newTodos = newTodos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...newTodo,
              id: todo.id,
            };
          }
          return todo;
        });
        const notes = s.days[dayId]?.notes;
        if (notes === undefined) {
          return s;
        }
        return {
          days: {
            ...s.days,
            [dayId]: {
              todos: newTodos,
              notes,
            },
          },
        };
      });
    },
    editNotes: (dayId, newNotes) => {
      set((s) => {
        const todos = s.days[dayId]?.todos.slice();
        if (!todos) {
          return s;
        }
        return {
          days: {
            ...s.days,
            [dayId]: {
              todos,
              notes: newNotes,
            },
          },
        };
      });
    },
    importData: (newStore) => set(newStore),
    exportData: () => get(),
  };
}

export const useMainStore = create<Store>()(
  persist(
    (set, get) => ({
      ...initialState,
      ...createStoreActions(set, get),
    }),
    {
      name: 'main-storage',
    }
  )
);

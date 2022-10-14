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
  isDone: boolean;
};

export type MainStoreActions = {
  import: (newStore: MainStore) => void;
  export: () => MainStore;
  initNewDay: (id: string) => void;
  deleteTodo: (dayId: string, todoId: number) => void;
  addTodo: (dayId: string, newTodo: Todo) => void;
  editTodo: (
    dayId: string,
    todoId: number,
    newTodo: Omit<Todo, 'id'>
  ) => void;
};

export const initialState: MainStore = {
  days: {},
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
      initNewDay: (newId) =>
        set((s) => {
          if (s.days[newId] === undefined) {
            return { days: { ...s.days, [newId]: { todos: [] } } };
          }
          return s;
        }),
      deleteTodo: (dayId, todoId) =>
        set((s) => {
          const newTodos = s.days[dayId]?.todos.filter(
            (todo) => todo.id !== todoId
          );
          if (!newTodos) {
            return s;
          }
          return {
            days: {
              ...s.days,
              [dayId]: {
                todos: newTodos,
              },
            },
          };
        }),
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
          return {
            days: {
              ...s.days,
              [dayId]: {
                todos: newTodos,
              },
            },
          };
        });
      },
      import: (newStore) => set(newStore),
      export: () => get() as MainStore,
    }),
    {
      name: 'main-storage',
    }
  )
);

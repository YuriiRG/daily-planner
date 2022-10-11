export type DayData = {
  notes: string; // TODO replace with slate notes type
  todos: Todo[];
};

export type Todo = {
  id: number;
  text: string;
};

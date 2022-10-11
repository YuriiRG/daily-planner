import { DayData } from '../types';

export default function useLatestDayData(): DayData {
  // TODO get latest data from zustand
  return {
    notes: 'blabala notes',
    todos: [{ text: 'the only todo', id: 123 }],
  };
}

import { DayData } from '../types';

type DayDataDisplayProps = DayData;

export default function DayDataDisplay({
  notes,
  todos,
}: DayDataDisplayProps) {
  return (
    <div>
      <div>{notes}</div>
      <div>{todos[0].text}</div>
    </div>
  );
}

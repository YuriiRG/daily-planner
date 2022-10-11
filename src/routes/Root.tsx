import DayDataDisplay from '../components/DayDataDisplay';
import useLatestDayData from '../hooks/useLatestDayData';
import { useMainStore } from '../store';

export default function Root() {
  const count = useMainStore((s) => s.counter);
  const increment = useMainStore((s) => s.inc);
  const latestDay = useLatestDayData();
  return (
    <div className='flex-grow'>
      <DayDataDisplay {...latestDay} />
    </div>
  );
}

import DayDataDisplay from '../components/DayDataDisplay';
import getToday from '../helpers/getToday';
import { useMainStore } from '../store';

export default function Root() {
  const todayId = getToday();
  const initNewDay = useMainStore((s) => s.initNewDay);
  initNewDay(todayId);
  return <DayDataDisplay id={todayId} />;
}

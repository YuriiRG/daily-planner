import DayDataDisplay from '../components/DayDataDisplay';
import getToday from '../helpers/getToday';

export default function Root() {
  const todayId = getToday();
  return <DayDataDisplay id={todayId} />;
}

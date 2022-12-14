import { useParams } from 'react-router-dom';
import DayDataDisplay from '../components/DayDataDisplay';

export default function ArchiveDay() {
  const params = useParams();
  if (!params.dayId) {
    throw new Error('No dayId provided');
  }
  return <DayDataDisplay id={params.dayId} />;
}

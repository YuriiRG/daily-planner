import { useParams } from "react-router-dom"
import DayDataDisplay from "../components/DayDataDisplay";
import { useMainStore } from "../store";

export default function ArchiveDay() {
  const params = useParams();
  const days = useMainStore((s) => s.days);
  if (!params.dayId || !(params.dayId in days)) {
    return <>Invalid day</>
  }
  return (
    <DayDataDisplay id={params.dayId}/>
  )
}

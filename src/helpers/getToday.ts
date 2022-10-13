export default function getToday() {
  return new Date().toISOString().substring(0, 10);
}

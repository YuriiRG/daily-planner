import { useMainStore } from '../store';

export default function Archive() {
  const days = useMainStore((s) => s.days);
  return (
    <>
      {
        // map on object
        Object.keys(days).reduce((result, key) => {
          result.push(
            <div key={key}>
              {key}: {days[key].todos.length} todo items
            </div>
          );
          return result;
        }, [] as unknown[])
      }
    </>
  );
}

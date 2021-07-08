import { useCount } from "./custom-hooks/useCount";

export const UsingHook = () => {
  const { count, increment } = useCount();
  return (
    <div>
      <h1>With hook</h1>
      <div>Total: {count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

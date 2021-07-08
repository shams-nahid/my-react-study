import { useState } from "react";

export const WithoutHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Without Hook</h1>
      <div>Total: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

import { useState } from "react";

export default function Headline({ title }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };

  const decrement = () => {
    setCount((x) => x - 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Overall Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

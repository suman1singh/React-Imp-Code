import React from "react";
import useCounter from "./useCounter";

export default function Counter1() {
  const [count, Inc, Dec] = useCounter(10);
  return (
    <div>
      <button onClick={Inc}>Increment</button>
      <br />
      <h1>{count}</h1>
      <button onClick={Dec}>Decrement</button>
    </div>
  );
}

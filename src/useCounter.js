import React from "react";

export default function useCounter(initialValue) {
  const [count, setCount] = React.useState(initialValue);
  function Inc() {
    setCount(count + 1);
  }
  function Dec() {
    setCount(count - 1);
  }
  return [count, Inc, Dec];
}

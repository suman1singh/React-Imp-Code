import React from "react";

export default function ComponentA() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (count === 5) {
      throw new Error("App crashed from componentA");
    }
  }, [count]);
  return (
    <div>
      <center>
        <h1>ComponentA: {count}</h1>
        <button onClick={() => setCount(count + 1)}>
          ComponentA Increament
        </button>
      </center>
    </div>
  );
}

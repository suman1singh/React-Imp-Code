import React from "react";

export default function ComponentB() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <hr />
      <center>
        <h1>ComponentB : {count}</h1>
        <button onClick={() => setCount(count + 1)}>
          ComponentB Increament
        </button>
      </center>
    </div>
  );
}

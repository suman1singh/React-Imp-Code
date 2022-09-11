import React, { useState } from "react";

export default function App47() {
  return (
    <div>
      <HOCRed cmp={Input} />
      <HOCBlue cmp={Input} />
      <HOCGreen cmp={Input} />
    </div>
  );
}
function HOCRed(props) {
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>
        Green Component
        <props.cmp />
      </h1>
    </>
  );
}
function HOCBlue(props) {
  return (
    <>
      <h1 style={{ backgroundColor: "blue" }}>
        Green Component
        <props.cmp />
      </h1>
    </>
  );
}
function HOCGreen(props) {
  return (
    <>
      <h1 style={{ backgroundColor: "green" }}>
        Green Component
        <props.cmp />
      </h1>
    </>
  );
}
function Input() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>InputComponent{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

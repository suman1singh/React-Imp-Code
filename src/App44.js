import React, { useRef } from "react";
import User44 from "./User44";

export default function App44() {
  const InputRef = useRef();
  function updateData() {
    console.log("called");
    InputRef.current.value = "10000";
    InputRef.current.style.borderColor = "blue";
  }
  return (
    <div>
      <h1>ForwardRef example</h1>
      <User44 ref={InputRef} />
      <br />
      <button onClick={() => updateData()}>update data</button>
    </div>
  );
}

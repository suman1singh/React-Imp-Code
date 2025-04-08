//forwardRef in React is a special utility used when you want to pass a ref from
//a parent component down to a child component, especially when the child is a custom component.
//Normally, ref only works on DOM elements (<input />, <div />, etc.). But if you use a custom
//component, ref won’t automatically work — unless you wrap it with React.forwardRef.

//Why use forwardRef?
//To give parent components direct access to a child’s DOM element (or some exposed method).
//forwardRef passes the ref as the second argument.

//Use it only when needed, like when you're making a reusable component
//(e.g. styled input, button, etc.) and want it to behave like a native element.

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

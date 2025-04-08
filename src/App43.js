//In React, a ref (short for reference) is used to directly access or interact with 
//DOM elements or React elements
//Normally in React, we use state and props to control components. But sometimes we need to:
//Focus an input
//Trigger animations
//Read or modify DOM values
//Integrate with non-React libraries (e.g., chart.js, D3)

//Common use cases:
//1. DOM manipulation: focus, scroll, measurements
//2. Persisting values: store values across renders without causing re-renders
//3. Integrating with third-party libraries

import React, { useRef } from "react";

export default function App43() {
  const InputRef = useRef();
  function handleInput() {
    console.log("function call");
    InputRef.current.value = "1000";
    // InputRef.current.style.backgroundColor="red";
    InputRef.current.style.marginTop = "20px";
    InputRef.current.style.borderColor = "red";
  }
  return (
    <div>
      <h1>useRef hooks example</h1>
      <input type="text" ref={InputRef} />
      <button onClick={() => handleInput()}>Change Ref</button>
    </div>
  );
}

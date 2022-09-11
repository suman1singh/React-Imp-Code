import React, { useRef } from "react";

export default function App46() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  function submitForm(e) {
    e.preventDefault();
    console.log("Input1 data:", inputRef1.current.value); // Controlled by DOM
    console.log("Input2 data:", inputRef2.current.value); // Controlled by DOM
    let input3 = document.getElementById("Input3").value; // Controlled by react state
    console.log("Input3 data:", input3);
  }
  return (
    <div>
      <br />
      <form onSubmit={submitForm}>
        <input ref={inputRef1} type="text" /> <br />
        <br />
        <input ref={inputRef2} type="text" />
        <br />
        <br />
        <input id="Input3" type="text" />
        <br />
        <br />
        <button>Submit</button>
        <br />
      </form>
    </div>
  );
}

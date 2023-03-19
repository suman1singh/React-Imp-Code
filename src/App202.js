// Show and hide content
import React, { useState } from "react";

export default function App202() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide content" : "Show content"}
      </button>
      {show && <h1>Suman is software engineer at tcs</h1>}
    </div>
  );
}

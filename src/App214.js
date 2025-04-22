//useEffect() hook as componentWillUnmount()
//✅ So, what's the return inside useEffect for?
//The return in a useEffect callback is for cleanup. 
//React calls it when the component unmounts or before running the effect again (if dependencies changed).

// If you don’t clean up:
// You might get multiple intervals stacking(overlapping each other) up 😵
// Or memory leaks if the component unmounts 🧠💣

// ✅ Other common cleanups:
// clearTimeout()
// removeEventListener()
// unsubscribe() (like from a WebSocket or Firebase listener)
// AbortController for canceling fetch requests

import React, { useState } from "react";
import Child214 from "./Child214";

export default function App214() {
  const [hide, setHide] = useState(true);
  function myFunc() {
    setHide(false);
  }
  return (
    <div>
      {hide ? <Child214 /> : null}
      <button onClick={myFunc}>Click</button>
    </div>
  );
}

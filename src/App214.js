//useEffect() hook as componentWillUnmount()
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

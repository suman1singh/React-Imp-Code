import React, { useState } from "react";
import Profile19 from "./Profile19";

export default function App19() {
  const [render, setRender] = useState(false);
  return (
    <div>
      <h1>Main componenet</h1>
      <div>{render ? <Profile19 /> : null}</div>
      <button onClick={()=>setRender(!render)} >Toggle</button>
    </div>
  );
}

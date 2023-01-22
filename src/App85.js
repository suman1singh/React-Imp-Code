import React, { useState } from "react";
import Child85 from "./Child85";

export default function App85() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(10);
  const Learning = React.useCallback(() => {
    //some operation
  }, [count]);
  return (
    <div>
      <center>
        <h1>{add}</h1>
        <h1>{count}</h1>
        <Child85 Learning={Learning} count={count} />
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <br />
        <br />
        <button onClick={() => setCount(count + 10)}>Change count</button>
      </center>
    </div>
  );
}

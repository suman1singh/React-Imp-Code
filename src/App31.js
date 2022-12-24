import React, { useState, useEffect } from "react";
import User31 from "./User31";

export default function App31() {
  const [data, setData] = useState(5);
  const [count, setCount] = useState(10);
  useEffect(() => {
    alert("New count is" + count);
  }, [data,count]);

  return (
    <div>
      <User31 data={data} count={count} />
      <button onClick={() => setCount(count + 2)}>Update count</button>
      <button onClick={() => setData(data + 2)}>Update data</button>
    </div>
  );
}

import React, { useState, useMemo } from "react";

export default function App41() {
  const [count, setCount] = useState(5);
  const [data, setData] = useState(10);
  const multiCount = useMemo(() => {
    console.log("Multi count");
    return count * 10;
  }, [count]);
  //   function multiCount() {
  //     console.log("multicount called");
  //     return count * 10;
  //   }
  return (
    <>
      <h1>UseMemo example</h1>
      <h1>Count:{count}</h1>
      <h1>Data:{data}</h1>
      <h1>Multiply count:{multiCount}</h1>
      <button onClick={() => setCount(count + 5)}>Update count</button>
      <button onClick={() => setData(data + 10)}>Update Data</button>
    </>
  );
}

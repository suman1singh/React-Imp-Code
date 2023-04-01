import React, { useState, useMemo} from "react";

export default function App41() {
  const [count, setCount] = useState(5);
  const [data, setData] = useState(10);

  // getting value with useMemo
  var multiCount = useMemo(() => {
    console.log("multicount called");
    return count * 10;
  }, [count]);

  // getting value without useMemo
  // var multiCount = function () {
  //   console.log("multicount called");
  //   return count * 10;
  // };
  return (
    <>
      <h1>UseMemo example</h1>
      <h1>Count:{count}</h1>
      <h1>Data:{data}</h1>
      <h1>Multiply count:{multiCount}</h1>
      <button onClick={() => setCount(count + 10)}>Update count</button>
      <br />
      <br />
      <button onClick={() => setData(data + 2)}>Update Data</button>
    </>
  );
}

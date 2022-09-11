import React, { useState } from "react";

export default function App16() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false)
  }
  return (
    <div>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>print data</button>
    </div>
  );
}

//Two way data binding in reactjs
import React, { useState } from "react";

export default function App203() {
  const [data, setData] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <h1>{data}</h1>
    </div>
  );
}

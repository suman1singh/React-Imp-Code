// Disable a button
import React from "react";

export default function App204() {
  const [data, setData] = React.useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter text"
      />
      <button disabled={data.length < 1}>Submit</button>
    </div>
  );
}

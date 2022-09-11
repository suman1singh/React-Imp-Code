import React, { useState } from "react";

export default function Profile19() {
  const [extra, setExtra] = useState(false);
  return (
    <div>
      <h1>Profile component</h1>
      <div>{extra ? <h1>Suman</h1> : null}</div>
      <button onClick={() => setExtra(!extra)}>Show Name</button>
    </div>
  );
}

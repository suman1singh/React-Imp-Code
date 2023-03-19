//Update Parent State Challenge (Using Callback)
import React from "react";

function Child({ setValue }) {
  return (
    <>
      <h1>Child</h1>
      <button onClick={() => setValue("Parent has been updated!")}>
        Change Parent Value
      </button>
    </>
  );
}

export default function App205() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div>
        <h1>Parent</h1>
        <h1>{value}</h1>
      </div>
      <Child setValue={setValue} />
    </>
  );
}

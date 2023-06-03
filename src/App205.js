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

//Another good example

// import React from "react";

// function Child(props) {
//   const method = props.setData;
//   return (
//     <>
//       <input onChange={(e) => method(e.target.value)} />
//     </>
//   );
// }
// export default function App() {
//   const [data, setData] = React.useState("Suman");
//   return (
//     <>
//       <h1>Pass data from parent to child:{data}</h1>
//       <Child setData={setData} />
//     </>
//   );
// }

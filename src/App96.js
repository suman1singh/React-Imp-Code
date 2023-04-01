// // useMemo and useCallback difference
// import React, { useState, useMemo, useCallback } from "react";

// import { func } from "prop-types";

// export default function App966() {
//   const [count, setCount] = useState(5);
//   const [data, setData] = useState(10);

//   //with useCallback
//   function newFun() {
//     return count + 100;
//   }
//   var multiCount = useCallback(() => {
//     console.log("multicount called");
//     return newFun();
//   }, [count]);

//   //with useMemo
//   //   var multiCount = useMemo(() => {
//   //     console.log("multicount called");
//   //     return count * 10;
//   //   }, [count]);

//   //Without useMemo
//   // var multiCount = function () {
//   //   console.log("multicount called");
//   //   return count * 10;
//   // };
//   return (
//     <>
//       <h1>UseMemo example</h1>
//       <h1>Count:{count}</h1>
//       <h1>Data:{data}</h1>
//       <h1>Multiply count:{multiCount}</h1>
//       <button onClick={() => setCount(count + 10)}>Update count</button>
//       <br />
//       <br />
//       <button onClick={() => setData(data + 2)}>Update Data</button>
//     </>
//   );
// }
import React from 'react'

export default function App96() {
  return (
    <div>
    
    </div>
  )
}


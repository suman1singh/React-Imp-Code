//useRef() vs useState() hook

//Counter using useState()
import React, { useEffect, useState } from "react";

export default function App215() {
  const [data, setData] = useState(0);
  function handleState() {
    setData(data + 1);
  }
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <center>
        <button onClick={handleState}>Data:{data}</button>
      </center>
    </div>
  );
}

//Counter using useRef(): In console value will update but it will not update in return
// import React, { useRef } from "react";

export default function App215() {
  const ref = useRef(0);
  function handleRef() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }
  return (
    <div>
      <center>
        <button onClick={handleRef}>Ref:{ref.current}</button>
      </center>
    </div>
  );
}

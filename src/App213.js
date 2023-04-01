//Decreasing counter with reset
import { useEffect, useState } from "react";

export default function App213() {
  const [state, setState] = useState(10);
  const ResetClick = () => {
    setState(10);
  };

  useEffect(() => {
    let id = setInterval(() => {
      if (state > 0) {
        setState(state - 1);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [state]);

  return (
    <div>
      <h1> Decreasing Counter </h1>
      <button onClick={ResetClick}>Reset Counter</button>
      <h1> {state} </h1>
    </div>
  );
}

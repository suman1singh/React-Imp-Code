//Progressbar that will increase 10% after every 1 sec
import { func } from "prop-types";
import React from "react";

export default function App200() {
  const [pro, setPro] = React.useState(0);
  React.useEffect(() => {
    let interval = setInterval(() => {
      setPro(pro + 10);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  function reset(){
    setPro(0)
  }
  return (
    <div>
      <progress value={pro} max="100" /><br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

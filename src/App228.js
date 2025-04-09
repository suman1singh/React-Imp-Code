import React, { useEffect, useState } from "react";

const App228 = () => {
  const [count, setCount] = useState(300);
  const [isPause, setIspause] = useState(false);
  useEffect(() => {
    if (!isPause) {
      let counter = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearInterval(counter);
    }
  }, [count, isPause]);

  return (
    <>
      <center>
        <p>Stopwatch</p>
        {`${Math.floor(count / 60) < 10 ? 0 : ""}${Math.floor(count / 60)}:${
          count % 60 < 10 ? 0 : ""
        }${count % 60}`}
        <br />
        <br />
        <button onClick={() => setCount(300)}>Reset</button>{" "}
        <button onClick={() => setIspause(!isPause)}>
          {isPause ? "Resume" : "Pause"}
        </button>
      </center>
    </>
  );
};

export default App228;

import React, { useEffect, useState } from "react";

const App237 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      fontFamily: "monospace",
      textAlign: "center",
      marginTop: "50px",
    },
    clock: {
      fontSize: "48px",
      background: "#000",
      color: "#0f0",
      padding: "20px",
      borderRadius: "10px",
      display: "inline-block",
      marginTop: "10px",
    },
  };

  const formatTime = (t) => {
    const getHours = String(t.getHours()).padStart(2, "0");
    const getMinutes = String(t.getMinutes()).padStart(2, "0");
    const getSeconds = String(t.getSeconds()).padStart(2, "0");
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div style={styles.container}>
      <h2>🕒 Digital Clock</h2>
      <div style={styles.clock}>{formatTime(time)}</div>
    </div>
  );
};

export default App237;

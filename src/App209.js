//Slider scale using material UI
import React, { useState } from "react";
import "./App209.css";
import { Slider } from "@material-ui/core";

function App209() {
  //Providing different values with labels
  const gfg = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 25,
      label: "25°C",
    },
    {
      value: 50,
      label: "50°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];

  const [val, setVal] = useState([0, 40]);
  const updateRange = (e, data) => {
    setVal(data);
  };
  return (
    <div className="App">
      <h1> What is the current temperature in your City ? </h1>
      <div style={{ width: 500, margin: 60 }}>
        <span> Temperature : </span>{" "}
        <Slider value={val} onChange={updateRange} marks={gfg} />
      </div>{" "}
    </div>
  );
}
export default App209;

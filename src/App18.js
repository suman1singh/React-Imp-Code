import React, { useState } from "react";

export default function App18() {
  const [data1, setData1] = useState("degault1");
  const [data2, setData2] = useState("default");
  const [data3, setData3] = useState(false);
  function getSubmit(e) {
    console.log(data1, data2, data3);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={getSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setData1(e.target.value)}
        ></input>
        <br />
        <select onChange={(e) => setData2(e.target.value)}>
          <option>Select option</option>
          <option>data1</option>
          <option>data2</option>
          <option>data3</option>
        </select>
        <br />
        <input type="checkbox" onChange={(e) => setData3(e.target.checked)} />
        <span>Select terms and condtion</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

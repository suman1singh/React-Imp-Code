import { useState } from "react";

export default function App() {
  let arrData = [
    { id: "1001", type: "Regular" },
    { id: "1002", type: "Chocolate" },
    { id: "1003", type: "Blueberry" },
  ];
  let newData = arrData.map((e) => e.type);
  const [names, setNames] = useState(newData);
  const [item, setItem] = useState("");

  const handleClick = () => {
    setNames((e) => [...e, item]);
  };

  return (
    <center>
      <select>
        {names.map((element, index) => (
          <option key={index}>{element}</option>
        ))}
      </select>
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
        placeholder="enter data to add"
      />
      <br />
      <br />
      <button onClick={handleClick}>add data</button>
    </center>
  );
}

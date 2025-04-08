import React, { useState } from "react";

const App226 = () => {
  const items = [
    {
      id: 1,
      label: "Item1",
    },
    {
      id: 2,
      label: "Item2",
    },
    {
      id: 3,
      label: "Item3",
    },
    {
      id: 4,
      label: "Item4",
    },
  ];
  const [isChecked, setIsChecked] = useState(null);
  const handleCheck = (id) => {
    setIsChecked(id);
  };
  return (
    <>
      <h1>select single checkbox at a time</h1>
      <ul>
        {items.map((ele, i) => (
          <li>
            <input
              type="checkbox"
              checked={isChecked === ele.id}
              onChange={() => handleCheck(ele.id)}
            />{" "}
            <label>{ele.label}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App226;

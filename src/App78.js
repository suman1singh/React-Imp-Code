import React from "react";

export default function App78() {
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>
          <span>{item.name}</span> <span>{item.age}</span>
        </li>
      ))}
    </ul>
  );
}
const data = [
  { name: "Suman1", age: 25 },
  { name: "Suman2", age: 26 },
  { name: "Suman3", age: 27 },
  { name: "Suman4", age: 28 },
];

import React from "react";

export default function App71() {
  const [data, setData] = React.useState({ name: "Suman", age: "25" });
  return (
    <div>
      <h1>State object with hooks</h1>
      <input
        type="text"
        placeholder="Please enter name"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Please enter age"
        value={data.age}
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      />
      <h1>Name:{data.name}</h1>
      <h1>Age:{data.age}</h1>
    </div>
  );
}

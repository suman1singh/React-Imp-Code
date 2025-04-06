import React, { useState } from "react";

const App225 = () => {
  const [names, setNames] = useState([
    "John Doe",
    "Jane Doe",
    "Bob Smith",
    "Alice Johnson",
    "Mike Brown",
  ]);

  const handleShuffle = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffledNames);
  };

  return (
    <div>
      <h2>Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
};

export default App225;

//Progressbar that will increase 10% after every 1 sec
import React from "react";

export default function App200() {
  const [pro, setPro] = React.useState(10);
  setInterval(() => {
    setPro(pro + 10);
  }, 1000);
  return (
    <div>
      <progress value={pro} max="100" />
    </div>
  );
}

//Timer in react
import React from "react";

export default function App212() {
  const [data, setData] = React.useState(0);
  React.useEffect(() => {
    let interval = setInterval(() => {
      setData(data + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

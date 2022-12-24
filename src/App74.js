import React, { useEffect,useState } from "react";

export default function App74(props) {
  const [counter, setCouter] = useState(0);
  useEffect(() => {
    console.log("hello");
    setCouter(1);
  }, [props.visible]);
  return <div>{counter}</div>;
}

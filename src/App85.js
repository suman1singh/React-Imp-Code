import React, { useCallback, useState } from "react";
import Child85 from "./Child85";

export default function App85() {
  const [data, setData] = useState(10);
  const [item, setItem] = useState(20);
 
  ////Passing function to child with useCallback
  var myFunc = useCallback(() => {
    console.log("Hello Suman");
  }, [item]);

  //Passing function to child without useCallback
  // var myFunc = () => {
  //   console.log("Hello Suman");
  // };
  return (
    <div>
      <Child85 item={item} myFunc={myFunc} />
      <button onClick={() => setData(data + 50)}>Change data:{data}</button>
      <br />
      <br />
      <button onClick={() => setItem(item + 5)}>Change item:{item}</button>
    </div>
  );
}

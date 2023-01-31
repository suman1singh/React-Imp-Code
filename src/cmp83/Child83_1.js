import React from "react";

export default function Child83_1(props) {
  const myData = "myData";
  // React.useEffect(()=>{
  //     setData(myData)
  // },[]);
  return ( 
    <div>
      <h1>Child1 Component</h1>
      <br />
      <button onClick={() => props.setData(myData)}>send data to child2</button>
    </div>
  );
}

//Displaying key and value of obj in JSX
import React from "react";

export default function App() {
  var str = "112422465238436";
  var arrStr = str.split("");
  var obj = {};
  arrStr.forEach((e) => {
    if (obj[e]) {
      obj[e] = obj[e] + 1;
    } else {
      obj[e] = 1;
    }
  });
  console.log(obj);
  return (
    <div>
      {Object.entries(obj).map(([key, value]) => (
        <h1 key={key}>
          {key}:{value}
        </h1>
      ))}
    </div>
  );
}

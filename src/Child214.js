import React, { useEffect } from "react";

export default function Child214() {
  useEffect(() => {
    var i = 0;
    var id = setInterval(() => {
      i++;
      document.getElementById("demo").innerHTML = i;
    }, 200);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <h1 id="demo">Child component</h1>
    </div>
  );
}

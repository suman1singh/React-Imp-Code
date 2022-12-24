import React from "react";
import Child38 from "./Child38";

export default function App38() {
    function parentAlert(data){
        alert(data);
    }
  return (
    <div>
      <Child38 alert={parentAlert} />
    </div>
  );
}

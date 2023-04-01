import React, { memo } from "react";

function Child85({ item, myFunc }) {
  console.log("child component");
  return (
    <div>
      <center>
        <h1>Child component</h1>
      </center>
    </div>
  );
}
export default memo(Child85);

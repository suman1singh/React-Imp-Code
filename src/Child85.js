//React.memo is a higher-order component (HOC) that wraps a functional 
//component and prevents unnecessary re-renders by memoizing the component’s output.
//It works like PureComponent for functional components.
//If a component renders the same output given the same props, React.memo will skip 
//re-rendering it on future updates.

//🧠 Without React.memo:
//Child would re-render every time the Parent re-renders, even if props haven’t changed.

//🧠 With React.memo:
//React checks if the props of Child have changed.

//If not → it skips rendering

import React, { memo, useEffect } from "react";

function Child85({ item, myFunc }) {
  console.log("child component");

  useEffect(() => {
    myFunc();
  }, [item]);
  return (
    <div>
      <center>
        <h1>Child component</h1>
        <p>{item}</p>
      </center>
    </div>
  );
}
export default memo(Child85);

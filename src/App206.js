// Dynamically add child components (React Children):
import React from "react";

function Child() {
  return <div>This is children content</div>;
}

//only children we can use
function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}

export default function App206() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

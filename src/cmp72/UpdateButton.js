import React from "react";
import { commonContext } from "./commonContext";

export default function UpdateButton() {
  return (
    <commonContext.Consumer>
      {({ updateColor }) => (
        <div>
          <button onClick={() => updateColor("yellow")}>Update color to yellow</button>
          <button onClick={() => updateColor("blue")}>Update color to blue</button>
          <button onClick={() => updateColor("pink")}>Update color to pink</button>
        </div>
      )}
    </commonContext.Consumer>
  );
}

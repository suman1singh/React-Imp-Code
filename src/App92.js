import React, { Component } from "react";
import About92 from "./About92";

class App92 extends Component {
  render() {
    return (
      <div>
        <h1>Type checking with propTypes in react</h1>
        <About92 age={20} name="Suman Singh" />
      </div>
    );
  }
}

export default App92;

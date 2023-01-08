import React, { PureComponent } from "react";
import User40 from "./User40";

class App40 extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: 1,
    };
  }
  render() {
    console.log("Re-rendering happen in parent");
    return (
      <>
        <h1>Pure component{this.state.name}</h1>
        <User40 data={this.state} />
        <button onClick={() => this.setState({ name: this.state.name })}>
          Increase name
        </button>
      </>
    );
  }
}

export default App40;

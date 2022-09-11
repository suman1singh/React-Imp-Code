import React, { Component } from "react";

export default class App13 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Suman",
    };
  }
  setData() {
    this.setState({
      name: "Singh",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setData()}>Update state</button>
      </div>
    );
  }
}

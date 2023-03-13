import React, { Component } from "react";
import Student28 from "./Student28";

export default class App25 extends Component {
  constructor() {
    super();
    this.state = {
      name: 6,
      show: false,
    };
    console.log("constructor");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.name);
    if (this.state.name > 5 && this.state.name < 10) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(oldState, oldProps) {
    console.log("componentDidUpdate", oldProps.name);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1> Component Did update</h1>
        {this.state.show ? <Student28 /> : null}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle
        </button>
      </>
    );
  }
}

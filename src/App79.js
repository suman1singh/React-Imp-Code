import React, { Component } from "react";
import Person79 from "./Person79";

class App79 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "Suman1", age: 25 },
        { name: "Suman2", age: 26 },
        { name: "Suman3", age: 27 },
        { name: "Suman4", age: 28 },
        { name: "Suman5", age: 29 },
      ],
    };
  }
  render() {
    let person = this.state.persons.map((p,i) => {
      return <Person79 key={i} data={p}/>;
    });
    return <div>{person}</div>;
  }
}

export default App79;

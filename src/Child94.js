//Event handling with this and bind in ReactJS(Technical suneja) [9:48]
import React, { Component } from "react";

class Child94 extends Component {
  constructor(props) {
    super(props);
    //this.changeEvent = this.changeEvent.bind(this);
    this.state = {
      course: "Btech",
      rollNo: this.props.roll,
    };
  }
    // changeEvent() {
    //   console.log("Hellow Suman", this.state.course);
    // }
    // In arrow function, without bind(), able to access state but in regular function need to bind the function.
  changeEvent = () => {
    this.setState({
      course: "MTech",
    });
    console.log("Hellow Suman", this.state.course, this.state.rollNo);
  };
  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Click me</button>
        {this.state.course}
        {this.state.rollNo}
      </div>
    );
  }
}

export default Child94;

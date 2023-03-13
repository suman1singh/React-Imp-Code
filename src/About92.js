import React, { Component } from "react";
import PropTypes from "prop-types";

class About92 extends Component {
  render() {
    return (
      <div>
        <h1>About component</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
About92.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
};
export default About92;

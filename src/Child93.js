import React from "react";
import PropTypes from "prop-types";

export default function Child93(props) {
  return (
    <div>
      <h1>Today is {props.day}</h1>
      <h1>There are{props.vacations} vacations in a week</h1>
    </div>
  );
}

Child93.propTypes = {
  day: PropTypes.string.isRequired,
  vacations: PropTypes.number,
};
Child93.defaultProps = {
  day: "Sunday",
  vacations: 1,
};

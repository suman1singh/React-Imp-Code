import React from "react";

export default function Person79(props) {
  return (
    <div>
      <h1>
        <span>{props.data.name}</span>{" , "}
        <span>{props.data.age}</span>
      </h1>
    </div>
  );
}

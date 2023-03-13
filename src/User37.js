import React from "react";

export default function User37(props) {
  return (
    <div>
      <span>{props.data2 + 1}</span> <span>{props.data.name}</span>{" "}
      <span>{props.data.email}</span> <span>{props.data.mob}</span>{" "}
    </div>
  );
}

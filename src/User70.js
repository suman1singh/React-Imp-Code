import React, { useEffect, useRef } from "react";

export default function User70(props) {
  const preProps = useRef();
  useEffect(() => {
    preProps.current = props.inc;
  });
  const lastVal = preProps.current;
  return (
    <div>
      <h1>Current props:{props.inc}</h1>
      <h1>Previous props:{lastVal}</h1>
    </div>
  );
}

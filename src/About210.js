import React from "react";
import { useLocation } from "react-router-dom";

export default function About210() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <h1>I am about page and my id is {location.state.id}</h1>
    </>
  );
}

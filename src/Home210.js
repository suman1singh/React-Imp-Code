import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home210() {
  const id = 5;
  const navigate = useNavigate();
  function gotoAbout() {
    navigate("/about", { state: { id: id } });
  }
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={gotoAbout}>About</button>
    </div>
  );
}

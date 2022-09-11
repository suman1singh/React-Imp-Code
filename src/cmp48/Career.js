import React from "react";
import { useNavigate } from "react-router-dom";

export default function Career() {
  const navigate = useNavigate();
  const navToPage = (url) => {
    navigate(url);
  };
  return (
    <div>
      <h1>Career page</h1>
      <button onClick={() => navigate("/about")}>Got to about page</button>
      <button onClick={() => navigate("/filter")}>Got to Filter page</button>
      <button onClick={() => navToPage("/")}>Got to Home page</button>
      <button onClick={() => navToPage("/about")}>Go to About page</button>
    </div>
  );
}

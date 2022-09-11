import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function User() {
  const location=useLocation();
  console.log(location);
  const prms = useParams();
  const { name } = prms;
  return <div>
    <h1>This is {name}'s page</h1>
    <Link to='/about'>Got to about page</Link>
  </div>;
}

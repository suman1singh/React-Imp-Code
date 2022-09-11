import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App63() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     res.json().then((resp) => {
  //       setData(resp);
  //     });
  //   });
  // }, []);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div>
      <h1>Fetch user from an api in react</h1>
      <ul>{data && data.map((key) => <li>Name: {key.address.street}</li>)}</ul>
    </div>
  );
}

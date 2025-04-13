import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App63() {
  const [data, setData] = useState();

  //using fetch method
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     res.json().then((resp) => {
  //       setData(resp);
  //     });
  //   });
  // }, []);

  //using axios library
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("api error:", err);
      });
  }, []);

  return (
    <div>
      <h1>Fetch user from an api in react</h1>
      <ul>
        {data &&
          data.map((key, i) => <li key={i + 1}>Name: {key.address.street}</li>)}
      </ul>
    </div>
  );
}

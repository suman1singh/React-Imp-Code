import React, { useEffect, useState } from "react";

export default function App63() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  return (
    <div>
      <h1>Fetch user from an api in react</h1>
      <ul>
        {data &&
          data.map((key) => (
            <li>
              Name: {key.name}, Phone: {key.phone}, Email: {key.email}
            </li>
          ))}
      </ul>
    </div>
  );
}

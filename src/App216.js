//Getting data from api and showing in dropdown
import React, { useEffect } from "react";

export default function App216() {
  const [data, setData] = React.useState();
  const [select, setSelect] = React.useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log("Values:", data);
  return (
    <>
      <h1>Fetching data from api and showing in dropdown</h1>
      <select onChange={(e) => setSelect(e.target.value)}>
        {data && data.map((ele, key) => <option key={key}>{ele.name}</option>)}
      </select>
      <h1>{select}</h1>
    </>
  );
}

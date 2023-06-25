import "./styles.css";
import React from "react";

export default function App() {
  const data = ["India", "Bihar", "Bihrgs", "Patna", "Bengaluru", "Delhi"];

  const [list, setList] = React.useState(data);
  const [search, setSearch] = React.useState("");

  let searchedItem = data.filter((e, ind) => {
    if (e.toLowerCase().includes(search.toLowerCase())) {
      return e;
    }
  });
  React.useEffect(() => {
    setList(searchedItem);
  }, [search]);
  return (
    <>
      <h1>Search item</h1>
      <input
        placeholder="Search item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {list.map((e, i) => (
        <li key={i}> {e} </li>
      ))}
    </>
  );
}

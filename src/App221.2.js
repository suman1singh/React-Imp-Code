import "./styles.css";
import React from "react";

export default function App() {
  const mockData = [
    { id: 0, item: "Bed Original" },
    { id: 1, item: "Bed" },
    { id: 2, item: "Bed Good" },
    { id: 3, item: "Mobile" },
    { id: 4, item: "chair" },
    { id: 5, item: "pen" },
    { id: 6, item: "surf" },
    { id: 7, item: "light" },
    { id: 8, item: "glass" },
    { id: 9, item: "notebook" },
    { id: 10, item: "bike" },
    { id: 11, item: "car" },
    { id: 12, item: "Sportd Car" },
    { id: 13, item: "Costly pen" },
    { id: 14, item: "led light" },
  ];

  const [list, setList] = React.useState(mockData);
  const [search, setSearch] = React.useState("");
  let searchedItem = mockData.filter((e) => {
    if (e.item.toLowerCase().includes(search.toLowerCase())) {
      return e;
    }
  });
  React.useEffect(() => {
    setList(searchedItem);
  }, [search]);
  return (
    <center>
      <h1>Search item</h1>
      <p>Searched item:{search}</p>
      <input
        type="text"
        placeholder="Search item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /> <br />
      {list.map((e, i) => (
        <li key={i}> {e.item} </li>
      ))}
    </center>
  );
}

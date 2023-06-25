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
  let itemData = mockData.map((e) => e.item);
  const [list, setList] = React.useState(itemData);
  const [search, setSearch] = React.useState("");
  const [item, setItem] = React.useState("");

  let searchedItem = itemData.filter((e) => {
    if (e.toLowerCase().includes(search.toLowerCase())) {
      return e;
    }
  });

  React.useEffect(() => {
    setList(searchedItem);
  }, [search]);

  const handleD = (i) => {
    let c = list;
    let deleD = c.filter((e, j) => i !== j);
    setList(deleD);
  };

  const handleAdd = () => {
    setList((e) => [...e, item]);
  };
  
  return (
    <center>
      <p>Searched item:{search}</p>
      <p>New added data item:{item}</p>
      <label>Type here to search :</label>
      <input
        type="text"
        placeholder="Search item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /> <br />
      <label>Type new Data to add :</label>
      <input
        type="text"
        placeholder="Search item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <br /> <br />
      <button onClick={handleAdd}>add data</button>
      <br /> <br />
      {list.map((e, i) => (
        <li key={i}>
          {" "}
          {e} <button onClick={() => handleD(i)}>Delete</button>{" "}
        </li>
      ))}
    </center>
  );
}

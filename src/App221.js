import React, { useState, useEffect } from "react";

export default function App221() {
  const [searchItem, setSearchItem] = useState("");
  const [list, setList] = useState([]);

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

  const filteredItem = mockData.filter((currentItem) => {
    if (searchItem === "") {
      return currentItem;
    } else if (
      currentItem.item.toLowerCase().includes(searchItem.toLowerCase())
    ) {
      return currentItem;
    }
  });
  useEffect(() => {
    setList(filteredItem);
  }, [searchItem]);
  return (
    <center>
      <div>
        <input
          type="search"
          placeholder="search Item..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
      <div>
        {list.map((ele, id) => {
          return (
            <div key={id}>
              <span>{ele.item}</span>
            </div>
          );
        })}
      </div>
    </center>
  );
}

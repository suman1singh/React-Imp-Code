import React from "react";

export default function App88() {
  const arr = ["suman1", "suman2", "suman3", "suman4"];
  const [arrcopy, setArrcopy] = React.useState(arr);
  const handleDelete = (itemIndex) => {
    let newArr = arrcopy;
    let filteredArr = newArr.filter((el, i) => {
      return i !== itemIndex;
    });
    setArrcopy(filteredArr);
  };
  return (
    <div>
      <ul>
        {arrcopy.map((el, i) => (
          <li>
            {el} <button onClick={() => handleDelete(i)}>Delete</button> <br />{" "}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

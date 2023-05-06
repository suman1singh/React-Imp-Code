import React from "react";

export default function App() {
  const data = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Orange" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <>
      <center>
        <table style={{ border: "solid" }}>
          <tbody>
            <tr style={{ border: "solid" }}>
              <td style={{ border: "solid" }}>
                <h5>Name</h5>
              </td>
              <td></td>
              <td>
                <h5>price</h5>
              </td>
            </tr>
            <tr>
              <h5>Fruits</h5>
            </tr>
            {data.map((e, id) =>
              e.category == "Fruits" ? (
                <tr style={{ border: "solid" }} key={id}>
                  <td style={{ border: "solid" }}>{e.name}</td>
                  <td>{e.price}</td>
                </tr>
              ) : (
                ""
              )
            )}
            <tr>
              <h5>Vegetables</h5>
            </tr>
            {data.map((e, id) =>
              e.category == "Fruits" ? (
                <tr style={{ border: "solid" }} key={id}>
                  <td style={{ border: "solid" }}>{e.name}</td>
                  <td>{e.price}</td>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </table>
      </center>
    </>
  );
}

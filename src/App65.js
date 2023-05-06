import React, { useEffect, useState } from "react";

export default function App63() {
  const [data, setData] = useState();

  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:3006/contacts").then((res) => {
      res.json().then((resp) => {
        setData(resp);
      });
    });
  }
  function deleteUser(id) {
    fetch(`http://localhost:3006/contacts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getList();
      });
    });
  }
  return (
    <div>
      <center>
        <h1>Fetch user from an api in react</h1>
        <table border="1">
          <tbody>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>operation</td>
            </tr>
            { data && data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  {" "}
                  <button onClick={() => deleteUser(item.id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

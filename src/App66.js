import React, { useEffect, useState } from "react";

export default function App63() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:3006/contacts").then((res) => {
      res.json().then((resp) => {
        setData(resp);
        setName(resp[0].name);
        setEmail(resp[0].email);
        setMobile(resp[0].mobile);
        setUserId(resp[0].id);
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
  function selectUser(id) {
    console.log(data[id - 1]);
    let item = data[id - 1];
    setName(item.name);
    setEmail(item.email);
    setMobile(item.mobile);
    setUserId(item.id);
  }
  function updateUser() {
    let item = { name, email, mobile, userId };
    fetch(`http://localhost:3006/contacts/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
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
              <td>operation1</td>
              <td>operation2</td>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  {" "}
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
                <td>
                  {" "}
                  <button onClick={() => selectUser(item.id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /> <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br /> <br />
          <button onClick={updateUser}>Update User</button>
        </div>
      </center>
    </div>
  );
}

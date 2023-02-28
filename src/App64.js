import React from "react";

export default function App64() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  function saveUser() {
    console.log({ name, email, mobile });
    let data = { name, email, mobile };
    fetch("http://localhost:3006/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.log("result", result);
      result.json().then((resp) => {
        console.log("resp", resp);
      });
    });
  }
  return (
    <div>
      <center>
        <h1>POST API Example</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <br />
        <br />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          name="mobile"
        />
        <br />
        <br />
        <button type="button" onClick={saveUser}>
          Save new user
        </button>
      </center>
    </div>
  );
}

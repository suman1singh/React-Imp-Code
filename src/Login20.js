// form validation
import React, { useState } from "react";

export default function Login20() {
  const [data1, setData1] = useState(false);
  const [data2, setData2] = useState();
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  function handleForm(e) {
    if (data3.length <= 5 || data4.length <= 8) {
      alert("Password policy doesn't matched");
    } else {
      alert("All good");
    }
    e.preventDefault();
  }
  function userHandler(e) {
    let userData = e.target.value;
    if (userData.length <= 5) {
      setData1(true);
    } else {
      setData1(false);
    }
    setData3(userData);
  }
  function passwordHandler(e) {
    let pwData = e.target.value;
    if (pwData.length <= 8) {
      setData2(true);
    } else {
      setData2(false);
    }
    setData4(pwData);
  }
  return (
    <div>
      <br />
      <form onSubmit={handleForm}>
        <input
          type="Text"
          placeholder="Enter UserName"
          onChange={userHandler}
        />
        {data1 ? <span>User Not valid</span> : null}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          onChange={passwordHandler}
        />
        {data2 ? <span>Password Not valid</span> : null}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

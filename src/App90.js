import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveTaskToRedux } from "./redux/reducer";

export default function App90() {
  const [input, setInput] = useState();
  const statex = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("statex-->", statex);
  const changeHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const saveToRedux = () => {
    dispatch(saveTaskToRedux(input));
    console.log("function is called");
  };
  return (
    <div>
      <center>
        <h1>Tasks</h1>
        <input value={input} onChange={changeHandler}></input>
        <br />
        <br />
        <button onClick={saveToRedux}>Save task</button>
        {statex.tasks.map((task) => (
          <h2>{task}</h2>
        ))}
      </center>
    </div>
  );
}

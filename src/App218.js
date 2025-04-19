//Converting multiple useState to single useReducer hook to improve code quality
import React, { useReducer, useState } from "react";

export default function App218() {
  //use State
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState(0);
  //   const [email, setEmail] = useState("");

  //useReducer
  function reducer(state, action) {
    switch (action.type) {
      case "setName":
        return { ...state, name: action.payload };
      case "setAge":
        return { ...state, age: action.payload };
      case "setEmail":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    age: 0,
    email: "",
  });
  return (
    <div>
      <p>Name:{state.name}</p>
      <p>Name:{state.age}</p>
      <p>Name:{state.email}</p>
      <input
        onChange={(e) => dispatch({ type: "setName", payload: e.target.value })}
        type="text"
        placeholder="Enter Name"
        value={state.name}
      />
      <br />
      <br />
      <input
        onChange={(e) => dispatch({ type: "setAge", payload: e.target.value })}
        type="number"
        placeholder="Enter Age"
        value={state.age}
      />
      <br />
      <br />
      <input
        onChange={(e) => dispatch({ type: "setEmail", payload: e.target.value })}
        type="text"
        placeholder="Enter Email"
        value={state.email}
      />
      <br />
      <br />
    </div>
  );
}

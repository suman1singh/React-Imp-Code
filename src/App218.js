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
      <h1>
        Converting multiple useState to single useReducer hook to improve code
        quality
      </h1>
    </div>
  );
}

//useReducer hooks:
//useReducer is a hook that provides an alternative to useState for managing state,
//particularly when dealing with complex state logic. It's similar to the concept of
//reducers in Redux. useReducer takes a reducer function, an initial state, and an
//optional initializer. It returns the current state and a dispatch function,
//which is used to dispatch actions that trigger state updates by calling the reducer.
//import React from "react";
import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default function App73() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}

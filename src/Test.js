import React, { useReducer } from "react";

const Test = () => {
  const initialState = {
    count: 0,
  };

  const reducers = (state, action) => {
    switch (action.type) {
      case "INC":
        return { count: state.count + 1 };
      case "DEC":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <>
      <p>UseReducers example</p>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </>
  );
};

export default Test;

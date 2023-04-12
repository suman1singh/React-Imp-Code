import React, { useState } from "react";
import "./App217.css";

export default function App217() {
  const [popup, setPopup] = useState(false);
  const handleClickOpen = () => {
    setPopup(!popup);
  };
  const closeModal = () => {
    setPopup(false);
  };
  return (
    <div className="App">
      <button onClick={handleClickOpen}>open Modal</button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <h1>popup</h1>
                <h1 onClick={closeModal} style={{ cursor: "pointer" }}>
                  x
                </h1>
              </div>
              <div>
                <p>Simple Modal in Reactjs</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

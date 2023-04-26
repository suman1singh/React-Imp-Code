import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main219 from "./Main219";
import Detail219 from "./Detail219";

class App219 extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Main219 />}></Route>
          <Route exact path="/detail/:id" element={<Detail219 />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App219;

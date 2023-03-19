// Passing data with useNavigate hook and use of useLocation hook in Reactjs
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About210 from "./About210";
import Home210 from "./Home210";

class App210 extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home210 />}></Route>
          <Route exact path="/about" element={<About210 />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App210;

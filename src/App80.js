import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home80 from "./cmp80/Home80";
import About80 from "./cmp80/About80";
import Contact80 from "./cmp80/Contact80";

class App80 extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home80 />}></Route>
            <Route exact path="/about" element={<About80 />}></Route>
            <Route exact path="/contact" element={<Contact80 />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App80;

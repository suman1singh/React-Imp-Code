import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

//This component will work only for "react-router-dom": "^5.3.4",
const Home = () => {
  return <h2>Home</h2>;
};

const Profile = () => {
  return <h2>Profile</h2>;
};

const Shoes = () => {
  return <h2>Shoes</h2>;
};

const Products = () => {
  return <h2>Products</h2>;
};

const App81 = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/products">Products</Link>
        </div>
        <div>
          <Link to="/products/shoes">Shoes</Link>
        </div>
        <div>
          <Link to="/profile">profile</Link>
        </div>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/products/shoes">
          <Shoes />
        </Route>
      </Router>
    </Fragment>
  );
};

export default App81;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./aws/SignUp";
import SignIn from "./aws/SignIn";
import Dashboard from "./aws/Dashboard";
import PrivateRoute from "./aws/PrivateRoute";

const App240 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<p>404 - Not Found</p>} />
      </Routes>
    </Router>
  );
};

export default App240;

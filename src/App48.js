import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./cmp48/About";
import Home from "./cmp48/Home";
import Navbar from "./cmp48/Navbar";
import Page404 from "./cmp48/Page404";
import User from "./cmp48/User";
import "./App.css";
import Filter from "./cmp48/Filter";
import Career from "./cmp48/Career";
import Contact from "./cmp48/Contact";
import Company from "./cmp48/Company";
import Channel from "./cmp48/Channel";
import Other from "./cmp48/Other";
import Login from "./cmp48/Login";
import Protected from "./cmp48/Protected";

export default function App48() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Compo={Home}/>} />
          <Route path="/user/:name" element={<Protected Compo={User} />} />
          <Route path="/about" element={<Protected Compo={About}/>} />
          <Route path="/filter" element={<Protected Compo={Filter} />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
          <Route path="/career" element={<Career />} />
          {/* <Route path='/*' element={<Page404 />}/> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

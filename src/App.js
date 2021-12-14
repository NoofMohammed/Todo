import React from "react";
import Navigation from "./components/Navigation/index";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        {<Navigation />}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

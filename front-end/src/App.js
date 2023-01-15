import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Signup from "./components/signup.component";
import Login from "./components/login.component";
import Bug from "./components/bug.component";
import BugsList from "./components/bugs-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <div id="topbar">
          <ul>
            <li>
              <Link to={"/"}>
                Bug Buster
              </Link>
            </li>
            <li>
              <Link to={"/bugslist"}>
                Browse
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                Log In
              </Link>
            </li>
            <li>
              <Link to={"/signup"}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div id="main">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/bug" element={<Bug />} />
            <Route path="/bugslist" element={<BugsList />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

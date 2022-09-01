import React from "react";
//import logo from './logo.svg';

import "./App.css";

// WE NEED TO IMPORT EACH FILE HERE, SO THAT IT GET EXECUTED:
//FOR EG : WE HAVE TO IMPORT Header.js in this App.js so that it get executed

import Header from "./Header";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } 
from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  return (
    // BEM
    // <Router>
      <div className="App">

        {/* <Routes> */}

          {/* <Route path="/"> */}
            <Header />
            <Home />
          {/* </Route> */}
        {/* // </Routes> */}

      </div>
    // </Router>
  );
}

export default App;

import React from "react";
//import logo from './logo.svg';

import "./App.css";

// WE NEED TO IMPORT EACH FILE HERE, SO THAT IT GET EXECUTED:
//FOR EG : WE HAVE TO IMPORT Header.js in this App.js so that it get executed

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
// to avoid the switch error 
// run command  :  npm install react-router-dom@5.2.0


function App() {
  return (
    // BEM
    <Router>
      {/* <React.StrictMode> */}
      {/* <div className="App"> */}
      
      
          <Routes>
          

          <Route  path="/" element={<div><Header/><Home /></div>} />  
          <Route  path="/checkout" element={<div><Header/><Checkout/></div>} />  
          
          </Routes>
        

      {/* </div> */}
      {/* </React.StrictMode> */}
     </Router>
  );
}

export default App;

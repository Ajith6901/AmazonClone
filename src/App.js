import React from "react";
//import logo from './logo.svg';

import "./App.css";

// WE NEED TO IMPORT EACH FILE HERE, SO THAT IT GET EXECUTED:
//FOR EG : WE HAVE TO IMPORT Header.js in this App.js so that it get executed

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route }  // to avoid the switch error 
// run command  :  npm install react-router-dom@5.2.0
from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">

      <Header />    {/* Since , header will be their regardless of  page , 
                        we will add it outside the switch */}
        <Switch>
          
        
          <Route path="/checkout">
            
            <Checkout/>

          </Route>

          <Route path="/">
            
            <Home />
          </Route>

        </Switch>

      </div>
     </Router>
  );
}

export default App;

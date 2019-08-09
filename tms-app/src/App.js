import React from 'react';

//css files
import './App.css';

// import './dashboard.css';

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './Navbar';
// import Dashboard from "./Views/dashboard.component";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>TMS Test app.js render</h2>

        <NavBar/>
        {/* <Dashboard/> */}


      </div>
    </Router>
  );
}

export default App;

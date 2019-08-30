import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

//css files
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//components
import NavBar from './Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <h2>TMS</h2>
      </div>
      <NavBar/>
    </Router>
  );
}

export default App;

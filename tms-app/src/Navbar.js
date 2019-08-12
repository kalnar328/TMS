import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//components
import Dashboard from "./Views/dashboard.component";
import Trainer from "./Views/trainer.component";
import TrainingType from "./Views/trainingType.component";
import Events from "./Views/trainingEvent.component";

//css files
import './Navbar.css';

export default class NavBar extends Component {
    render() {
        return (
            <Router>    
                <div className="row">
                <ul className="header">
                    <li><NavLink to="/dashboard" activeClassName="active" component={Dashboard}>Dashboard</NavLink></li>
                    <li><NavLink to="/trainer"activeClassName="active" component={Trainer}>Trainer</NavLink></li>
                    <li><NavLink to="/trainingType" activeClassName="active" component={TrainingType}>Training Type</NavLink></li>
                    <li><NavLink to="/event" activeClassName="active" component={Events}>Events</NavLink></li>
                </ul>
                
                <div className="content">
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/trainer" component={Trainer} />
                    <Route path="/trainingType" component={TrainingType} />
                    <Route path="/event" component={Events} /> 
                </div>                             
              </div>
            </Router>
        )
    }
}
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./Views/dashboard.component";
import Trainer from "./Views/trainer.component";
import TrainingType from "./Views/trainingType.component";
import Events from "./Views/trainingEvent.component";

import './Navbar.css';

export default class NavBar extends Component {
    render() {
        return (
            <Router>
                 
                <div className="sidenav">                   
                    <div className="row">
                        <div className="col-sm">
                                <Link to="/dashboard" className="nav-link" component={Dashboard}>Dashboard</Link>
                                <Link to="/trainer" className="nav-link" component={Trainer}>Trainer</Link>
                                <Link to="/trainingType" className="nav-link" component={TrainingType}>Training Type</Link>
                                <Link to="/event" className="nav-link" component={Events}>Events</Link>


                                <Route path="/dashboard" exact component={Dashboard} />

                                <div className="routediv">
                                    <Route path="/trainer" component={Trainer} />
                                </div>

                                <Route path="/trainingType" component={TrainingType} />
                                <Route path="/event" component={Events} />            
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
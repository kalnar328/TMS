import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//components
import Dashboard from "./Views/dashboard.component";
import Trainer from "./Views/trainer/trainer.component";
import TrainingType from "./Views/Training Type/trainingType.component";
import Events from "./Views/Training Event/trainingEvent.component";
import EditTrainer from './Views/trainer/editTrainer.component';
import EditEvent from './Views/Training Event/editEvent.component';
import EditTrainingType from './Views/Training Type/editType.component';

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
                    <li><NavLink to="/trainingType" activeClassName="active" component={TrainingType}>Type</NavLink></li>
                    <li><NavLink to="/event" activeClassName="active" component={Events}>Events</NavLink></li>
                </ul>
                
                <div className="content">
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/trainer" component={Trainer} />
                    <Route path="/trainingType" component={TrainingType} />
                    <Route path="/event" component={Events} /> 
                    <Route path="/trainer/edit" component={EditTrainer} /> 
                    <Route path="/event/edit" component={EditEvent} /> 
                    <Route path="/trainingType/edit" component={EditTrainingType} />
                </div>                             
              </div>
            </Router>
        )
    }
}
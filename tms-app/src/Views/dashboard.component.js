import React, { Component } from 'react';
import axios from 'axios';

//css files
import '../dashboard.css';

export default class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            trainers: [],
            events: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/allTrainers')
            .then(data => {
                this.setState({trainers: data.data[0]});
                // console.log(this.state.trainers.total);
            })
            .catch(function(error){
                console.log(error);
            })

            axios.get('http://localhost:4000/eventIds')
            .then(data => {
                this.setState({events: data.data[0]});
                // console.log(this.state.events.total);
            })
            .catch(function(error){
                console.log(error);
            })
    }

    render(){
        return(
            <div className="dashboard">
                
                <div className="card1">
                    <label for="trainerId">No of Trainers</label><br/>
                    <label for="trainerId">{this.state.trainers.total}</label>
                </div>
            
                <div className="block"></div>

                <div className="card1">
                    <label for="trainerId">Upcoming Events</label><br/>
                    <label for="trainerId">{this.state.events.total}</label>
                </div>

                <div className="block"></div>

                <div className="card1">
                    <label for="trainerId">Available Trainings</label>
                </div>

                <div className="block"></div>

                <div className="card1">
                    <label for="trainerId">Total Participants</label>
                </div>
                                 
            </div>
        )
    }
}
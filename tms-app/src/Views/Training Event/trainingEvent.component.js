import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import EventList from './eventList';

import '../../css/trainer.css';
import '../../css/event.css';

export default class TrainingEvent extends Component{

    constructor(props){
        super(props);
        this.state = {
            eventId: '',
            startDate: '',
            endDate: '',
            trainingId : '',
            trainerId : '',
            events: [],
            typeIds: [],
            selectedType: '',
            validation: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEventId = (e) => {
        this.setState({
            eventId: e.target.value
        });
    }
    onChangeStartDate = (e) => {
        this.setState({
            startDate: e.target.value
        });
    }
    onChangeEndDate = (e) => {
        this.setState({
            endDate: e.target.value
        });
    }
    onChangeTrainingId = (e) => {
        this.setState({
            trainingId: e.target.value
        });
    }
    onChangeTrainer = (e) => {
        this.setState({
            trainerId: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const newEvent = {
            eventId: this.state.eventId,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            trainingId: this.state.trainingId,
            trainerId: this.state.trainerId
        };
       
        if(newEvent.startDate > newEvent.endDate){
            alert('Enter a valid time period');
        }else{
            axios.post('http://localhost:4000/event/add', newEvent)
            .then(res => {

                if(res.status === 202){
                    alert('Please use a different Event ID');
                }else{
                    alert('New Event added sccesfully');
                    window.location.reload();
                }
            })
            .catch(function(error){
                console.log(error);
            });
        }
    }

    componentDidMount(){
            axios.get('http://localhost:4000/events')
            .then(response => {
                this.setState({events: response.data});
            })
            .catch(function(error){
                console.log(error);
            })

            // axios.get('http://localhost:4000/trainingTypeIds')
            // .then(data => {
            //     this.setState({typeIds: data.data});
            //     let teamsFromApi = data.map(team => { return {value: team, display: team} })
            //     this.setState({ typeIds: [{value: '', display: '(Select your favourite team)'}].concat(teamsFromApi) });
            // })
            // .catch(function(error){
            //     console.log(error);
            // })
    }

    events(){
        return this.state.events.map(function(currentEvent, i){
            return <EventList event={currentEvent} key={i} />;
        })
    }    

    render(){
        return(
            <div className="container1">
                
                <div className="formcontainerEvent">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="eventId">Event</label>
                        <input type="text" required maxlength ="5" className="form-control" value = {this.state.eventId} onChange={this.onChangeEventId} placeholder="Enter Event Id"/>
                    </div>

                    <div className="form-group">
                        <label for="startDate">Start Date</label>
                        <input type="date" required className="form-control" value = {this.state.startDate} onChange={this.onChangeStartDate} placeholder="Enter start date"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="endDate">End Date</label>
                        <input type="date" required className="form-control"value = {this.state.endDate} onChange = {this.onChangeEndDate} placeholder="Enter end date"/>
                    </div>
                    <div className="form-group">
                        <label for="trainer">Trainer</label>
                        <input type="text" className="form-control"value = {this.state.trainerId} onChange = {this.onChangeTrainer} placeholder="Enter Trainer's ID"/>
                    </div>

                    <div className="form-group">
                        <label for="type">Training Type</label>
                        <input type="text" required className="form-control"value = {this.state.trainingId} onChange = {this.onChangeTrainingId} placeholder="Enter Training Type"/>
                    </div>
                    
                     {/* <div className="form-group"> */}
                        {/* <label for="trainingType">Training Type</label> */}
                            {/* <select value = {this.state.selectedType} onChange={(e) => this.setState({selectedType: e.target.value})}>

                                {this.state.typeIds.map((trainingId) => <option key={trainingId.value} value={trainingId.value}>{trainingId.display}</option>)}
                                
                            </select> */}

                        {/* <div style={{color: 'red', marginTop: '5px'}}>
                          {this.state.validationError}
                        </div> */}

                    {/* </div> */}

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            
                <div className="block"></div>

                <div className="tablecontainerEvent"> 
                    <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Training Type</th>
                                    <th>Trainer</th>                                    
                                    <th>Action</th>
                                    <th></th> 
                                </tr>
                            </thead>
                            <tbody>
                                {this.events()}
                            </tbody>
                    </table>
                </div>
             </div>
        )
    }
}

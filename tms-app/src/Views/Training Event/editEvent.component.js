import React, { Component } from 'react';
import axios from 'axios';

import '../../css/trainer.css';

import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';

export default class EditEvent extends Component{
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeSDate = this.onChangeSDate.bind(this);
        this.onChangEDate = this.onChangEDate.bind(this);
        this.onChangeTrainingId = this.onChangeTrainingId.bind(this);
        this.onChangeTrainerId = this.onChangeTrainerId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.close = this.close.bind(this);

        this.state = {
            eventId: '',
            startDate: '',
            endDate: '',
            trainingId : '',
            trainerId : ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/event/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    eventId: response.data.eventId,
                    startDate: response.data.startDate,
                    endDate: response.data.endDate,
                    trainingId: response.data.trainingId,
                    trainerId: response.data.trainerId
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeId = (e) => {
        this.setState({
            eventId: e.target.value
        });
    }
    onChangeSDate = (e) => {
        this.setState({
            startDate: e.target.value
        });
    }
    onChangEDate = (e) => {
        this.setState({
            endDate: e.target.value
        });
    }
    onChangeTrainingId = (e) => {
        this.setState({
            trainingId: e.target.value
        });
    }
    onChangeTrainerId = (e) => {
        this.setState({
            trainerId: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const updateEvent = {
            eventId: this.state.eventId,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            trainingId: this.state.trainingId,
            trainerId: this.state.trainerId
        };

        console.log(updateEvent);
        console.log(this.state.eventId);

        axios.put('http://localhost:4000/event/edit/'+this.props.match.params.eventId, updateEvent)
            .then(res => console.log(res.data))
            .then(data => {
                alert('Event details updated sccesfully');
                this.props.history.go(-1);
                // window.location.reload();
            })
            .catch(function(error){
                console.log(error);
            });;
    }

    // close(){
    //     this.setState({ modalIsOpen: false });
    //   }

    render() {

        return (

        <Modal>
            <Modal.Header >
                <Modal.Title>
                    Edit Details
                </Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label for="eventId">Event</label>
                        <input type="text" required maxlength ="5" className="form-control" value = {this.state.eventId} onChange={this.onChangeId} placeholder="Enter Event Id"/>
                    </div>

                    <div className="form-group">
                        <label for="startDate">Start Date</label>
                        <input type="date" required className="form-control" value = {this.state.startDate} onChange={this.onChangeSDate} placeholder="Enter start date"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="endDate">End Date</label>
                        <input type="date" required className="form-control"value = {this.state.endDate} onChange = {this.onChangEDate} placeholder="Enter end date"/>
                    </div>
                    <div className="form-group">
                        <label for="trainer">Trainer</label>
                        <input type="text" className="form-control"value = {this.state.trainerId} onChange = {this.onChangeTrainerId} placeholder="Enter Trainer's ID"/>
                    </div>
                    <div className="form-group">
                        <label for="endDate">Training Type</label>
                        <input type="text" required className="form-control"value = {this.state.trainingId} onChange = {this.onChangeTrainingId} placeholder="Enter Training Type"/>
                    </div>
                        <button type="submit" className="btn btn-primary">Update</button>  
                </form>
                <br></br>
            </Modal.Body>
        </Modal>

        )
    }
}


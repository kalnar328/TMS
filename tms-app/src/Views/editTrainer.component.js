import React, { Component } from 'react';
import axios from 'axios';

// //modal popuo dependency 
// import Modal from '@trendmicro/react-modal';
// // Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-modal/dist/react-modal.css'


export default class EditTrainer extends Component{
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesination = this.onChangeDesination.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            trainerId: '',
            trainerName: '',
            designation: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    trainerId: response.data.trainerId,
                    trainerName: response.data.trainerName,
                    designation: response.data.designation
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeId = (e) => {
        this.setState({
            trainerId: e.target.value
        });
    }
    onChangeName = (e) => {
        this.setState({
            trainerName: e.target.value
        });
    }
    onChangeDesination = (e) => {
        this.setState({
            designation: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const updateTrainer = {
            trainerId: this.state.trainerId,
            trainerName: this.state.trainerName,
            designation: this.state.designation
        };

        console.log(updateTrainer);

        axios.put('http://localhost:4000/edit/'+this.props.match.params.trainerId, updateTrainer)
            .then(res => console.log(res.data))
            .then(data => {
                alert('Trainer added sccesfully');
                window.location.reload();
            })
            .catch(function(error){
                console.log(error);
            });;
    }

    render() {
        return (
            <div>

                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="trainerId">ID</label>
                        <input type="text" className="form-control" value = {this.state.trainerId} onChange={this.onChangeId} placeholder="Enter Trainer's Id"/>
                    </div>

                    <div className="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" className="form-control" value = {this.state.trainerName} onChange={this.onChangeName} placeholder="Enter full name"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="Designation">Designation</label>
                        <input type="text" className="form-control"value = {this.state.designation} onChange = {this.onChangeDesination} placeholder="Enter Designation"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}


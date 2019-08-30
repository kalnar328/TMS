import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import TrainerList from './trainerList';


import '../../css/trainer.css';

export default class Trainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            trainerId: '',
            trainerName: '',
            designation: '',
            trainers: []
        };
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e){
        e.preventDefault();

        const newTrainer = {
            trainerId: this.state.trainerId,
            trainerName: this.state.trainerName,
            designation: this.state.designation
        };

        axios.post('http://localhost:4000/new', newTrainer)
            .then(res => {
                /* alert if the trainer ID is in the database */
                if(res.status === 202){
                    alert('ID exists. Please use a different Trainer ID');
                }else{
                    console.log(res.data);
                    alert('Trainer added sccesfully');
                    window.location.reload();
                }
                
            })
            .catch(function(err){
                console.log(err);
            });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/trainers')
            .then(response => {
                this.setState({trainers: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    trainers(){
        return this.state.trainers.map(function(currentTrainer, i){
            return <TrainerList trainer={currentTrainer} key={i} />;
        })
    }    

    render(){
        return(
            <div className="container1">
                
                <div className="formcontainer">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="trainerId">ID</label>
                        <input type="text" required maxlength="6" className="form-control" value = {this.state.trainerId} onChange={this.onChangeId} placeholder="Enter Trainer's Id"/>
                    </div>

                    <div className="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" required maxlength="20" className="form-control" value = {this.state.trainerName} onChange={this.onChangeName} placeholder="Enter full name"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="Designation">Designation</label>
                        <input type="text" required maxlength="25" className="form-control"value = {this.state.designation} onChange = {this.onChangeDesination} placeholder="Enter Designation"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            
                <div className="block"></div>

                <div className="tablecontainer"> 
                    <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Username </th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.trainers()}
                            </tbody>
                        </table>
                </div>
             </div>
        )
    }
}

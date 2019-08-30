
import React, { Component } from 'react';
import axios from 'axios';

import '../../css/trainer.css';

import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';

export default class EditTrainer extends Component{
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesination = this.onChangeDesination.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.close = this.close.bind(this);

        this.state = {
            trainerId: '',
            trainerName: '',
            designation: ''
            // isOpened: false
        };
    }

    // componentDidMount() {
    //     axios.get('http://localhost:4000/edit/'+this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 trainerId: response.data.trainerId,
    //                 trainerName: response.data.trainerName,
    //                 designation: response.data.designation
    //             })   
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

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
                alert('Trainer updated sccesfully');
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
                            <label for="trainerId">ID</label>
                            <input type="text" maxlength="6" required className="form-control" value = {this.state.trainerId} onChange={this.onChangeId} placeholder="Enter Trainer's Id"/>
                        </div>

                        <div className="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" maxlength="20" required className="form-control" value = {this.state.trainerName} onChange={this.onChangeName} placeholder="Enter full name"/>
                        </div>
                        
                        <div className="form-group">
                            <label for="Designation">Designation</label>
                            <input type="text" maxlength="25" required className="form-control"value = {this.state.designation} onChange = {this.onChangeDesination} placeholder="Enter Designation"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                        
                </form>
                <br></br>
            </Modal.Body>
        </Modal>

        )
    }
}


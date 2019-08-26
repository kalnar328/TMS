import React, { Component } from 'react';
import axios from 'axios';

import '../../css/trainer.css';

import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';

export default class EditType extends Component{
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.close = this.close.bind(this);

        this.state = {
            trainingId: '',
            trainingType: '',
            description: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/trainingType/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    trainingId: response.data.trainingId,
                    trainingType: response.data.trainingType,
                    description: response.data.description
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeId = (e) => {
        this.setState({
            trainingId: e.target.value
        });
    }
    onChangeType = (e) => {
        this.setState({
            trainingType: e.target.value
        });
    }
    onChangeDesc = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const updateType = {
            trainingId: this.state.trainingId,
            trainingType: this.state.trainingType,
            description: this.state.description
        };

        console.log(updateType);
        console.log(this.state.trainingId);

        axios.put('http://localhost:4000/trainingType/edit/'+this.props.match.params.trainingId, updateType)
            .then(res => console.log(res.data))
            .then(data => {
                alert('Type details updated sccesfully');
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
                        <label for="trainingId">ID</label>
                        <input type="text" className="form-control" value = {this.state.trainingId} onChange={this.onChangeId} placeholder="Enter Event Id"/>
                    </div>

                    <div className="form-group">
                        <label for="trainingType">Type</label>
                        <input type="text" className="form-control" value = {this.state.trainingType} onChange={this.onChangeType} placeholder="Enter start date"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input type="text" className="form-control"value = {this.state.description} onChange = {this.onChangeDesc} placeholder="Enter end date"/>
                    </div>
                        <button type="submit" className="btn btn-primary">Update</button>  
                </form>
                <br></br>
            </Modal.Body>
        </Modal>

        )
    }
}


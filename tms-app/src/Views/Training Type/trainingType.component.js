import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../../Navbar';
import TypesList from './trainingTypeList';

export default class TrainingType extends Component{

    constructor(props){
        super(props);
        this.state = {
            trainingId: '',
            trainingType: '',
            description: '',
            types: []
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeId = (e) => {
        this.setState({
            trainingId: e.target.value
        });
    }
    onChangeName = (e) => {
        this.setState({
            trainingType: e.target.value
        });
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const newType = {
            trainingId: this.state.trainingId,
            trainingType: this.state.trainingType,
            description: this.state.description
        };

        console.log(newType);

        axios.post('http://localhost:4000/trainingtype/add', newType)
            .then(res => {
                if(res.status === 202){
                    alert('ID exists. Please use a different ID');
                }else{
                    alert('Training Type added sccessfully');
                    window.location.reload();
                } 
            })
            .catch(function(error){
                console.log(error);
            });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/trainingTypes')
            .then(response => {
                this.setState({types: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    types(){
        return this.state.types.map(function(currentType, i){
            return <TypesList type={currentType} key={i} />;
        })
    }    

    render(){
        return(
            <div className="container1">
                
                <div className="formcontainer">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="typeId">ID</label>
                        <input type="text" required maxlength="5" className="form-control" value = {this.state.trainingId} onChange={this.onChangeId} placeholder="Enter Type Id"/>
                    </div>

                    <div className="form-group">
                        <label for="trainingType">Type</label>
                        <input type="text" required maxlength="40" className="form-control" value = {this.state.trainingType} onChange={this.onChangeName} placeholder="Enter type name"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="designation">Description</label>
                        <input type="text" required maxlength="100" className="form-control"value = {this.state.description} onChange = {this.onChangeDescription} placeholder="Enter Description"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            
                <div className="block"></div>

                <div className="tablecontainer"> 
                    <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID </th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.types()}
                            </tbody>
                        </table>
                </div>
             </div>
        )
    }
}
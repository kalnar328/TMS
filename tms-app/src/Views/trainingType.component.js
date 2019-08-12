import React, { Component } from 'react';
import NavBar from '../Navbar';

export default class TrainingType extends Component{
    render(){
        return(
            <div className="container1">
               <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                </table>
      

            </div>
        )
    }
}
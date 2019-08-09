import React, { Component } from 'react';

export default class Dashboard extends Component{
    render(){
        return(
            <div className="container">

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}
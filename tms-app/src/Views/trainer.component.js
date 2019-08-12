import React, { Component } from 'react';

import '../trainer.css';

export default class Trainer extends Component{
    render(){
        return(
            <div className="container1">
               <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Designation</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
      

            </div>
        )
    }
}
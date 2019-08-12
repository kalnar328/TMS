import React, { Component } from 'react';
import NavBar from '../Navbar';

export default class TrainingEvent extends Component{
    render(){
        return(
            <div className="container1">
            <table className="table table-striped">
                 <thead>
                     <tr>
                         <th>Event ID </th>
                         <th>Start Date</th>
                         <th>End Date</th>
                         <th>Training Type</th>
                         <th>Participants</th>
                     </tr>
                 </thead>
             </table>
   

         </div>
        )
    }
}
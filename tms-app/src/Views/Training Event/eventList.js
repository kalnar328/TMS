import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EventList extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
  }

    delete() {
        console.log(this.props.event.eventId);
        axios.delete('http://localhost:4000/event/remove/'+this.props.event.eventId)
            .then(res=>{
                console.log('Deleted');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    render() {
      return (
      <tr>
           <td>{this.props.event.eventId}</td>
           <td>{this.props.event.endDate}</td>
           <td>{this.props.event.endDate}</td>
           <td>{this.props.event.trainingId}</td>
           <td>{this.props.event.trainerId}</td>
           <td>
             <Link to={"event/edit/"+this.props.event.eventId} className="btn btn-primary">Edit</Link>
           </td>
           <td>
             <button className="btn btn-danger" onClick={() => {if(window.confirm('Remove event?')){this.delete()};}}>Remove</button>
           </td>
      </tr>
      );
    }

  // render() {
  //   return (
  //   <tr>
  //        <td>{this.props.event.eventId}</td>
  //        <td>{this.props.event.endDate}</td>
  //        <td>{this.props.event.endDate}</td>
  //        <td>{this.props.event.trainingId}</td>
  //        <td>{this.props.event.trainerId}</td>
  //        <td>
  //          <Link to={"event/edit/"+this.props.event.eventId} className="btn btn-primary">Edit</Link>
  //        </td>
  //        <td>
  //          <button className="btn btn-danger" onClick={() => {if(window.confirm('Remove event?')){this.delete()};}}>Remove</button>
  //        </td>
  //   </tr>
  //   );
  // }
}

export default EventList;
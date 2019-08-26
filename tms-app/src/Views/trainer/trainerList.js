import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TrainerList extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        console.log(this.props.trainer.trainerId);
        axios.delete('http://localhost:4000/remove/'+this.props.trainer.trainerId)
            .then(res=>{
                console.log('Deleted');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

  render() {
    return (
    <tr>
         <td>{this.props.trainer.trainerId}</td>
         <td>{this.props.trainer.trainerName}</td>
         <td>{this.props.trainer.designation}</td>
         <td>
           <Link to={"trainer/edit/"+this.props.trainer.trainerId} className="btn btn-primary">Edit</Link>
         </td>
         <td>
           <button className="btn btn-danger" onClick={() => {if(window.confirm('Remove user?')){this.delete()};}}>Remove</button>


         </td>
    </tr>
    );
  }
}

export default TrainerList;


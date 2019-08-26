import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TypeList extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        console.log(this.props.type.trainingId);
        axios.delete('http://localhost:4000/trainingType/remove/'+this.props.type.trainingId)
            .then(res=>{
                console.log('Deleted');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

  render() {
    return (
    <tr>
        {/* database column name */}
         <td>{this.props.type.trainingId}</td>   
         <td>{this.props.type.trainingType}</td>
         <td>{this.props.type.description}</td>
         <td>
           <Link to={"trainingType/edit/"+this.props.type.trainingId} className="btn btn-primary">Edit</Link>
         </td>
         <td>
           <button className="btn btn-danger" onClick={() => {if(window.confirm('Remove type?')){this.delete()};}}>Remove</button>
         </td>
    </tr>
    );
  }
}

export default TypeList;


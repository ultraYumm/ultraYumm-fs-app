import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';
import '../Tables/Tables.css';





class DeleteButton extends Component {

  
  render() {
   
    const name = this.props.name
    const idToDelete = this.props.idToDelete
    
    return (
        <div 
        className= "primaryFont white redBackground moreButton sticky"
        onClick={() => {
            this.props.handleDeletePackItem(idToDelete)
        console.log("deleted")}
            }
        >
        Delete selected<span className = "primaryFont text">
            
            :&nbsp;{name}</span> 
        </div>
    )
    }  
}
  

export default DeleteButton
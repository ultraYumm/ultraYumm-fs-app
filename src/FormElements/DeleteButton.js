import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';
import '../Tables/Tables.css';
import config from "../config";




class DeleteButton extends Component {

    handleClickDelete = e => {
        e.preventDefault()
      

        const idToDelete = this.props.idToDelete

        const API = config.API_UY_ENDPOINT   
        const  endpoint = config.endpointP

        const url = API + endpoint;
        const API_TOKEN = config.API_UY_KEY

        
    
           fetch(`${url}/${idToDelete}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        })

        .then(() => {
            this.props.handleDeletePackItem(idToDelete)
          })

          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          

          .catch(error => {
            console.error({ error })
          })
      }
    

  
  render() {
   
    const name = this.props.name
   

    
    return (
        <div 
        className= "primaryFont white redBackground moreButton sticky"
        onClick={this.handleClickDelete}
        >
        delete selected<span className = "primaryFont text">
            
            :&nbsp;{name}</span> 
        </div>
    )
    }  
}
  

export default DeleteButton;
import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';
import '../Tables/Tables.css';





class GoButton extends Component {

  
  render() {

    
    return (
      <div className= "goContainer go">
          <button 
            className= "white montebello blackBackground go"
            type = "submit">
            {this.props.goButtonText}&nbsp;<span className = "primaryFont username bold">
              <br></br>{this.props.username}</span>
            </button>
      </div>
    )
 }  
}
  

export default GoButton
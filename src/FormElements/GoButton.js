import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class GoButton extends Component {

  
  render() {

    
    return (
      <div className= "goContainer">
          <button 
            className= "white montebello blackBackground go"
            type = "submit">
            Go!
          </button>
      </div>
    )
 }  
}
  

export default GoButton
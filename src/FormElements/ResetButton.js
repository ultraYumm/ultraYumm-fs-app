import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class ResetButton extends Component {

  
  render() {

    
    return (
      <div className= "reset">
          <button 
            className= "black montebello skinBackground reset sticky"
            type = "reset">
            Reset
          </button>
      </div>
    )
 }  
}
  

export default ResetButton
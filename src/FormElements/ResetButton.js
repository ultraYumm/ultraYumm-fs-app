import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class ResetButton extends Component {
ß
  
  render() {

    
    return (
      <button className= "tooltip iconButtons">
          <i className ="fas fa-undo black"
            type = "reset"
            
            ><span className = "tooltiptext primaryFont white">reset</span></i>
      </button>
    )
 }  
}
  

export default ResetButton
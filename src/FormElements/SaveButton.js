import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class SaveButton extends Component {

  
  render() {

    
    return (
      <button className= "tooltip iconButtons">
      
       <i className ="fas fa-archive black"
       type = "submit"
            ><span className = "tooltiptext primaryFont white">save</span></i>
      </button>
    )
 }  
}
  

export default SaveButton
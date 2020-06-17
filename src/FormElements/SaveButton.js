import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class SaveButton extends Component {

  
  render() {

    
    return (
      <button className= "tooltip iconButtons cloudBlueBackground">
      
       <i class="fas fa-archive black"
       type = "submit"
       
            ><span className = "tooltiptext primaryFont black">save</span></i>
      </button>
    )
 }  
}
  

export default SaveButton
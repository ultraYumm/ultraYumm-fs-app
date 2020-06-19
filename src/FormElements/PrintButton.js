import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class PrintButton extends Component {

  
  render() {
    const print = () => window.print()
    
    return (
      <button className= "tooltip iconButtons">
          <i className ="fas fa-paw black"
            onClick = {print}
           
            type = "submit"><span className = "tooltiptext primaryFont white">print</span>
          </i>
      </button>
    )
 }  
}
  

export default PrintButton
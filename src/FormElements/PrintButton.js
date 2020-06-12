import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class PrintButton extends Component {

  
  render() {
    const print = () => window.print()
    
    return (
      <div className= "filter">
          <button 
            onClick = {print}
            className= "black montebello skinBackground filter sticky"
            type = "submit">Print
          </button>
      </div>
    )
 }  
}
  

export default PrintButton
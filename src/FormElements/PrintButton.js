import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class PrintButton extends Component {

  
  render() {

    
    return (
      <div className= "filter">
          <button 
            className= "black montebello skinBackground filter"
            type = "submit">Print
          </button>
      </div>
    )
 }  
}
  

export default PrintButton
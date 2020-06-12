import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class SaveButton extends Component {

  
  render() {

    
    return (
      <div className= "filter">
          <button 
            className= "black montebello skinBackground filter sticky"
            type = "submit">Save
          </button>
      </div>
    )
 }  
}
  

export default SaveButton
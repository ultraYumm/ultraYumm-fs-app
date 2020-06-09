import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class SaveButton extends Component {

  
  render() {

    
    return (
      <div className= "filter">
          <button 
            className= "black montebello skinBackground filter"
            type = "submit">Save edits
          </button>
      </div>
    )
 }  
}
  

export default SaveButton
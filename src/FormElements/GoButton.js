import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class goButton extends Component {

  
  render() {

    
    return (
          <button 
            className= "white montebello blackBackground go"
            type = "submit">
            Go!
          </button>
    )
 }  
}
  

export default goButton
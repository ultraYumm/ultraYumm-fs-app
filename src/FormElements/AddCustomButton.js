import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class AddCustomButton extends Component {

  
  render() {

    return (
        <div 
            className= "montebello red skinBackground moreButton sticky">
           {this.props.addButtonText}
        </div>
    
    )
 }  
}
  

export default AddCustomButton
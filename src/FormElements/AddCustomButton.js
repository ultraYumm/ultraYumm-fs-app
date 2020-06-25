import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class AddCustomButton extends Component {

  
  render() {

    const text = this.props.text

    
    return (
        <div 
            className= "montebello red skinBackground moreButton sticky">
            Make your own item
        </div>
    
    )
 }  
}
  

export default AddCustomButton
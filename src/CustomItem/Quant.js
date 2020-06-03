import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class Quant extends Component {

  static defaultProps = {
    input:  null,
  }

  
  render() {

    const input = this.props.input
    const placeholder = JSON.stringify(input)
    
      
   
    return (
       
        <input type="number" 
        className = "adjust" min="0" step="0.5"
        //value = {input}
        placeholder = {input}
        />
        
   )}
  
}
  

export default Quant
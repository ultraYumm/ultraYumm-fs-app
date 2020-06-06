import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class Quant extends Component {

  static defaultProps = {
    input:  2,
  }

  
  render() {

    const input = this.props.input
    const placeholder = input.toString()

    const onSubmitForm = (e) => {
      e.preventDefault()

      const inputValue =  e.target.inputValue.value
      this.props.handleAdjustQuant(inputValue)
  
  }

    
      
   
    return (
      <form onSubmit={onSubmitForm}>
        <input type="text" 
        className = "adjust" min="0" step="0.5"
        name= 'inputValue'
        placeholder = {placeholder}
       
             />
        </form>
   
   )}
  
}
  

export default Quant
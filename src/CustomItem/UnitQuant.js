import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class UnitQuant extends Component {

  static defaultProps = {
    input:  0,
  }

  
  render() {

      const input = this.props.input

    

      const buildHandleKeyUp = setter => (e) => {
     
      e.preventDefault() 
      const input = e.currentTarget.value 
      setter(input);
      this.props.handleAdjustQuant(input)

      }

   
    return (
      <input className= "dataResult skinBackground"
      id = "serving quantity"
      type = "number"
      min= "0"
      name="itemQuantity"
      default value = {isNaN(input)? 0 : input}
    
      onChange = {buildHandleKeyUp((value) => {
        this.setState(
          {serving_qty: value} 
        )
      })}
      />
   
   )}

}
  

export default UnitQuant
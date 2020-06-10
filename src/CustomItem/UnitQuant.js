import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class UnitQuant extends Component {

  static defaultProps = {
    input:  1,
  }
  
  render() {

      const input = this.props.input
      const id = this.props.id

      const buildHandleKeyUp = setter => (e) => {
     
      e.preventDefault() 
      const input = e.currentTarget.value 
      setter(input, id);
      this.props.handleAdjustQuant(input, id)

      }

   
    return (
      <input className="dataResult skinBackground"
      type = "number"
      placeholder = {isNaN(input)? 1 : input}
    
      onKeyUp = {buildHandleKeyUp((value) => {
        this.setState(
          {"serving_qty": value} 
        )   
      })}
      />
   
   
   )}

}
  

export default UnitQuant
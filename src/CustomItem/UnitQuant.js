import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class UnitQuant extends Component {

  static defaultProps = {
    input:  1,
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
      <input className="tableAdjust dataResult sinkBackground"
      type = "number"
      placeholder = {input}
    
      onKeyUp = {buildHandleKeyUp((value) => {
        this.setState(
          {"serving_qty": value} 
        )   
      })}
      />
   
   
   )}

}
  

export default UnitQuant
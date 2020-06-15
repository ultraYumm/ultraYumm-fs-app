import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class WeightQuant extends Component {

  
  
  static defaultProps = {
    input:  1,
  }

  render() {

    const input = this.props.input

      
    const buildHandleKeyUp = setter => (e) => {
     
      e.preventDefault() 
      const input = e.currentTarget.value 
      setter(input);
      this.props.handleAdjustWeight(input)

      }

   
    return (
     
      <input className="dataResult skinBackground"
      type = "number"
      min= "0"
      defaultValue = {isNaN(input)? 1 : input}
      onChange = {buildHandleKeyUp((value) => {
        this.setState(
          {serving_weight_grams: value} 
        )   
      })}
      />
   
   
   )}

}
  

export default WeightQuant


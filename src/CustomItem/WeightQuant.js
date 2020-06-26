import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class WeightQuant extends Component {

  
  
  static defaultProps = {
    input:  0,
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
      id= "weight per serving"
      type = "number"
      min= "0"
      defaultValue = {isNaN(input)? 0: input}
      onChange = {buildHandleKeyUp((value) => {
        this.setState(
          {serving_weight_grams: value} 
        )   
      })}
      />
   
   
   )}

}
  

export default WeightQuant
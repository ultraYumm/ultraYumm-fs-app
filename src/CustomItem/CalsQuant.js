import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class CalsQuant extends Component {

  static defaultProps = {
    input:  0,
  }
  
  render() {
    const input = this.props.input
  

    const buildHandleKeyUp = setter => (e) => {
     
      e.preventDefault() 
      const input = e.currentTarget.value 
      setter(input);
      this.props.handleAdjustCals(input)

      }

   
    return (
      
      <input className="dataResult skinBackground"
      id= "calories per serving"
      type= "number"
      defaultValue =  {isNaN(input)? 0 : input}
      min= "0"

      onChange = {buildHandleKeyUp((value) => {
        this.setState(
          {cals_per_serving: value} 
        )   
      })}
      />
   
   )}

}
  

export default CalsQuant
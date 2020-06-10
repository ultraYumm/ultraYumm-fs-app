import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class ServUnit extends Component {

  static defaultProps = {
    input:  "pinch",
  }

  
  render() {
     
    const input = this.props.input
    const id = this.props.id
    
    const buildHandleKeyUp = setter => (e) => {
     
      e.preventDefault() 
      const input = e.currentTarget.value 
      setter(input);
      this.props.handleAdjustUnit(input)

      }


   
    return (

      <input className="tableAdjust dataResult sinkBackground"
      type = "text"
      placeholder = {input}
    
      onKeyUp = {buildHandleKeyUp((value) => {
        this.setState(
          {"serving_unit": value} 
        )   
      })}
      />
   
        
   )}
  
}

export default ServUnit
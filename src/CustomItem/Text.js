import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class Text extends Component {

  static defaultProps = {
    input:  "pinch",
  }

  
  render() {
     
    const input = this.props.input
    const id = this.props.id
    

    const onSubmitForm = (e) => {
      e.preventDefault() 
      const unit =  e.target.unit.value
      this.props.handleAdjustUnit(unit, id)
    }


   
    return (

      <form className= "quant" onSubmit={onSubmitForm}>
         <p handleAdjustUnit = {(input, id) =>
              this.adjustUnit(input,id)
            }>
        <input 
        name= 'unit'
        placeholder = {input}/>
        </p>
    </form>
        
   )}
  
}

export default Text
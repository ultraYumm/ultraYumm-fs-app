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
    
    const onSubmitForm = (e) => {
      e.preventDefault() 
      const quantInput =  e.target.quantInput.value
      this.props.handleAdjustQuant(quantInput, id)
      
    

    }
   
    return (
      <form className= "quant" onSubmit={onSubmitForm}>
         <p handleAdjustQuant = {(input, id) =>
              this.adjustQuant(input,id)
           
            }>
        
      <input className="tableAdjust dataResult sinkBackground"
      placeholder = {!input? 1 : input}
      name= 'quantInput'
      />
        </p>
    </form>
   
   )}

}
  

export default UnitQuant
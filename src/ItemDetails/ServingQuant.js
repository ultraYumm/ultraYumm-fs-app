import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";




class ServingQuant extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        quant: null
      }
     
  render() {
      
 const quant = this.props.quant
 const id = this.props.id
 
  const onSubmitForm = (e) => {
  e.preventDefault()

  const quantInput =  e.target.quantInput.value
  this.props.handleAdjustQuant(quantInput, id)
}

    return (
        <td className="servingH black">
          {!quant? "" : quant}
          
          <form className= "quant tableAdjust" onSubmit={onSubmitForm}>
         
            <input type="number"
            className= "adjust" min="0" step="0.5"
            name= 'quantInput'/>
           
          </form>
      
        </td>
     
          
   )}
  
}
  

export default ServingQuant
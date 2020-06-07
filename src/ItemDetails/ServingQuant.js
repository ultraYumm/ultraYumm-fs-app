import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import Quant from "../CustomItem/Quant";



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
        <td className="servingH">
          {quant}
          
          <form className= "quant" onSubmit={onSubmitForm}>
          <p className="tableAdjust" handleAdjustQuant = {(input, id) =>
              this.adjustQuant(input,id)
            }>
            <input type="number" onSubmit={onSubmitForm}
            className= "adjust" min="0" step="0.5"
            name= 'quantInput'/>
               </p>
          </form>
      
        </td>
     
          
   )}
  
}
  

export default ServingQuant
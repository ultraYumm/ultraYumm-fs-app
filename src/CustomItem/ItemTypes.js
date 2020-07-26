import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import { ITEMTYPES } from "../Defaults";






class ItemTypes extends Component {

  static defaultProps = {
    itemTypes: ITEMTYPES,
    stateType: "TBD"
  }

  

  
  render() {

    const stateType = this.props.stateType   
    const itemTypes = this.props.itemTypes
    const itemTypesArray = itemTypes[0].type
   
   
      return (

          <ul className= "scroll">
          {itemTypesArray.map((type, key)=> (
            <li key= {key}>
          
            <label className= "labelContainer"> <span className={ stateType === type ?  ' red bold'  : ' black'}>{type}</span>
                 <input type="radio"
      

                 defaultValue = {type}
  
                  onClick={() => {
                    const selectedType = type
                    this.props.handleSelectType(selectedType)
                  
                  }}
                 
                 />
          <span className= "checkmark"></span>
             </label>
            </li>
          ))}        
          </ul>
    
     )}
  
}
  

export default ItemTypes


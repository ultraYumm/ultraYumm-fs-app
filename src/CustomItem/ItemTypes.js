import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class ItemTypes extends Component {

  
  render() {
      
    
    const itemTypes = this.props.itemTypes
    const itemTypesArray = itemTypes[0].type
   
    function onlyOne(checkbox) {
    const checkboxes =  document.getElementsByName('check')
      checkboxes.forEach((item) => {
          if (item !== checkbox) item.checked = false
      })
  }
  
      return (

          <ul className= "scroll">
          {itemTypesArray.map((type)=> (
            <li key= {type}>
          
            <label className="labelContainer"> {type}
                 <input type="checkbox"

                 defaultValue = {type}
          
                  name= "check"
                  onClick={() => {
                    const selectedType = type
                    onlyOne(this)
                    this.props.handleSelectType(selectedType)
                  
                  }}
                 
                 />
                 <span className="checkmark"></span>
             </label>
            </li>
          ))}        
          </ul>
    
     )}
  
}
  

export default ItemTypes
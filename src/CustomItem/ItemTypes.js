import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class ItemTypes extends Component {

  
  render() {
      
    
    const itemTypes = this.props.itemTypes
    const itemTypesArray = itemTypes[0].type
    console.log(itemTypesArray)
 
      return (
        <div className= "filterSelection"> 
        <h3 className= "filterCategory">Type</h3>
          <ul className= "scroll">
          {itemTypesArray.map((type)=> (
            <li key= {type}>
          
            <label className="labelContainer"> {type}
                 <input type="checkbox"/>
                 <span className="checkmark"></span>
             </label>
            </li>
          ))}   
           
          </ul>
     </div>
     )}
  
}
  

export default ItemTypes
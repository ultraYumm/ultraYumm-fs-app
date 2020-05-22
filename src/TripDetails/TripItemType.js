import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripItemType extends Component {

  
    render() {
      
      const selectedTripItems = this.props.selectedTripItems
      const tripItemTypes = selectedTripItems.map((items) => (items.type))
      const uniqueTypes = [...new Set(tripItemTypes)]
      
      return (
          <div className= "filterSelection"> 
          <h3 className= "filterCategory">Type</h3>
            <ul className= "scroll"> 
            {uniqueTypes.map((type)=> (
              <li key= {type}>
            
              <label className= "labelContainer"> {type}
                   <input type= "checkbox"/>
                   <span className= "checkmark"></span>
               </label>
              </li>
            ))}   
            </ul>
       </div>
       )}
    
}
  

export default TripItemType



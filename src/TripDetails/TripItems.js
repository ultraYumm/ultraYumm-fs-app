import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripItems extends Component {

  
  render() {
      
    
    const tripItems = this.props.tripItems

    const tripItemNames = tripItems.map((items) => (items.food_name))
    
    const uniqueTypes = [... new Set(tripItemNames)]
    

   
  
  
      return (
        <div className= "filterSelection"> 
        <h3 className = "filterCategory">Item name</h3>
          <ul className= "scroll"> 
          {uniqueTypes.map((name)=> (
            <li key= {name}>
          
            <label className="labelContainer"> {name}
                 <input type="checkbox"/>
                 <span className="checkmark"></span>
             </label>
            </li>
          ))}   
          </ul>
     </div>
     )}
  
}
  

export default TripItems
import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class UniqueTripItems extends Component {

  
  render() {
      
    
    const tripItems = this.props.tripItems
    const tripItemNames = tripItems.map((items) => (items.food_name))
    const uniqueNames = [...new Set(tripItemNames)]
 
      return (
        <div className= "filterSelection"> 
           <ul className= "scroll"> 
           {uniqueNames.map((name)=> (
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
  

export default UniqueTripItems
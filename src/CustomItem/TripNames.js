import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class TripNames extends Component {

  
  render() {

    const trips = this.props.trips
    
    
       
    return (
        <div className= "filterSelection"> 
            <ul className= "scroll"> 
            {trips.map((trips, key)=> (
              <li key= {key}>
              <label className= "labelContainer"> {trips.name}
                   <input type= "checkbox"/>
                   <span className= "checkmark"></span>
               </label>
              </li>
            ))}   
            </ul>
       </div>
     )}
  
}
  

export default TripNames
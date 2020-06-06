import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripTravelers extends Component {

  render() {
      
    const selectedTrip = this.props.selectedTrip
    //const tripTravelers = selectedTrip.map((trip) => (trip.traveler_names))
  
  
      return (
        <div className= "filterSelection"> 
          
        </div>
     )}
    
  }
  

export default TripTravelers

/*<ul className= "scroll"> 
            {tripTravelers.map((name)=> (
              <li key= {name}>
            
              <label className="labelContainer"> {name}
                   <input type="checkbox"/>
                   <span className="checkmark"></span>
               </label>
              </li>
            ))}   
            </ul>*/
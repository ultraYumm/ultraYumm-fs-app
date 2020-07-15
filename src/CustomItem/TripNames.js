import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class TripNames extends Component {


  static defaultProps = {
    trips:  {}
  }
  

  
  render() {
    const stateName = this.props.stateName   
    const trips = this.props.trips

       
    return (
      
            <ul className= "scroll"> 
            {trips.map((trip, key)=> (
              <li key= {key}>
              <label className= "labelContainer"> <span className={ stateName === trip.name ?  ' red bold'  : ' black'}>{trip.name}</span>
                   <input 
                   type="radio"
                    defaultValue = {trip.id}
                   
                   onClick={() => {
                    const selectedTrip = trip
                    const tripid = trip.id
                    this.props.handleSelectTrip(selectedTrip, tripid)
                  
                  }}
                   
                   />
                    <span className= "checkmark"></span></label>
              </li>
            ))}   
            </ul>
 
     )}
  
}
  

export default TripNames
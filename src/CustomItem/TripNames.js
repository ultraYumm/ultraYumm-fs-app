import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class TripNames extends Component {

  
  render() {

    const trips = this.props.trips
    
    function onlyOne(checkbox) {
      var checkboxes = document.getElementsByName('check')
      checkboxes.forEach((item) => {
          if (item !== checkbox) item.checked = false
      })
  }
       
    return (
        <div className= "filterSelection"> 
            <ul className= "scroll"> 
            {trips.map((trip, key)=> (
              <li key= {key}>
              <label className= "labelContainer"> {trip.name}
                   <input 
                   name= "check"
                   type= "checkbox"
                   onClick={() => {
                    const selectTripId = trip.id
                    const tripName = trip.name
                    const selectedTrip = trip
                    const tripDates = trip.trip_dates
        
                    onlyOne(this)
                    this.props.handleSelectTrip(selectTripId, tripName, selectedTrip, tripDates)
                  
                  }}
                   
                   />
                   <span className= "checkmark"></span>
               </label>
              </li>
            ))}   
            </ul>
       </div>
     )}
  
}
  

export default TripNames
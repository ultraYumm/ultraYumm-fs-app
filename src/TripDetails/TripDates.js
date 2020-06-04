import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';




class TripDates extends Component {
     
  render() {
      
  const selectedTrip = this.props.selectedTrip
  const tripDates = selectedTrip.map((trip) => (trip.trip_dates))[0]
  const placeholder = this.props.placeholder

    return (
      <div className= "filterSelection"> 
          <ul className= "scroll"> 
          {tripDates.map((date)=> (
            <li key= {date}>
          
            <label className="labelContainer"><Moment format= "MMM/DD">{date}</Moment>
                 <input type="checkbox"
                 placheholder = {placeholder}/>
                 <span className="checkmark"></span>
             </label>
            </li>
          ))}   
          </ul>
      </div>
   )}
  
}
  

export default TripDates
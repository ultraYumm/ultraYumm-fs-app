import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';




class TripDates extends Component {

  static defaultProps = {
    tripDates:  ["2019-03-23T09:25:43.511Z"],

  }
  
     
  render() {
      
  const tripDates = this.props.tripDates
  
  console.log(tripDates)
  /*const tripDates = selectedTrip.map((trip) => (trip.trip_dates))
  const placeholder = this.props.placeholder*/

    return (
      <ul className= "scroll"> 
      {tripDates.map((date)=> (
  <li key= {date}>

  <label className="labelContainer"><Moment format= "MMM/DD">{date}</Moment>
       <input type="checkbox"
       
       />
       <span className="checkmark"></span>
   </label>
  </li>))}
     
        </ul>
     
     )
      
         
      }}


export default TripDates

/*{tripDates.map((date)=> (
  <li key= {date}>

  <label className="labelContainer"><Moment format= "MMM/DD">{date}</Moment>
       <input type="checkbox"
       
       />
       <span className="checkmark"></span>
   </label>
  </li>))}*/
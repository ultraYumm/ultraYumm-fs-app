import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';




class TripDates extends Component {

  static defaultProps = {
    tripDates:  [""],
  }
  
     
  render() {
      
  const tripDates = this.props.tripDates
  

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


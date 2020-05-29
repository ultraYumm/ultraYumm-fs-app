import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';




class TripYear extends Component {

  render() {
  
    const selectedTrip = this.props.selectedTrip
    const tripDay1 = selectedTrip[0].trip_dates[0]
   
    return (
        <div className = "montebello white"><Moment format= "YYYY">{tripDay1}</Moment></div>
   )}
  
}
  

export default TripYear
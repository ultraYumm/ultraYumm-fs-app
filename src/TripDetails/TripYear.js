import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';




class TripYear extends Component {

  render() {
  
    const selectedTrip = this.props.selectedTrip
    console.log(selectedTrip)
    const tripDay1 = selectedTrip[0].trip_dates[0]
    console.log(tripDay1)
  
    return (
        <div><Moment format= "YYYY">{tripDay1}</Moment></div>
   )}
  
}
  

export default TripYear
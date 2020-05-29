import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripName extends Component {

  render() {
  
    const selectedTrip = this.props.selectedTrip
    const tripName = selectedTrip[0].name
  
    return (
        <div className = "white">{tripName}</div>
   )}
  
}
  

export default TripName
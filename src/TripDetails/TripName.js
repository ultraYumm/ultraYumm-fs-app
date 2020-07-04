import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import { TRIPS } from "../Defaults"




class TripName extends Component {

  render() {
  
    const selectedTrip = this.props.selectedTrip
   
  
    return (
        <div>{!selectedTrip[0]?TRIPS[0].name : selectedTrip[0].name}</div>
   )}
  
}
  

export default TripName
import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';
import { TRIPS } from "../Defaults"




class TripYear extends Component {

  render() {
  
    const selectedTrip = this.props.selectedTrip
    console.log(selectedTrip)
    

    const tripYear = <Moment format= "YYYY">{!selectedTrip[0]? "" : selectedTrip[0].trip_dates.toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(',')[0]}</Moment>
   
  
    return (
        <div className= "montebello">{selectedTrip[0].id === 1 | selectedTrip[0].trip_dates === "{}" ? "" : tripYear}</div>
   )}
  
}
  

export default TripYear
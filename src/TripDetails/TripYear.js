import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';
import { TRIPS } from "../Defaults"




class TripYear extends Component {

  static defaultProps = {
    selectedTrip: TRIPS[0]
  }

  render() {
  
    const selectedTrip = this.props.selectedTrip
    console.log(selectedTrip)

    

    const tripYear = <Moment format= "YYYY">{selectedTrip.trip_dates[0].toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(',')[0]}</Moment>
   
  
    return (
        <div className= "montebello">{
          !selectedTrip| 
          !selectedTrip.trip_dates |
          !selectedTrip.trip_dates[0] | 
          selectedTrip.trip_dates[0] === "" |
          selectedTrip.trip_dates === "{}" | 
          selectedTrip.trip_dates[0] === {} | 
          selectedTrip.trip_dates[0] === undefined |
          selectedTrip.trip_dates[0] === "{}" |
          selectedTrip.trip_dates === {} |
          selectedTrip.trip_dates[0] === TRIPS[0].trip_dates[0]? "" : tripYear}</div>
  )
    }

  }
    export default TripYear;
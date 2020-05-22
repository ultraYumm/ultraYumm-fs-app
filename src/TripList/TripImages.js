import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import './TripNav.css';



class TripImages extends Component {

  
  render() {

    const trips = this.props.trips
    const tripImages =  trips.map ((trip, key) => trip.iframe)    
    
    
       
    return (
       
        <iframe className= "tripImage" title= "trip url link" src= {tripImages}></iframe>
        
   )}
  
}
  

export default TripImages
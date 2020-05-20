import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import './TripNav.css';



class TripNav extends Component {

  
  render() {

    const trips = this.props.trips
       
    return (
        <section className = "tripSection">
         <h2 className= "montebello">My trips!</h2>
            <ul className= "trips">
              
                {trips.map ((trip) => <li className= "trips tripLi"><iframe className= "tripImage" src= {trip.iframe}></iframe>
                <p 
                className = "trip"
                key = {trip.id}
                
                >{trip.name}</p></li>)}     
             </ul>
        </section>
        
   )}
  
}
  

export default TripNav
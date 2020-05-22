import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import './TripNav.css';

import TripImages from './TripImages';




class TripNav extends Component {

  
  render() {

    const trips = this.props.trips
    
    
       
    return (
      <section className = "tripSection">
       <h2 className= "montebello">My trips!</h2>
          <ul className= "trips">
            
              {trips.map ((trip, key) => 
              <li className= "trips tripLi"
             key = {key}
             ><iframe className= "tripImage" title= "trip url link" src= {trip.iframe}></iframe>
              <p 
              className = "trip"
              >{trip.name}</p>
              </li>)}     
           </ul>
      </section>
        
   )}
  
}
  

export default TripNav


   


  /*return (
   <section className = "tripSection">
    <h2 className= "montebello">My trips!</h2>
       <ul className= "trips">      
           <li className= "trips tripLi">
              <TripImages
               trips= {trips}>
              </TripImages>
              <TripNames
              trips= {trips}>  
              </TripNames>
           </li>     
        </ul>
   </section>
   
)*/
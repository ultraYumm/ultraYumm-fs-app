import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import './TripNav.css';
import { NavLink} from 'react-router-dom'
import { TRIPS } from "../Defaults";



class TripNav extends Component {


   static defaultProps = {
      trips: TRIPS,
    };




  
  render() {

    const trips = this.props.trips
    const getTrips = this.props.getTrips
  
    
    
       
    return (
      <section className = "tripSection"
      onMouseOver = {getTrips}>
       
       <h2 className= "montebello"><i className ="fas fa-shoe-prints"></i> My trips!</h2>
          <div className = "tripContainer">
          <ul className= "trips blueBackground">
            
              {trips.map ((trip, key) => 
              <li className= "tripLi"
             key = {key}
             ><iframe className= "tripImage" title= "trip url link" src= {trip.iframe}></iframe>
             <NavLink to={`/trip/${trip.name}`}>
              <div
              className = "trip skin"
              onClick={() => {
                 const selectTripId = trip.id
                 const tripName = trip.name
                 this.props.handleSelectTrip(selectTripId, tripName)
               
               }}
              
              >{trip.name}
                
              </div>
              </NavLink>
              </li>
              
              )}
      
           </ul>
           </div>
      
      </section>
        
   )}
  
}
  

export default TripNav


/*onClick={() => console.log()}*/
              
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
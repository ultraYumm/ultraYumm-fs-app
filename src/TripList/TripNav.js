import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import './TripNav.css';
import { NavLink} from 'react-router-dom'

class TripNav extends Component {

  
  render() {

    const trips = this.props.trips
    
    
       
    return (
      <section className = "tripSection">
       
       <h2 className= "montebello">My trips!</h2>
          <ul className= "trips skinBackground">
            
              {trips.map ((trip, key) => 
              <li className= "tripLi"
             key = {trip.id}
             ><iframe className= "tripImage" title= "trip url link" src= {trip.iframe}></iframe>
               <NavLink to={`/trip/${trip.name}`}>
              <p 
              className = "trip red"
              >{trip.name}</p>
              </NavLink>
              

              </li>
              
              )}
           
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
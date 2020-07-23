import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import './TripNav.css';
import { NavLink} from 'react-router-dom'
import { TRIPS } from "../Defaults";
import DeleteButton from "../FormElements/DeleteButton";
import Delete from "../ItemDetails/Delete";
import DeleteHeader from "../Tables/DeleteHeader";
import config from "../config";
import { Auth } from 'aws-amplify';





class TripNav extends Component {


   static defaultProps = {
      trips: TRIPS,
    };

    constructor(props) {
      super(props);
      this.state = {
        idToDelete: "",
        nameOfDelete: "",
      };
    }


  componentDidMount () { Auth.currentAuthenticatedUser().then(user => {

    let id = user.attributes.sub
    let username = user.username

    this.props.getUser(id, username)
   
  });

    }

    
    selectItemToDelete = (id, name) => {
    
      this.setState({
        idToDelete: id,
        nameOfDelete: name
      });
      
    };

   



  
  render() {

    const trips = this.props.trips
   
    const getTrips = this.props.getTrips
  
       
    return (
      <section className = "tripSection"
      onMouseOver = {getTrips}>
       
       <h2 className= "montebello"><i className ="fas fa-shoe-prints"></i>{trips.length === 0? "No trips yet!" :  "My trips!"}</h2>
          
      

        <div className="iconButtonContainer">
      

             <DeleteButton
            name = {this.state.nameOfDelete}
            idToDelete = {this.state.idToDelete}
          
            handleDeleteItem = {(idToDelete) =>
              this.props.handleDeleteTrip(idToDelete)
            
            }
           endpoint = {config.endpointT}
             />

          <NavLink
          to={`/add-trip`}
          className = "noDeco bold goTo black"><i className="fas fa-seedling"></i>
            plan a trip
            </NavLink> 

          </div>

          
          <div className = "tripContainer ">
          <ul className= "trips blueBackground ">
            
            
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
              
             
             
              <div className = "navDelete whiteBackground">
              <NavLink to={`/edit-trip/${trip.name}`}>
              <div className = "navEdit white">edit</div>
              </NavLink>

              <NavLink to={`/add-trip/${trip.name}`}>
              <div className = "navCopy white">copy</div>
              </NavLink>
              
              
          <DeleteHeader/>
       
        
       
            
              <Delete
                  idToDelete = {(id, name) => this.selectItemToDelete(id, name)}
                  id = {trip.id}
                  name = {trip.name}
                 
                 
                  /></div>
              
              </li>

              
              
              )}
      
           </ul>
           </div>
      
      </section>
        
   )}
  
}
  

export default TripNav


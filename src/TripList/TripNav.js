import React, { Component } from 'react';
import '../Font/Font.css';
import '../Tables/Tables.css';
import '../NavHome/Home.css';
import '../FormElements/FormElements.css';
import './TripNav.css';
import { NavLink} from 'react-router-dom'
import { TRIPS } from "../Defaults";
import DeleteButton from "../FormElements/DeleteButton";
import Delete from "../ItemDetails/Delete";

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
        <NavLink
          to={`/add-trip`}
          className = "noDeco bold goTo dark plan"><i className="fas fa-seedling"></i>
            plan a trip
            </NavLink> 
      
            <span className={ this.state.idToDelete === "" ?  ' invisible'  : ' visible'}>
             <DeleteButton
            name = {this.state.nameOfDelete}
            idToDelete = {this.state.idToDelete}
          
            handleDeleteItem = {(idToDelete) =>
              this.props.handleDeleteTrip(idToDelete)
            
            }
           endpoint = {config.endpointT}
             />
</span>
        

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
              
              >{trip.name} results
              </div>
              </NavLink>
              
              
             
           
              <ul className = "navActions whiteBackground"
              onMouseOver={() => {
                const selectTripId = trip.id
                const tripName = trip.name
                this.props.handleSelectTrip(selectTripId, tripName)
              
              }}>
                  <NavLink to={`/edit-trip/${trip.name}`}
              >
              <li className = "navEdit lightBlue noDeco">
            edit settings
              </li>
              
              </NavLink>

              <li className = "navDelete black" ><span className = "navDelete deleteIcon">
              <i className ="fas fa-trash-alt" alt= "delete header"></i></span>
              <table>
              <tbody>
                <tr>

              <Delete
                  idToDelete = {(id, name) => this.selectItemToDelete(id, name)}
                  id = {trip.id}
                  name = {trip.name}
                  />
                   </tr>
                  </tbody>
                  </table>
                 
                  </li></ul>
                  
              
              </li>

              
              
              )}
      
           </ul>
           </div>
      
      </section>
        
   )}
  
}
  

export default TripNav


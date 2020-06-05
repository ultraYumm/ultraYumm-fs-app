import React, { Component } from 'react';
import '../Font/Font.css';
import BackButton from '../FormElements/BackButton';
import FilterButton from '../FormElements/FilterButton';
import ResetButton from '../FormElements/ResetButton';
import TripDates from '../TripDetails/TripDates';
import TripItemType from '../TripDetails/TripItemType';
import UniqueTripItems from '../TripDetails/TripItems';
import TripTravelers from '../TripDetails/TripTravelers';
import TripName from '../TripDetails/TripName';
import TripYear from '../TripDetails/TripYear';
import { NavLink, Link} from 'react-router-dom'
import '../FormElements/FormElements.css';



class TripFilterForm extends Component {

  
  render() {

    
    const onSubmitForm = (e) => {
     
    }

    const selectedTrip = this.props.selectedTrip
    const selectedTripItems = this.props.selectedTripItems
    const tripItems = this.props.tripItems


    return (
 
      
      <section className= "filterForm">
        
        <form id="filter" onSubmit={onSubmitForm}>
        
        <BackButton
        />
  
         

         <h2 className= "montebello">

           <TripName
          selectedTrip = {selectedTrip}
          ></TripName>
          <TripYear
          selectedTrip = {selectedTrip}
          ></TripYear>
          
          
          </h2>
         
            <div className= "filterButtonContainer" >
            <NavLink to={`/trip/${selectedTrip[0].name}`}>
            <FilterButton></FilterButton>
            </NavLink>
            <ResetButton></ResetButton>
            </div>

            <div className= "filterContainer">
              <h3 className = "filterCategory">Dates</h3>
              <TripDates
              selectedTrip = {selectedTrip}
              ></TripDates>
              
              <h3 className= "filterCategory">Type</h3>
              <TripItemType
              selectedTripItems= {selectedTripItems}        
              >           
              </TripItemType>

              <h3 className= "filterCategory">Item</h3>
              <UniqueTripItems
              tripItems = {tripItems}
                ></UniqueTripItems>
              
              <h3 className = "filterCategory">Tavelers</h3>
              <TripTravelers
              selectedTrip = {selectedTrip}       
              ></TripTravelers>
            </div>

        </form>
      </section>

        
   )}
  
}
  

export default TripFilterForm
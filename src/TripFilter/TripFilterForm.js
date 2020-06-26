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
import { NavLink } from 'react-router-dom'
import '../FormElements/FormElements.css';
//import { selectTrip } from '../Defaults';



class TripFilterForm extends Component {

  
  render() {

    
    const onSubmitForm = (e) => {
     
    }

    
    const selectedTrip = this.props.selectedTrip
    console.log(selectedTrip)
    const tripDates = selectedTrip[0].trip_dates
    const tripTravelers = selectedTrip[0].traveler_names
    const selectedTripItems = this.props.selectedTripItems
    const tripItems = this.props.tripItems
    


    return (

      <section className= "filterForm">
        <form id="filter" onSubmit={onSubmitForm}>
        <BackButton
        />
         <h2 className= "montebello">
           <TripName
          selectedTrip = {selectedTrip}/>
          <TripYear
          selectedTrip = {selectedTrip}
          />
          </h2>
            <div className= "filterButtonContainer" >
            <NavLink to={`/trip/${selectedTrip[0].name}`}>
            <FilterButton/>
            </NavLink>
            <ResetButton/>
            </div>
            <div className= "filterContainer">
              <h3 className = "filterCategory">Dates</h3>
              <TripDates
              tripDates = {tripDates}
              />
              
              <h3 className= "filterCategory">Type</h3>
              <TripItemType
              selectedTripItems= {selectedTripItems}        
              />           
              
              <h3 className= "filterCategory">Item</h3>
              <UniqueTripItems
              tripItems = {tripItems}
                />
              
              <h3 className = "filterCategory">Travelers</h3>
              <TripTravelers
              tripTravelers= {tripTravelers}  
              />
            </div>

        </form>
      </section>

        
   )}
  
}
  

export default TripFilterForm
import React, { Component } from 'react';
import '../Font/Font.css';
import config from '../config'
import FilterButton from '../FormElements/FilterButton';
import ResetButton from '../FormElements/ResetButton';
import TripDates from '../TripDetails/TripDates';
import TripItemType from '../TripDetails/TripItemType';
import TripItems from '../TripDetails/TripItems';
import TripTravelers from '../TripDetails/TripTravelers';
import TripName from '../TripDetails/TripName';

import '../FormElements/FormElements.css';



class TripFilterForm extends Component {

  
  render() {

    
    const onSubmitForm = (e) => {
     
    }

    const selectedTrip = this.props.selectedTrip
    const selectedTripItems = this.props.selectedTripItems
    const tripItems = this.props.tripItems

    return (
      <div className= "filterForm">
        <form id="filter" onSubmit={onSubmitForm}>

         <h2 className= "montebello"><TripName
          selectedTrip = {selectedTrip}
          ></TripName></h2>
         
            <div className= "filterButtonContainer" >
            <FilterButton></FilterButton>
            <ResetButton></ResetButton>
            </div>

            <div className= "filterContainer">
              <TripDates
              selectedTrip = {selectedTrip}
              ></TripDates>
              
              <TripItemType
              selectedTripItems= {selectedTripItems}        
              >           
              </TripItemType>
              
              <TripItems
              tripItems = {tripItems}
                ></TripItems>
              
              <TripTravelers
              selectedTrip = {selectedTrip}       
              ></TripTravelers>
            </div>

        </form>
      </div>
        
   )}
  
}
  

export default TripFilterForm
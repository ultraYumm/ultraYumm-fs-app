import React, { Component } from 'react';
import '../Font/Font.css';
import config from '../config'
import FilterButton from '../FormElements/FilterButton';
import ResetButton from '../FormElements/ResetButton';
import TripDates from '../TripDetails/TripDates';
import TripItemType from '../TripDetails/TripItemType';
import TripItems from '../TripDetails/TripItems';
import TripTravelers from '../TripDetails/TripTravelers';

import '../FormElements/FormElements.css';



class TripFilterForm extends Component {

  
  render() {

    
    const onSubmitForm = (e) => {
     
    }

    const selectedTrip = this.props.selectedTrip
    const selectedTripItems = this.props.selectedTripItems
    const tripItems = this.props.tripItems

    return (
        <form id="filter" className= "filter" onSubmit={onSubmitForm}>

         <h2 className= "montebello">Escalante</h2>
         
          <FilterButton></FilterButton>
          <ResetButton></ResetButton>

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
        
   )}
  
}
  

export default TripFilterForm
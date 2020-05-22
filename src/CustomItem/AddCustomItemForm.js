import React, { Component } from 'react';
import '../Font/Font.css';
import config from '../config'
import SaveButton from '../FormElements/SaveButton';
import ResetButton from '../FormElements/ResetButton';
import TripDates from '../TripDetails/TripDates';
import ItemTypes from './ItemTypes';
import TripTravelers from '../TripDetails/TripTravelers';
import TripNames from './TripNames';
import NewItemName from './NewItemName';
import NewItemBrand from './NewItemBrand';

import '../FormElements/FormElements.css';



class AddCustomItemForm extends Component {

  
  render() {

    
    const onSubmitForm = (e) => {
     
    }

    const trips = this.props.trips
    const selectedTrip = this.props.selectedTrip
    const itemTypes = this.props.itemTypes
    
    return (
      <div className= "filterForm">
        <form id="filter" onSubmit={onSubmitForm}>

         <h2 className= "montebello">Custom Item</h2>
         
            <div className= "filterButtonContainer" >
            <SaveButton></SaveButton>
            <ResetButton></ResetButton>
            </div>
            <p>
                <NewItemName></NewItemName>
                <NewItemBrand></NewItemBrand>

            </p>

           




            <div className= "filterContainer">

              <TripNames
                trips = {trips}       
              ></TripNames> 

              <TripDates
              selectedTrip = {selectedTrip}
              ></TripDates>
              
              
              <ItemTypes
              itemTypes = {itemTypes}
              ></ItemTypes>
              
            
              <TripTravelers
              selectedTrip = {selectedTrip}       
              ></TripTravelers>
            </div>

        </form>
      </div>
        
   )}
  
}
  

export default AddCustomItemForm
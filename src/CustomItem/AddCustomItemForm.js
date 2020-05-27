import React, { Component } from 'react';
import '../Font/Font.css';
import SaveButton from '../FormElements/SaveButton';
import ResetButton from '../FormElements/ResetButton';
import TripDates from '../TripDetails/TripDates';
import ItemTypes from './ItemTypes';
import TripTravelers from '../TripDetails/TripTravelers';
import TripNames from './TripNames';
import NewItemName from './NewItemName';
import NewItemBrand from './NewItemBrand';
import Quant from './Quant';
import Text from './Text';

import '../FormElements/FormElements.css';
import '../Font/Font.css';


class AddCustomItemForm extends Component {

  
  render() {

    
    const onSubmitForm = (e) => {
     
    }

    const trips = this.props.trips
    const selectedTrip = this.props.selectedTrip
    const itemTypes = this.props.itemTypes

    const totalWeight = 20
    const totalCal = 200
    
    return (
      <div className= "filterForm">
        <form id="filter" onSubmit={onSubmitForm}>

         <h2 className= "montebello">Custom Item</h2>
         
          <div className= "filterButtonContainer" >
          <SaveButton></SaveButton>
          <ResetButton></ResetButton>
          </div>
        
          <div>
                <NewItemName></NewItemName>
                <NewItemBrand></NewItemBrand>
            

              <div className = "calcBox">

               <div className= "inputsContainer">
             
                <div className = "inputBox">
                <label htmlFor= "custom-item-quantity" className= "labelWidth">Serving Quantity</label>
                <p className= "dataInput"><Quant></Quant></p>
                </div>

                <div className = "inputBox">
                <label htmlFor= "custom-item-unit" className= "labelWidth">Serving unit</label>
                <p className= "textInput"><Text></Text></p>
                </div>

                <div className = "inputBox">
                <label htmlFor= "custom-item-weight" className= "labelWidth">Weight per serving</label>
                <p className= "dataInput"><Quant></Quant></p>
                </div>

                <div className = "inputBox">
                <label htmlFor= "custom-item-calories" className= "labelWidth">Calories per serving</label>
                <p className= "dataInput"><Quant></Quant></p>
                </div>

                </div>

               <div className= "resultsContainer">
                <div className = "resultBox">
                <label htmlFor= "custom-item-total-weight" className= "labelWidth">Total Weight</label>
                <p className= "dataResult blackBackground white">{totalWeight}</p>
                </div>

                <div className = "resultBox">
                <label htmlFor= "custom-item-total-cal" className= "labelWidth">Total Calories</label>
                <p className= "dataResult blackBackground white">{totalCal}</p>
                </div>

              </div>
             </div>

          </div>

          <div className= "filterContainer">
          
            <h3 className = "filterCategory">Trip</h3>
            <TripNames
              trips = {trips}       
            ></TripNames> 
          
            <h3 className = "filterCategory">Dates</h3>
            <TripDates
            selectedTrip = {selectedTrip}
            ></TripDates>
            
            <h3 className = "filterCategory">Type</h3>           
            <ItemTypes
            itemTypes = {itemTypes}
            ></ItemTypes>
            
            <h3 className = "filterCategory">Traveler</h3>                        
            <TripTravelers
            selectedTrip = {selectedTrip}       
            ></TripTravelers></div>
          
        </form>
      </div>
        
   )}
  
}
  

export default AddCustomItemForm
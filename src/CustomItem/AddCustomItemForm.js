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
import { NavLink} from 'react-router-dom'

import '../FormElements/FormElements.css';
import '../Font/Font.css';


class AddCustomItemForm extends Component {

  
  render() {

    
    const onSubmitForm = (e) => {
     
    }

    const trips = this.props.trips
    const selectedTrip = this.props.selectedTrip
    const itemTypes = this.props.itemTypes
    const tripName = this.props.tripName

    const totalWeight = 20
    const totalCal = 200
    
    return (
      <section className= "filterForm">
        <form id="filter" onSubmit={onSubmitForm}>

         <h2 className= "montebello white">Custom Item</h2>
         
          <div className= "filterButtonContainer" >
          <NavLink to={`/trip/${selectedTrip[0].name}`}>
          <SaveButton/>
          </NavLink>
          <ResetButton></ResetButton>
          </div>
        
          <div>
               <div className= "newItems">
                <NewItemName></NewItemName>
               </div>
               <div className= "newItems">
               <NewItemBrand></NewItemBrand>
               </div>
            

              <div className = "calcBox">

               <div className= "inputsContainer">
             
                <div className = "inputBox">
                <label htmlFor= "custom-item-quantity" className= "labelWidth white">Serving Quantity</label>
                <p className= "dataInput"><Quant></Quant></p>
                </div>

                <div className = "inputBox">
                <label htmlFor= "custom-item-unit" className= "labelWidth white">Serving unit</label>
                <p className= "textInput"><Text></Text></p>
                </div>

                <div className = "inputBox">
                <label htmlFor= "custom-item-weight" className= "labelWidth white">Weight per serving</label>
                <p className= "dataInput"><Quant></Quant></p>
                </div>

                <div className = "inputBox">
                <label htmlFor= "custom-item-calories" className= "labelWidth white">Calories per serving</label>
                <p className= "dataInput"><Quant></Quant></p>
                </div>

                </div>

               <div className= "resultsContainer">
                <div className = "resultBox">
                <label htmlFor= "custom-item-total-weight" className= "labelWidth white">Total Weight</label>
                <p className= "dataResult blackBackground white">{totalWeight}</p>
                </div>

                <div className = "resultBox">
                <label htmlFor= "custom-item-total-cal" className= "labelWidth white">Total Calories</label>
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
      </section>
        
   )}
  
}
  

export default AddCustomItemForm
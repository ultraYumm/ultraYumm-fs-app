import React, { Component } from 'react';
import '../Font/Font.css';
import config from '../config'
import GoButton from '../FormElements/GoButton';

import TripName from '../TripDetails/TripName';
import TripDates from '../TripDetails/TripDates';
import TripItems from '../TripDetails/TripItems';
import ItemTypes from '../CustomItem/ItemTypes';
import TripTravelers from '../TripDetails/TripTravelers';
import TripYear from '../TripDetails/TripYear';
import Moment from 'react-moment';
import SaveButton from '../FormElements/SaveButton';
import ResetButton from '../FormElements/ResetButton';
import PrintButton from '../FormElements/PrintButton';
import AddCustomButton from '../FormElements/AddCustomButton';
import SearchMoreButton from '../FormElements/SearchMoreButton';
import TripPackGraph from '../TripDetails/TripPackGraph';



import './Tables.css';


class Results extends Component {

    render() {

    const selectedTrip = this.props.selectedTrip
    const selectedTripItems = this.props.selectedTripItems

    const tripItems = this.props.tripItems
    console.log(tripItems)

    const imageArray = tripItems.map((items) => items.image)

    const nameArray = tripItems.map((items) => items.food_name)

    const brandArray = tripItems.map((items) => items.brand)

    const fixedUnitArray = tripItems.map((items) => items.serving_unit)

    const fixedCalPerUnitArray = tripItems.map((items) => items.calPerServing)

    console.log(fixedUnitArray)

    const servingWeightArray = tripItems.map((items) => items.serving_weight_grams)

       
   const itemTypes = this.props.itemTypes  

   const results = selectedTripItems.map((item,i) => {
    
           const name = nameArray[i]

           const image = imageArray[i]

           const brand = brandArray[i]

           const fixedUnit = fixedUnitArray[i]

           const calPerServing = fixedCalPerUnitArray[i]

           const weightPerServing = servingWeightArray[i]

           const resultsObject = {image, name, brand,fixedUnit,weightPerServing,calPerServing,...item}
        
           return resultsObject

        })

    return (

      <form>      
       <div>
           <h2 className= "montebello">
            <span className= "resultsTitle montebello">
                <TripName
                selectedTrip = {selectedTrip}
                ></TripName></span>
            <span className= "resultsTitle"> 
                <TripYear
                selectedTrip = {selectedTrip}
                ></TripYear>
            </span>
           </h2>
           <TripPackGraph></TripPackGraph>
       </div> 
        
       <div className= "filterButtonContainer" >
            <SaveButton></SaveButton>
            <PrintButton></PrintButton>
            <ResetButton></ResetButton>
             </div>
    
        <div className= "filterButtonContainer moreContainer">   
                <AddCustomButton></AddCustomButton>    
               <SearchMoreButton></SearchMoreButton>
        </div>   
           

          <table id= "results-filtered" className= "primaryFont">              
                  
            <tr className= "blueBackground white">
              <th className= "imageH hidden"></th>
              <th className= "date">Date (ajdust)
              </th>
              <th className= "type">Type (adjust)
              </th>
              <th className= "traveler">Traveler (adjust)</th>
              <th className= "itemH">Item</th>
              <th className= "brandH hidden">Brand</th>
              <th className= "servingH">Serving Quantity (adjust)</th>
              <th className= "unitH">Unit</th>
              <th className= "weightH tooltip gram">Weight (grams)</th>
              <th className= "caloriesH cal calS">Calories</th>
              <th className= "deleteH">Delete</th>
             </tr>

            {results.map((item)=> (

            <tr className= "one whiteBackground black" key= {item}>
              
            <td className= "imageH hidden"><img className= "tableImage" src={item.image} alt= "Item image"/> </td>
            
            
      
            <td className= "date">
            <Moment format= "ddd-MMM-DD">
            {item.tripDay}</Moment>
            <div className= "tableScroll">         <TripDates
              selectedTrip = {selectedTrip}
              ></TripDates></div>
            </td>

            <td className= "type">
            {item.type}
            <div className= "tableScroll">         
            <ItemTypes
             itemTypes = {itemTypes}    
              ></ItemTypes></div>        
            </td>
            
            <td className= "traveler">            {item.travName}
            <div className= "tableScroll">   
            <TripTravelers
              selectedTrip = {selectedTrip}
              ></TripTravelers></div>
            </td>
            
            <td className= "itemH">
            {item.name}
             </td>
          
            <td className= "brandId hidden">
            {item.brand}
            </td>

            <td className= "servingH">
                {item.selected_serving_qty}
                <input type="number" className = "adjust" min="0" step="0.1"/></td>
              

            <td className= "unitH"> {item.fixedUnit}
                </td>                
                
            <td className= "weightH">{item.selected_serving_qty*item.weightPerServing    
            }</td>
    
            <td className="caloriesH tooltip cal calS">{(item.selected_serving_qty*item.calPerServing).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')    
            }</td>

            <td className ="delete">  <input type="checkbox" className = "delete"/>
                </td>
                    
          </tr>
            ))} 

          
        </table>
        
    </form>

         
   )}
  
}




export default Results
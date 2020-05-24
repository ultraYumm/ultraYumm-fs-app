import React, { Component } from 'react';
import '../Font/Font.css';
import config from '../config'
import GoButton from '../FormElements/GoButton';

import TripName from '../TripDetails/TripName';
import TripDates from '../TripDetails/TripDates';
import TripItems from '../TripDetails/TripItems';
import ItemTypes from '../CustomItem/ItemTypes';
import TripTravelers from '../TripDetails/TripTravelers';
import Moment from 'react-moment';
import './Tables.css';


class Results extends Component {

    render() {

    const selectedTrip = this.props.selectedTrip
    const selectedTripItems = this.props.selectedTripItems

   //console.log(selectedTripItems[0].itemId)
    
    
    const tripItems = this.props.tripItems
    //console.log(tripItems[0].id.image)

    console.log(selectedTripItems)
    //console.log(tripItems)

    const imageArray = tripItems.map((items) => items.image)

    console.log(imageArray)

    const nameArray = tripItems.map((items) => items.food_name)

    console.log(nameArray)

    const brandArray = tripItems.map((items) => items.brand)

    console.log(brandArray)

        
    const itemTypes = this.props.itemTypes
        

    

     const results = selectedTripItems.map((item,i) => {
    
           const name = nameArray[i]

           const image = imageArray[i]

           const brand = brandArray[i]

           const resultsObject = {image, name, brand,...item}
        
           return resultsObject

        })

        console.log(results)

    

    return (

      <form>      
       <h2 className= "montebello"><span className= "white">Results for</span><TripName
          selectedTrip = {selectedTrip}
          ></TripName><span><Moment format= "DD/MM/YYYY">
              
              </Moment></span></h2> 
        <div className= "printRefresh">
          <p className= "montebello button"><a className= "noDeco">Delete selected</a></p>
          
         </div> 

          <table id= "results-filtered">              
                  
            <tr className= "blueBackground white">
              <th className= "imageH"></th>
              <th className= "date">Date (ajdust)
              </th>
              <th className= "type">Type (adjust)
              </th>
              <th className= "traveler">Traveler (adjust)</th>
              <th className= "itemH">Item</th>
              <th className= "brandH">Brand</th>
              <th className= "servingH">Serving Quantity (adjust)</th>
              <th className= "unitH">Unit</th>
              <th className= "weightH tooltip gram">Weight (grams)</th>
              <th className= "caloriesH cal calS">Calories</th>
              <th className= "deleteH">Delete</th>
             </tr>

            {results.map((item)=> (

            <tr className= "one whiteBackground black" key= {item}>
              
            <td className= "imageH"><img className= "tableImage" src={item.image} alt= "Item image"/> </td>
            
            
      
            <td className= "date">
            <Moment format= "ddd-MMM-DD">
            {item.tripDay}</Moment>
              <TripDates
              selectedTrip = {selectedTrip}
              ></TripDates>
            </td>

            <td className= "type">
            {item.type}
            <ItemTypes
             itemTypes = {itemTypes}    
              ></ItemTypes>        
            </td>
            
            <td className= "traveler">
            {item.travName}
            <TripTravelers
              selectedTrip = {selectedTrip}
              ></TripTravelers>
            </td>
            
            <td className= "itemH">
            {item.name}
             </td>
          
            <td className= "brandId">
            {item.brand}
            </td>
    

        
            

            <td className= "servingH">
                {item.selected_serving_qty}
                <input type="number" className = "adjust" min="0" step="0.1"/></td>
              

            <td className= "unitH">unit
                </td>                
                
           
           
            <td className= "weightH">100</td>
            <td className="caloriesH tooltip cal calS">200</td>

            <td className ="delete">  <input type="checkbox" className = "delete"/>
                </td>
                    
          </tr>
            ))} 

          
        </table>
        
    </form>

         
   )}
  
}




export default Results
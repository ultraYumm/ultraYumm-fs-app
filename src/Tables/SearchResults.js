import React, { Component } from 'react';
import '../Font/Font.css';

import TripName from '../TripDetails/TripName';
import TripDates from '../TripDetails/TripDates';
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
import TripCalorieGraph from '../TripDetails/TripCalorieGraph';
import Quant from '../CustomItem/Quant';
import './Tables.css';


class SearchResults extends Component {

  


    render() {

    const common = this.props.common
    const branded = this.props.branded


    console.log(common)
    console.log(branded)


    //console.log(common[0][food_name])

    /*const nameAr = () => {
      common.map(item=> (item[food_name]))
    }*/

    //console.log(nameAr)



    

    return (
    <div></div>

      /*<form>
         
       <div>
           <h2 className= "montebello resultsTitle"> See your highest energy results!
           </h2>
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
            <tbody>             
                  
            <tr className= "blueBackground white">
              <th className= "imageH"></th>
              <th className= "itemH">Item</th>
              <th className= "brandH hidden">Brand</th>
              <th className= "servingH">Serving Quantity</th>
              <th className= "unitH">Unit</th>
              <th className= "weightH tooltip gram">Weight (grams)</th>
              <th className= "caloriesH cal calS">Calories</th>
              <th class= "caloriesH">Calories per 100g</th>
              <th class= "addH">Add to pack</th>
            </tr>

            {common.map((item, key)=> (

            <tr className= "one whiteBackground black" key= {item.itemId}>
              
            <td className= "imageH"><img className= "tableImage" src={item.image} alt= "Item"/> </td>
                                  
            <td className= "itemH">
            {item.food_name}
             </td>
          
            <td className= "brandId">
            {item.brand}
            </td>

            <td className= "servingH">
                {item.serving_qty}
                <Quant></Quant></td>
              

            <td className= "unitH"> {item.serving_unit}
                </td>                
                
            <td className= "weightH">{item.serving_weight_grams
            }</td>
    
            <td className="caloriesH tooltip cal calS">{(item.alPerServing).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')    
            }</td>

            <td className ="delete">  <input type="checkbox" className = "delete"/>
                </td>
                    
          </tr>
            ))} 

          </tbody>
        </table>
        
    </form>*/

         
   )}
  
}




export default SearchResults
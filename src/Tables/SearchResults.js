import React, { Component } from "react";
import "../Font/Font.css";

import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
import PrintButton from "../FormElements/PrintButton";
import AddCustomButton from "../FormElements/AddCustomButton";
import SearchMoreButton from "../FormElements/SearchMoreButton";
import Quant from "../CustomItem/Quant";
import "./Tables.css";
import TripNames from "../CustomItem/TripNames";
import "./Tables.css";
import { NavLink} from 'react-router-dom'
import ItemImage from "../ItemDetails/ItemImage"
import ItemName from "../ItemDetails/ItemName"
import ItemBrand from "../ItemDetails/ItemBrand"
import ServingQuant from "../ItemDetails/ServingQuant"
import ServingUnit from "../ItemDetails/ServingUnit"
import TotalCalories from "../ItemDetails/TotalCalories"
import TotalWeight from "../ItemDetails/TotalWeight"
import CalsPerHg from "../ItemDetails/CalsPerHg"
import CalsPerServing from "../ItemDetails/CalsPerServing"






class SearchResults extends Component {
  static defaultProps = {
    common: [],
    branded: [],
  };
  render() {

    
    const common = this.props.common;
    const branded = this.props.branded;

    const trips = this.props.trips

    /*function compare(a, b){
      if (a < b){return -1;}
      if (a > b){return 1;}
      if (a === b){return 0;}
    }*/

    
    Array.prototype.push.apply(common, branded);

     const commonNutrients = () => {
      var results = common.map((item) => item.full_nutrients);
      return results;
    };

    const nutrients = commonNutrients();

    const commonCalsPerS = () => {
      var results = nutrients.map((nutrient) => {
        var data = nutrient.filter((item) => item.attr_id == 208);
        return data;
      });
      return results;
    };

    const calorieArray = commonCalsPerS();


    const removeNoCalNutrients = () => {
      
      for (let i = 0; i < common.length; i++){
        common[i].full_nutrients = calorieArray[i]
        common[i].calPhG = 
        (!common[i].serving_weight_grams ? 
          Math.round(common[i].full_nutrients[0].value) : 
          Math.round((common[i].full_nutrients[0].value/common[i].serving_weight_grams*100))  
        )
        const replace = '%'
        common[i].itemId = common[i].food_name.replace(replace,'')
        
      }
      return common
    }

    const newBrandCommonArr = (removeNoCalNutrients())  
  

    newBrandCommonArr.sort((b, a) => parseFloat(a.calPhG) - parseFloat(b.calPhG));

    console.log(common)


      

    return (
      
      <section>
      
        <div>
          <h2 className="montebello searchResultsTitle white">
            {" "}
            See your highest energy results!
          </h2>
        </div>

        <div className="filterButtonContainer tableAdjust">
          <SaveButton/>
          <PrintButton/>
          <ResetButton/>
        </div>
        <form>
        <div className="filterButtonContainer moreContainer">

          <NavLink to={`/add-custom`}>  
          <AddCustomButton/>
          </NavLink>  

          <NavLink to={`/`}>     
          <SearchMoreButton/>
          </NavLink>
      </div>
        <table id= "search-results" className="primaryFont">
          <tbody>
            <tr className="blueBackground white">
              <th className="imageH"><span className = "hidden">Image</span></th>
              <th className="itemH">Item<span className ="mobile">(Click)</span></th>
              <th className="brandH">Brand</th>
              <th className="servingH">Serving Quantity <span className ="tableAdjust">(adjust)</span></th>
              <th className="unitH">Unit</th>
              <th className="weightH tooltip gram">Weight (grams)</th>
              <th className="caloriesH cal calS">Calories</th>
              <th className ="caloriesH">Calories per 100g</th>
              <th className ="addH itemH">Add to pack</th>
            </tr>

            {newBrandCommonArr.map((item, key) => (
              <tr className="one whiteBackground black" key={key}>
                <td className="imageH">
                   <ItemImage
                  item = {item}
                  ></ItemImage>
                </td>

                
                <td className="itemH">
                <NavLink 
                to={`/item/${item.itemId}`}
                onClick={() => {
                  const selectedItem = item
                  console.log(selectedItem)
                  this.props.handleSelectedItem(selectedItem)
            
                }}
                >
                  <ItemName
                  name = {item.food_name}/>
                  </NavLink></td>

                

                <td className="brandId">{(!item.brand_name ? "common" : item.brand_name)}</td>

                <td className="servingH">
                  <ServingQuant
                  quant =  {Math.round(item.serving_qty)}
                  />
                  <p className="tableAdjust">
                  <Quant/></p>
                </td>

                <td className="unitH">
                  <ServingUnit
                  unit =  {item.serving_unit}
                  />
                 </td>

                <td className="weightH tooltip gram">
                  {Math.round(item.serving_weight_grams)}
                  <span className="tooltiptext">grams</span>
                  <p className= "tableAdjust dataResult blackBackground white">100</p>
                </td>

                <td className="caloriesH tooltip cal calS">  {Math.round(item.full_nutrients[0].value)}
                <span className="tooltiptext">cal per serving</span>
                <p className="tableAdjust dataResult blackBackground white">100</p>
                </td>

                <td className="caloriesH tooltip calG">
                  {item.calPhG}
                </td>

                <td>
                  <span className = "add">
                  <TripNames
                trips = {trips}     
                />
                </span>
                
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

       </form>
      </section>
    );
  }
}

export default SearchResults;

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


class SearchResults extends Component {
  static defaultProps = {
    common: [],
    branded: [],
  };
  render() {
    
    const common = this.props.common;
    const branded = this.props.branded;

    const trips = this.props.trips

    
    Array.prototype.push.apply(common, branded);

    const calPer100 = (calPerServing, servingWeightg) => {
      if(!servingWeightg){
        var result = Math.round(calPerServing)}
      else {
        var result = Math.round((calPerServing / servingWeightg) * 100)
      }
      ;
      return result;
    };


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
      }
      return common
    }

    const newBrandCommonArr = (removeNoCalNutrients())  
    console.log(newBrandCommonArr)
    

    return (
      <form>
        <div>
          <h2 className="montebello resultsTitle">
            {" "}
            See your highest energy results!
          </h2>
        </div>

        <div className="filterButtonContainer">
          <SaveButton></SaveButton>
          <PrintButton></PrintButton>
          <ResetButton></ResetButton>
        </div>

        <div className="filterButtonContainer moreContainer">
          <AddCustomButton></AddCustomButton>
          <SearchMoreButton></SearchMoreButton>
        </div>

        <table id="results-filtered" className="primaryFont">
          <tbody>
            <tr className="blueBackground white">
              <th className="imageH"></th>
              <th className="itemH">Item</th>
              <th className="brandH">Brand</th>
              <th className="servingH">Serving Quantity (adjust)</th>
              <th className="unitH">Unit</th>
              <th className="weightH tooltip gram">Weight (grams)</th>
              <th className="caloriesH cal calS">Calories</th>
              <th class="caloriesH">Calories per 100g</th>
              <th class="addH">Add to pack</th>
            </tr>

            {newBrandCommonArr.map((item, key) => (
              <tr className="one whiteBackground black" key={key}>
                <td className="imageH">
                  <img
                    className="tableImage"
                    src={item.photo.thumb}
                    alt="Item"
                  />{" "}
                </td>

                <td className="itemH">{item.food_name}</td>

                <td className="brandId">{(!item.brand_name ? "common" : item.brand_name)}</td>

                <td className="servingH">
                  {item.serving_qty}
                  <Quant></Quant>
                </td>

                <td className="unitH"> {item.serving_unit}</td>

                <td className="weightH tooltip gram">
                  {Math.round(item.serving_weight_grams)}
                  <span className="tooltiptext">grams</span>
                </td>

                <td className="caloriesH tooltip cal calS">  {Math.round(item.full_nutrients[0].value)}
                <span class="tooltiptext">cal per serving</span>
                </td>

                <td className="caloriesH tooltip calG">
                  {calPer100(
                    item.full_nutrients[0].value,
                    item.serving_weight_grams
                  )}
                </td>

                <td className= "add"><TripNames
                trips = {trips}     
                
                ></TripNames>
                
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    );
  }
}

export default SearchResults;

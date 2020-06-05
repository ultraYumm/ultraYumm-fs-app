import React, { Component } from "react";
import "../Font/Font.css";
import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
import PrintButton from "../FormElements/PrintButton";
import AddCustomButton from "../FormElements/AddCustomButton";
import SearchMoreButton from "../FormElements/SearchMoreButton";
import "./Tables.css";
import { NavLink } from "react-router-dom";
import TableItemImage from "../ItemDetails/TableItemImage";
import ItemName from "../ItemDetails/ItemName";
import ItemBrand from "../ItemDetails/ItemBrand";
import ServingQuant from "../ItemDetails/ServingQuant";
import ServingUnit from "../ItemDetails/ServingUnit";
import TotalCalories from "../ItemDetails/TotalCalories";
import TotalWeight from "../ItemDetails/TotalWeight";
import CalsPerHg from "../ItemDetails/CalsPerHg";
import CalsPerServing from "../ItemDetails/CalsPerServing";
import ServingWeight from "../ItemDetails/ServingWeight";
import Add from "../ItemDetails/Add";
import { DEFAULTITEM } from "../Defaults";
import ImageHeader from "./ImageHeader"
import ItemHeader from "./ItemHeader"
import BrandHeader from "./BrandHeader";
import ServQuantHeader from "./ServQuantHeader";
import UnitHeader from "./UnitHeader";
import WeightGHeader from "./WeightGHeader";
import TotalCalHeader from "./TotalCalHeader";
import TotalCalsPhgHeader from "./TotalCalsPhgHeader";
import AddHeader from "./AddHeader";
import BackButton from '../FormElements/BackButton';

class SearchResults extends Component {
  static defaultProps = {
    results: {},
    common: [],
    branded: [],
    item:  {DEFAULTITEM},
    thumb: "",
  };
  render() {
 

    const common = this.props.common;
    const branded = this.props.branded;
    const trips = this.props.trips;
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
      for (let i = 0; i < common.length; i++) {
        common[i].full_nutrients = calorieArray[i];
        
        common[i].image = common[i].photo.thumb
        const replace = "%";
        common [i].calsPerServing = common[i].full_nutrients[0].value
        common[i].itemId = common[i].food_name.replace(replace, "");
        common[i].calsPhg = !common[i].serving_weight_grams
          ? Math.round(common[i].full_nutrients[0].value)
          : Math.round(
              (common[i].full_nutrients[0].value /
                common[i].serving_weight_grams) *
                100
            );
      }
      return common;
    };

    const newBrandCommonArr = removeNoCalNutrients();

    newBrandCommonArr.sort(
      (b, a) => parseFloat(a.calsPhg) - parseFloat(b.calsPhg)
    );

    return (
      <section>
        <BackButton/>        
        <div>
          <h2 className="montebello searchResultsTitle white">
            {" "}
            See your highest energy results!
          </h2>
        </div>

        <div className="filterButtonContainer tableAdjust">
          <SaveButton />
          <PrintButton />
          <ResetButton />
        </div>
        <form>
          <div className="filterButtonContainer moreContainer">
            <NavLink to={`/add-custom`}
           >
              <AddCustomButton />
            </NavLink>

            <NavLink to={`/`}>
              <SearchMoreButton />
            </NavLink>
          </div>
          <table id="search-results" className="primaryFont">
            <tbody>
              <tr className="blueBackground white">
                <ImageHeader/>
                <ItemHeader/>
                <BrandHeader/>
                <ServQuantHeader/>
                <UnitHeader/>
                <WeightGHeader/>
                <TotalCalHeader/> 
                <TotalCalsPhgHeader/> 
                <AddHeader/>
              </tr>

              {newBrandCommonArr.map((item, key) => (
                <tr className="one whiteBackground black" key={key}>
               
                    <TableItemImage image = {item.image}/>
                 
                  <td className="itemH">
                    <NavLink
                     className = "noDeco"
                      to={`/item/${item.itemId}`}
                      onClick={() => {
                        const selectedItem = item;
                        this.props.handleSelectedItem(selectedItem);
                      }}
                    >
                      <ItemName 
                      name = {item.food_name} 
                      item = {item}
                      handleSelectedItem = {this.props.handleSelectedItem}/>
                    </NavLink>
                  </td>

                    <ItemBrand
                    brand = {!item.brand_name ? "common" : item.brand_name}
                    />
 
                    <ServingQuant 
                    quant = {Math.round(item.serving_qty)} />
             
                    <ServingUnit unit={item.serving_unit} />
                

                 
                    <ServingWeight
                    weight =  {Math.round(item.serving_weight_grams)}
                    />
                    

                 
                    <CalsPerServing
                    calories =  {Math.round(item.calsPerServing)}
                    />
                   

                 
                    
                    <CalsPerHg
                      calsPHg = {item.calsPhg}
                    />
                

                  <Add trips={trips} />
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


/*<td className="itemH">
<NavLink
 className = "noDeco"
  to={`/item/${item.itemId}`}
  onClick={() => {
    const selectedItem = item;
    this.props.handleSelectedItem(selectedItem);
  }}
>
  <ItemName 
  name = {item.food_name} 
  item = {item}
  handleSelectedItem = {this.props.handleSelectedItem}/>
</NavLink>
</td>*/
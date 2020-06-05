import React, { Component } from "react";
import "../Font/Font.css";
import TripName from "../TripDetails/TripName";
import TripDates from "../TripDetails/TripDates";
import ItemTypes from "../CustomItem/ItemTypes";
import TripTravelers from "../TripDetails/TripTravelers";
import TripYear from "../TripDetails/TripYear";
import Moment from "react-moment";
import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
import PrintButton from "../FormElements/PrintButton";
import AddCustomButton from "../FormElements/AddCustomButton";
import GoToFiltersButton from "../FormElements/GoToFiltersButton";
import SearchMoreButton from "../FormElements/SearchMoreButton";
import TripPackGraph from "../TripDetails/TripPackGraph";
import TripCalorieGraph from "../TripDetails/TripCalorieGraph";
import { NavLink } from "react-router-dom";
import ItemName from "../ItemDetails/ItemName";
import ServingQuant from "../ItemDetails/ServingQuant";
import ServingUnit from "../ItemDetails/ServingUnit";
import ServingWeight from "../ItemDetails/ServingWeight";
import "./Tables.css";
import CalsPerServing from "../ItemDetails/CalsPerServing";
import Delete from "../ItemDetails/Delete";
import ItemHeader from "./ItemHeader"
import ServQuantHeader from "./ServQuantHeader";
import UnitHeader from "./UnitHeader";
import WeightGHeader from "./WeightGHeader";
import TotalCalHeader from "./TotalCalHeader";
import DateHeader from "./DateHeader";
import TypeHeader from "./TypeHeader";
import TravlrHeader from "./TravlrHeader";
import DeleteHeader from "./DeleteHeader";
import BackButton from '../FormElements/BackButton';


class TripResults extends Component {
  static defaultProps = {
    selectedTrip: [],
    
  };

  render() {
    const selectedTrip = this.props.selectedTrip;
    
    console.log(selectedTrip)
    const selectedTripItems = this.props.selectedTripItems;
    const tripItems = this.props.tripItems;
    const imageArray = tripItems.map((items) => items.image);
    const food_nameArray = tripItems.map((items) => items.food_name);
    const brandArray = tripItems.map((items) => items.brand_name);
    const fixedUnitArray = tripItems.map((items) => items.serving_unit);
    const fixedCalPerUnitArray = tripItems.map((items) => items.calsPerServing);
    const selectServingQuantArray = selectedTripItems
      .map((items) => items.selected_serving_qty)
      .sort();
    const fixedServingWeightArray = tripItems.map(
      (items) => items.serving_weight_grams
    );
    const itemTypes = this.props.itemTypes;
    const results = selectedTripItems.map((item, i) => {
    const food_name = food_nameArray[i];
    const image = imageArray[i];
    const brand_name = brandArray[i];
    const fixedUnit = fixedUnitArray[i];
    const calsPerServing = fixedCalPerUnitArray[i];
    const serving_weight_grams = fixedServingWeightArray[i];
    const resultsObject = {
        image,
        food_name,
        brand_name,
        fixedUnit,
        serving_weight_grams,
        calsPerServing,
        ...item,
      };

      return resultsObject;
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumCalsPerServing = () => {
      if (fixedCalPerUnitArray.length === 0) {
        const defaultResult = 1;
        return defaultResult;
      }
      return fixedCalPerUnitArray.reduce(reducer);
    };
    const sumWeightsPerServing = () => {
      if (fixedServingWeightArray.length === 0) {
        const defaultResult = 1;
        return defaultResult;
      }
      return fixedServingWeightArray.reduce(reducer);
    };
    console.log(sumWeightsPerServing());
    const sumServings = () => {
      if (selectServingQuantArray.length === 0) {
        const defaultResult = 1;
        return defaultResult;
      }

      return selectServingQuantArray.reduce(reducer);
    };

    const totalCals = sumCalsPerServing() * sumServings();
    const totalWeightKg = (sumWeightsPerServing() * sumServings()) / 1000;

    return (
      <section className="lightBlueBackground">
        <div className="charts redBackground">
         
          <TripCalorieGraph cals={totalCals}/>
          <TripPackGraph weight={totalWeightKg}/>
        </div>
        <div>
          <h2 className="montebello">
            <span className="resultsTitle montebello white">
              <TripName selectedTrip={selectedTrip}/>Results!
            </span>
            <span className="resultsTitle">
              <TripYear selectedTrip={selectedTrip}/>
            </span>
          </h2>
        </div>
        <form>
          <div className="filterButtonContainer">
          <BackButton/>
            <SaveButton/>
            <PrintButton/>
            <ResetButton/>
          </div>

          <div className="filterButtonContainer moreContainer">
            <NavLink to={`/trip-filter/${selectedTrip[0].food_name}`}>
              <GoToFiltersButton />
            </NavLink>

            <NavLink to={`/add-custom/${selectedTrip[0].food_name}`}>
              <AddCustomButton />
            </NavLink>

            <NavLink to={`/`}>
              <SearchMoreButton />
            </NavLink>
          </div>

          <table id="results-filtered" className="primaryFont">
            <tbody>
              <tr className="blueBackground white">
              
                <DateHeader/>
                <TypeHeader/>
                <TravlrHeader/>
                <ItemHeader/>
                <ServQuantHeader/>
                <UnitHeader/>
                <WeightGHeader/>
                <TotalCalHeader/>
                <DeleteHeader/>
               
              </tr>

              {results.map((item, key) => (
                <tr className="one whiteBackground black" key={item.itemId}>
                

                  <td className="date">
                    <Moment format="ddd-MMM-DD">{item.tripDay}</Moment>
                    <div className="tableScroll tableAdjust add">
                      {" "}
                      <TripDates selectedTrip={selectedTrip}/>
                    </div>
                  </td>

                  <td className="type">
                    {item.type}
                    <div className="tableScroll tableAdjust add">
                      <ItemTypes itemTypes={itemTypes}/>
                    </div>
                  </td>

                  <td className="traveler">
                    {item.travName}
                    <div className="tableScroll tableAdjust add">
                      <TripTravelers
                        selectedTrip={selectedTrip}
                      />
                    </div>
                  </td>

                  <td className="itemH">
                  <NavLink
                  className = "noDeco"
                      to={`/trip-item/${item.itemId}`}

                    onClick={() => {
                    const selectTripItem =  item
                    this.props.handleSelectTripItem(selectTripItem)}}                     
                       >
                      <ItemName 
                      name = {item.food_name} />
                      </NavLink>
                    </td>

                 

                 
                  <ServingQuant 
                    quant = {Math.round(item.selected_serving_qty)} />
                  
                 
                  <ServingUnit unit={item.fixedUnit}/>
                 

                  <ServingWeight
                   weight = {item.selected_serving_qty * item.serving_weight_grams}/>

                  <CalsPerServing
                    calories =
                    {(item.selected_serving_qty * item.calsPerServing)
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}/>
                  <Delete/>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </section>
    );
  }
}

export default TripResults;


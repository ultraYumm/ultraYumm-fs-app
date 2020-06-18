import React, { Component } from "react";
import "../Font/Font.css";
import TripName from "../TripDetails/TripName";
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
import ForwardButton from '../FormElements/ForwardButton';
import { DEFAULTITEM, PACKITEMS } from "../Defaults";
import ItemImage from "../ItemDetails/ItemImage";
import ItemBrand from "../ItemDetails/ItemBrand";
import BrandHeader from "./BrandHeader";
import '../FormElements/FormElements.css';




class TripResults extends Component {
  static defaultProps = {
    selectedTrip: [],
    //packItems: {PACKITEMS}    
  };

  constructor(props) {
    super(props);
    this.state = {
      serving_qty: null,
      id: "",
      //packItems: {PACKITEMS}
    };
  }

  adjustQuant = (input, id) => {
    
    this.setState({
      serving_qty: input,
      id: id,
      trip_dates: [],
      item: {},
      serving_unit: "",
      calsPs: null,
      serving_weight_grams: null,
      tripDay: "",
      type: ""
    });
  };

  selectDay = (input, id) => {
    
    this.setState({
      tripDay: input,
      id: id
    });
  };


  selectType = (input, id) => {
  
    this.setState({
      type: input,
      id: id
    });
  };


  selectTraveler = (input, id) => {
    
    this.setState({
      travName: input,
      id: id
    });
  };
 

  render() {
    const selectedTrip = this.props.selectedTrip;
    console.log(selectedTrip)
    const tripDates = selectedTrip[0].trip_dates
    const tripTravelers = selectedTrip[0].traveler_names
    const selectedTripItems = this.props.selectedTripItems;
    const tripItems = this.props.tripItems;
    const imageArray = tripItems.map((items) => items.image);
    const food_nameArray = tripItems.map((items) => items.food_name);
    const brandArray = tripItems.map((items) => items.brand_name);
    const fixedUnitArray = tripItems.map((items) => items.serving_unit);
    const fixedCalPerUnitArray = tripItems.map((items) => items.calsPerServing);
    const selectServingQuantArray = selectedTripItems
      .map((items) => items.serving_qty)
      .sort();
    const fixedServingWeightArray = tripItems.map(
      (items) => items.serving_weight_grams
    );
    const itemTypes = this.props.itemTypes;
    const results = selectedTripItems.map((item, i) => {
    const food_name = food_nameArray[i];
    const image = imageArray[i];
    const brand_name = brandArray[i];
    const serving_unit = fixedUnitArray[i];
    const calsPerServing = fixedCalPerUnitArray[i];
    const serving_weight_grams = fixedServingWeightArray[i];
    const resultsObject = {
        image,
        food_name,
        brand_name,
        serving_unit,
        serving_weight_grams,
        calsPerServing,
        ...item,
      };

      return resultsObject;
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumCalsPerServing = () => {
      if (fixedCalPerUnitArray.length === 0) {
        const defaultResult = 0;
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
       
        <div className = "lightBlueBackground sticky">
           <div className="charts sticky cloudBlueBackground">
          <TripCalorieGraph cals={totalCals}/>
          <TripPackGraph weight={totalWeightKg}/>
          </div>
        
          <div className = "iconButtonContainer sticky">
        <BackButton/>
        <ForwardButton/>
        </div>
          <h2 className="montebello black sticky resultsTitle">
         
            <div className=" montebello black sticky resultsTitle">
              <TripName selectedTrip={selectedTrip}/>&nbsp;Results!&nbsp; 
              <TripYear selectedTrip={selectedTrip}/>
            </div>
          </h2>
        
       
        <div className="iconButtonContainer">
            <SaveButton/>
            <PrintButton/>
            <ResetButton/>
          </div>

          <div className="filterButtonContainer moreContainer sticky">
            <NavLink 
            className= "hidden" 
            to={`/trip-filter/${selectedTrip[0].food_name}`}>
              <GoToFiltersButton />
            </NavLink>

            <NavLink to={`/add-custom/${selectedTrip[0].food_name}`}>
              <AddCustomButton />
            </NavLink>

            <NavLink to={`/`}>
              <SearchMoreButton />
            </NavLink>
          </div>
          </div>

          <table id="results-filtered" className="primaryFont desk">
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
                <tr className="one whiteBackground black" key={item.id}>
                
                  <td className="date">
                    <Moment format="ddd-MMM-DD">{item.tripDay}</Moment>    
                  </td>

                  <td className="type">
                    {item.type}
                  </td>

                  <td className="traveler">
                    {item.travName}
                  </td>

                  <td className="itemH">
                  <NavLink
                  className = "noDeco"
                      to={`/trip-item/${item.id}`}

                    onClick={() => {
                    const selectTripItem =  item
                    this.props.handleSelectTripItem(selectTripItem)}} 
                       >
                      <ItemName 
                      name = {item.food_name} />
                      </NavLink>
                    </td>
                  <ServingQuant 
                    input = {Math.round(item.serving_qty)}
                    id = {item.id}
                    handleAdjustQuant = {(inputValue, id) =>
                      this.adjustQuant(inputValue, id)
                    }
                    />

                  <ServingUnit unit={item.serving_unit}/>

                  <ServingWeight
                   weight = {item.serving_qty * item.serving_weight_grams}
                   result = {Math.round(this.state.serving_qty * item.serving_weight_grams).toFixed(0)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                   />

                  <CalsPerServing
                    calories =
                    {(item.serving_qty * item.calsPerServing)
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      result = {Math.round(this.state.serving_qty * item.calsPerServing).toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      />
                  <Delete/>
                 
                </tr>
              ))}
            </tbody>
          </table>

          <table id="results-filtered" className="primaryFont whiteBackground mobileOnly">
          {results.map((item, key) => (
          <tbody>
            <tr className = "mobile" key={item.id}>
            <ItemImage image = {item.image}/>
            </tr>

            <tr>   
            <td className="itemH">
                      <NavLink
                      className = "noDeco"
                        to={`/trip-item/${item.id}`}
                        onClick={() => {
                          const selectTripItem =  item
                          this.props.handleSelectTripItem(selectTripItem)}} 
                             >
                      
                        <ItemName 
                        name = {item.food_name} 
                        item = {item}
                        handleSelectedItem = {this.props.handleSelectedItem}/>
                      </NavLink>
            </td>
            </tr>

            <BrandHeader/>
                      <ItemBrand
                      brand = {!item.brand_name ? "common" : item.brand_name}
                      />
            <tr>

            <DateHeader/>
            <td className="date">
                      <Moment format="ddd-MMM-DD">{item.tripDay}</Moment>          
            </td>
            </tr>
            
            <tr>
            <TypeHeader/>
              <td className="type">
                        {item.type}          
              </td>
            </tr>

            <tr>
            <TravlrHeader/>
              <td className="type">
              {item.travName}        
              </td>
            </tr>


            <tr>
              <UnitHeader/>
              <ServingUnit unit={item.serving_unit}/>
            </tr>

            <tr>
            <ServQuantHeader/>
            <ServingQuant 
                      input = {Math.round(item.serving_qty)}
                      id = {item.id}
                      handleAdjustQuant = {(inputValue, id) =>
                        this.adjustQuant(inputValue, id)
                      }
                      />
            </tr>

            <tr>
            <WeightGHeader/>
            <ServingWeight
                    weight = {item.serving_qty * item.serving_weight_grams}
                    result = {Math.round(this.state.serving_qty * item.serving_weight_grams).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />
            </tr>

            <tr>
            <TotalCalHeader/>
            <CalsPerServing
                      calories =
                      {(item.serving_qty * item.calsPerServing)
                        .toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        result = {Math.round(this.state.serving_qty * item.calsPerServing).toFixed(0)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        />
            </tr>

            <tr>
            <DeleteHeader/>
            <Delete/>
            </tr>
          </tbody>
          ))}

          </table>

      </section>
    );
  }
}

export default TripResults;




/*<div className="tableScroll tableAdjust add">
<ItemTypes itemTypes={itemTypes}
handleSelectType={(selectedType) =>
  this.selectType(selectedType)
}
/>
</div>

<div className="tableScroll tableAdjust add hidden">
<TripTravelers
tripTravelers={tripTravelers}
handleSelectTraveler={(selectedTraveler) =>
this.selectTraveler(selectedTraveler)
}
/>
</div>

<div className="tableScroll tableAdjust add">
{" "}
<TripDates tripDates={tripDates}
  handleSelectDay={(selectedDay) =>
  this.selectDay(selectedDay)
  }/>
</div>*/
import "../Font/Font.css";
import "../FormElements/FormElements.css";
import React, { Component } from "react";
import BackButton from "../FormElements/BackButton";

import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
import Text from "../CustomItem/Text";
import UnitQuant from "../CustomItem/UnitQuant";
import WeightQuant from "../CustomItem/WeightQuant";
import CalsQuant from "../CustomItem/CalsQuant";

import WeightResult from "../CustomItem/WeightResult";
import TripNames from "../CustomItem/TripNames";
import "../Tables/Tables.css";
import { NavLink } from "react-router-dom";
import TripDates from "../TripDetails/TripDates";
import ItemTypes from "../CustomItem/ItemTypes";
import TripTravelers from "../TripDetails/TripTravelers";
import NewItemName from "../CustomItem//NewItemName";
import NewItemBrand from "../CustomItem/NewItemBrand";
import ItemImage from "../ItemDetails/ItemImage"
import ServingQuant from "../ItemDetails/ServingQuant"
import ServingUnit from "../ItemDetails/ServingUnit"
import ServingWeight from "../ItemDetails/ServingWeight"
import CalsPerServing from "../ItemDetails/CalsPerServing"


import { DEFAULTITEM } from "../Defaults";


class ItemAdjust extends Component {
  static defaultProps = {
    item:  {DEFAULTITEM},
    selectedTrip: [],
    id: "",
    serving_unit: "",
    calsPs: null,
    serving_qty: null,
    serving_weight_grams: null

  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      selectedTripId: "",
      selectedTrip: {},
      trip_dates: [],
      id: "",
      serving_qty: null,
      item: {},
      serving_unit: "",
      calsPs: null,
      serving_weight_grams: null
    };
  }
 
  selectTrip = (selectedTrip) => {
    const tripName = selectedTrip.name
    const tripDates = selectedTrip.trip_dates
    const tripTravelers = selectedTrip.traveler_names
    this.setState({
      selectedTrip: selectedTrip,    
      name: tripName,
      trip_dates: tripDates,
      traveler_names: tripTravelers
    });
  };

  adjustQuant = (input, id) => {
    
    this.setState({
      serving_qty: input,
      id: id
    });
  };

  adjustUnit = (input, id) => {
    
    this.setState({
      serving_unit: input,
      id: id
    });
  };

  adjustWeight = (input, id) => {
    
    this.setState({
      serving_weight_grams: input,
      id: id
    });
  };

  adjustCals = (input, id) => {
    
    this.setState({
      calsPs: input,
      id: id
    });
  };



  
  render() {
  
    const trips = this.props.trips;      
    const itemTypes = this.props.itemTypes;
    const onSubmitForm = (e) => {};
    const item = this.props.selectedItem;
    console.log(item)
    const image = item.image
    const name = item.food_name;
    const brand = !item.brand_name ? "common" : item.brand_name;
    const quant = Math.round(item.serving_qty);
    const unit = item.serving_unit
    const weight = Math.round(item.serving_weight_grams);
    console.log(weight)
    const calsPs = Math.round(item.calsPerServing);
    const totalWeight = (quant * weight)
    const totalCalnf = (quant * calsPs)
    const totalCal = totalCalnf.toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    const id = item.id

    const stateQty = parseInt(this.state.serving_qty)

    

    const stateServWeight = parseInt(this.state.serving_weight_grams)

   const stateWeight = (stateQty * stateServWeight).toFixed(0)
   .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

    console.log(stateWeight)

    
    return (
      <section className="filterForm">
        <BackButton/>
            <div className= "adjustImage">
            <ItemImage 
            image = {image}
            />
            </div>
        <form id="filter" onSubmit={onSubmitForm}>
          <h2 className="montebello white">Customize your item!</h2>
        

          <div className="filterButtonContainer">
            <NavLink to={`/search-results`}>
              <SaveButton />
            </NavLink>
            <ResetButton/>
            
          </div>

          <div>
            <div className="newItems">
              <NewItemName
              name = {name}
              />
            </div>
            <div className="newItems">
              <NewItemBrand
              brand = {brand}
              />
            </div>

            <div className="calcBox">
              <div className="inputsContainer">
                <div className="inputBox">
                  <label
                    htmlFor="custom-item-quantity"
                    className="labelWidth white"
                  >
                    Serving Quantity
                  </label>
                  <p className="dataInput">
                    <UnitQuant
                    input = {quant}
                    id = {id}
                    handleAdjustQuant = {(inputValue, id) =>
                      this.adjustQuant(inputValue, id)
                    }

                    />
                  </p>
                </div>

                <div className="inputBox">
                  <label
                    htmlFor="custom-item-unit"
                    className="labelWidth white"
                  >
                    Serving unit
                  </label>
                  <p className="textInput">
                    <Text
                    id = {id}
                    input = {unit}
                    handleAdjustUnit = {(inputValue, id) =>
                      this.adjustUnit(inputValue, id)
                    }

                    />
                  </p>
                </div>

                <div className="inputBox">
                  <label
                    htmlFor="custom-item-weight"
                    className="labelWidth white"
                  >
                    Weight per serving
                  </label>
                  <p className="dataInput">
                  <WeightQuant
                    input = {weight}
                    id = {id}
                   handleAdjustWeight = {(inputValue, id) =>
                    this.adjustWeight(inputValue, id)
                  }
                  />
                  </p>

                </div>

                <div className="inputBox">
                  <label
                    htmlFor="custom-item-calories"
                    className="labelWidth white"
                  >
                    Calories per serving
                  </label>
                  <p className="dataInput">
                  <CalsQuant
                  input = {calsPs}
                  id = {id}
                  handleAdjustCals = {(inputValue, id) =>
                   this.adjustCals(inputValue, id)
                 }
                  />

                  </p>
                
                </div>
              </div>

              <div className="resultsContainer">
                <div className="resultBox">
                  <label
                    htmlFor="custom-item-total-weight"
                    className="labelWidth white"
                  >
                    Total Weight
                  </label>
                  <p className="dataResult blackBackground white">
                    <WeightResult
                    const result =
                    {stateWeight}/>
                  </p>
                </div>

                <div className="resultBox">
                  <label
                    htmlFor="custom-item-total-cal"
                    className="labelWidth white"
                  >
                    Total Calories
                  </label>
                  <p className="dataResult blackBackground white">{!totalWeight? 1 : totalCal}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="filterContainer">
    <h3 className="filterCategory">Trip</h3>
            <TripNames 
            trips={trips}
            handleSelectTrip={(selectedTrip) =>
              this.selectTrip(selectedTrip)
            }
            />

            <h3 className="filterCategory">Dates</h3>
            <TripDates 
            tripDates={this.state.tripDates}/>

            <h3 className="filterCategory">Type</h3>
            <ItemTypes itemTypes={itemTypes}/>

            <h3 className="filterCategory">Traveler</h3>
            <TripTravelers tripTravelers={this.state.tripTravelers}/>
          </div>
        </form>
      </section>
    );
  }
}

export default ItemAdjust;


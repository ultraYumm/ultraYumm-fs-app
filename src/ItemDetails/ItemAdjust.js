import "../Font/Font.css";
import "../FormElements/FormElements.css";
import React, { Component } from "react";
import BackButton from "../FormElements/BackButton";

import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
import Quant from "../CustomItem/Quant";
import TripNames from "../CustomItem/TripNames";
import "../Tables/Tables.css";
import { NavLink } from "react-router-dom";
import TripDates from "../TripDetails/TripDates";
import ItemTypes from "../CustomItem/ItemTypes";
import TripTravelers from "../TripDetails/TripTravelers";
import NewItemName from "../CustomItem//NewItemName";
import NewItemBrand from "../CustomItem/NewItemBrand";
import Text from "../CustomItem/Text";
import ItemImage from "../ItemDetails/ItemImage"



import { DEFAULTITEM } from "../Defaults";

class ItemAdjust extends Component {
  static defaultProps = {
    item:  {DEFAULTITEM},
   

  }

  constructor(props) {
    super(props);
    this.state = {
      tripName: "",
      selectedTripId: "",
      selectedTrip: {},
      tripDates: []
    };
  }
 
  selectTrip = (selectedTrip) => {
    const tripName = selectedTrip.name
    const tripDates = selectedTrip.trip_dates
    const tripTravelers = selectedTrip.traveler_names
    this.setState({
      selectedTrip: selectedTrip,    
      tripName: tripName,
      tripDates: tripDates,
      tripTravelers: tripTravelers
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
    const calsPs = Math.round(item.calsPerServing);
    const totalWeight = (quant * weight)
    const totalCalnf = (quant * calsPs)
    const totalCal = totalCalnf.toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

    
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
                    <Quant
                    input = {quant}
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
                    input = {unit}
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
                    <Quant
                    input = {weight}
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
                    <Quant
                    input = {calsPs}/>
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
                    {totalWeight}
                  </p>
                </div>

                <div className="resultBox">
                  <label
                    htmlFor="custom-item-total-cal"
                    className="labelWidth white"
                  >
                    Total Calories
                  </label>
                  <p className="dataResult blackBackground white">{totalCal}</p>
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

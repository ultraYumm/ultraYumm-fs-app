import "../Font/Font.css";
import "../FormElements/FormElements.css";
import React, { Component } from "react";

import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
import PrintButton from "../FormElements/PrintButton";
import AddCustomButton from "../FormElements/AddCustomButton";
import SearchMoreButton from "../FormElements/SearchMoreButton";
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
import ItemName from "../ItemDetails/ItemName"

import { DEFAULTITEM } from "../Defaults";

class ItemAdjust extends Component {
  static defaultProps = {
    item:  {DEFAULTITEM},
  }

  render() {
    const trips = this.props.trips;
    const bla = "blabla"
    const selectedTrip = this.props.selectedTrip;
    const itemTypes = this.props.itemTypes;

    const onSubmitForm = (e) => {};

    const item = this.props.selectedItem;

    const photo = item.photo.thumb;
    console.log(photo)

    const name = item.food_name;

    const brand = !item.brand_name ? "common" : item.brand_name;

    const serving_qty = Math.round(item.serving_qty);

    const weightG = Math.round(item.serving_weight_grams);

    const calPs = Math.round(item.full_nutrients[0].value);

    const calPhG = item.calPhG;

    const totalWeight = 20;
    const totalCal = 200;

    return (
      <section className="filterForm">
            <div className= "adjustImage">
            <ItemImage 
            item = {item}
            />
            </div>
        <form id="filter" onSubmit={onSubmitForm}>
          <h2 className="montebello white">Your custom item</h2>
        

          <div className="filterButtonContainer">
            <NavLink to={`/search-results`}>
              <SaveButton />
            </NavLink>
            <ResetButton></ResetButton>
            
          </div>

          <div>
            <div className="newItems">
              <ItemName
              name = {name}
              ></ItemName>
            </div>
            <div className="newItems">
              <NewItemBrand></NewItemBrand>
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
                    <Quant></Quant>
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
                    <Text></Text>
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
                    <Quant></Quant>
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
                    <Quant></Quant>
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
            <TripNames trips={trips}></TripNames>

            <h3 className="filterCategory">Dates</h3>
            <TripDates selectedTrip={selectedTrip}></TripDates>

            <h3 className="filterCategory">Type</h3>
            <ItemTypes itemTypes={itemTypes}></ItemTypes>

            <h3 className="filterCategory">Traveler</h3>
            <TripTravelers selectedTrip={selectedTrip}></TripTravelers>
          </div>
        </form>
      </section>
    );
  }
}

export default ItemAdjust;

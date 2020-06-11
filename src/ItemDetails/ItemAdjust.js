import "../Font/Font.css";
import "../FormElements/FormElements.css";
import React, { Component } from "react";
import BackButton from "../FormElements/BackButton";

import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
import ServUnit from "../CustomItem/ServUnit";
import UnitQuant from "../CustomItem/UnitQuant";
import WeightQuant from "../CustomItem/WeightQuant";
import CalsQuant from "../CustomItem/CalsQuant";

import WeightResult from "../CustomItem/WeightResult";
import CalResult from "../CustomItem/CalResult";


import TripNames from "../CustomItem/TripNames";
import "../Tables/Tables.css";
import { NavLink } from "react-router-dom";
import TripDates from "../TripDetails/TripDates";
import ItemTypes from "../CustomItem/ItemTypes";
import TripTravelers from "../TripDetails/TripTravelers";
import NewItemName from "../CustomItem//NewItemName";
import NewItemBrand from "../CustomItem/NewItemBrand";
import ItemImage from "../ItemDetails/ItemImage"
import Moment from 'react-moment';
import ServingQuant from "../ItemDetails/ServingQuant"
import ServingUnit from "../ItemDetails/ServingUnit"
import ServingWeight from "../ItemDetails/ServingWeight"
import CalsPerServing from "../ItemDetails/CalsPerServing"


import { DEFAULTITEM, PACKITEMS, IMAGE } from "../Defaults";


class ItemAdjust extends Component {
  static defaultProps = {
    item:  {DEFAULTITEM},
    selectedTrip: [],
    serving_unit: "",
    calsPerServing: null,
    serving_qty: null,
    serving_weight_grams: null,
    packItems: {},
    name: "",
    selectedTripId: "",
    selectedTrip: {},
    id: "",
    serving_qty: null,
    item: {},
    serving_unit: "",
    serving_weight_grams: null,
    tripDay: "2000-01-02T01:01:01.001Z",
    type: "",
    food_name: "",
    brand_name: "",
    //packItems: {PACKITEMS}
    image: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png"

  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      selectedTripId: "",
      selectedTrip: {},
      id: "",
      serving_qty: null,
      item: {},
      serving_unit: "",
      calsPerServing: null,
      serving_weight_grams: null,
      tripDay: "2000-01-02T01:01:01.001Z",
      type: "",
      food_name: "",
      brand_name: "",
      packItems: {},
      travName: "",
      image: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png"
      //packItems: {PACKITEMS}

    };
  }
 
  adjustItemName = (name, id) => {
    
    this.setState({
      food_name: name,
      id: id
    }); 
  };

  adjustItemBrand = (newBrand) => {
    
    this.setState({
      brand_name: newBrand,
    });
  };


  selectTrip = (selectedTrip, tripId) => {
    const tripName = selectedTrip.name
    const tripDates = selectedTrip.trip_dates
    const tripTravelers = selectedTrip.traveler_names
    this.setState({
      tripId: tripId,
      selectedTrip: selectedTrip,    
      name: tripName,
      trip_dates: tripDates,
      traveler_names: tripTravelers
    });
  };

  adjustQuant = (input) => {
    
    this.setState({
      serving_qty: input
    });
  };

  adjustUnit = (input) => {
    
    this.setState({
      serving_unit: input
    });
  };

  adjustWeight = (input) => {
    
    this.setState({
      serving_weight_grams: input
    });
  };

  adjustCals = (input, id) => {
    
    this.setState({
      calsPerServing: input
    });
  };

  selectDay = (input) => {
    
    this.setState({
      tripDay: input,
    });
  };


  selectType = (input) => {
    
    this.setState({
      type: input
    });
  };


  selectTraveler = (input) => {
    
    this.setState({
      travName: input,
    });
  };
  
  render() {

    const packItems = this.props.packItems
    const newPackItemsArray = []
    
    newPackItemsArray.push(
      {"id": this.state.id},
      {"food_name": this.state.food_name},
      {"brand_name": this.state.brand_name},
      {"tripId": this.state.tripId},
      {"tripDay": this.state.tripDay},
      {"travName": this.state.travName},
      {"type": this.state.type},
      {"serving_qty": this.state.serving_qty})


      packItems.push(newPackItemsArray)

      console.log(packItems)

      
      const items = this.props.items

      const newItemsArray = []

      newItemsArray.push (
        {"id": this.state.id},
        {"food_name": this.state.food_name},
        {"brand_name": this.state.brand_name},
        {"calsPerServing": this.state.calsPerServing},
        {"image": this.state.image},
        {"serving_qty:": this.state.serving_qty},
        {"serving_unit": this.state.serving_unit},
        {"serving_weight_grams": this.state.serving_weight_grams}

      )

      items.push(newItemsArray)

      console.log(items)

   


    const onSubmitForm = (e) => {
      
      e.preventDefault()
      this.props.handleNewItems(packItems, items)}
    
      
    const trips = this.props.trips;      
    const itemTypes = this.props.itemTypes;
  
    const item = this.props.selectedItem;
  
    const image = item.image
    const name = item.food_name;
    const brand = !item.brand_name ? "common" : item.brand_name;
    const quant = Math.round(item.serving_qty);
  
    const unit = item.serving_unit
    const weight = Math.round(item.serving_weight_grams);
  
    const calsPs = Math.round(item.calsPerServing);
    const totalWeight = (quant * weight)
    const totalCalnf = (quant * calsPs)
    const totalCals = totalCalnf.toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    const id = item.id

  
  

    const stateQty = parseInt(this.state.serving_qty)

    const stateCalsPs = parseInt(this.state.calsPerServing)
    const stateServWeight = parseInt(this.state.serving_weight_grams)

    const stateWeight = (stateQty * stateServWeight).toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

    const stateCals = (stateQty * stateCalsPs).toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

    const text = this.props.text
    
    const tripDay = <Moment format= "MMM/DD" >{this.state.tripDay}</Moment>
      
    return (
      <section className="filterForm">
        <BackButton/>
            <div className = "adjustImage" >
            <ItemImage 
            image = {image}
            />
            </div>
        <form id="filter" onSubmit={onSubmitForm}>
          <h2 className="montebello white">{text}</h2>
  <div className= "white primaryFont"></div>
  
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
              id = {id}
              handleAdjustName= {(inputValue, id) =>
                this.adjustItemName(inputValue, id)
              }

              />
            </div>
            <div className="newItems">
              <NewItemBrand
              brand = {brand}
              handleAdjustBrand= {(inputValue) =>
                this.adjustItemBrand(inputValue)
              }
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
                    <ServUnit
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
                  <p className="dataResult skinBackground">
                    <WeightResult
                    result =
                    {stateWeight}
                    placeholder = {totalWeight}/>
                  </p>
                </div>

                <div className="resultBox">
                  <label
                    htmlFor="custom-item-total-cal"
                    className="labelWidth white"
                  >
                    Total Calories
                  </label>
                  <p className="dataResult skinBackground">
                    <CalResult
                    result = {stateCals} 
                    placeholder = {totalCals}
                    />
                    </p>
                </div>
              </div>
            </div>
          </div>

          <div className="filterContainer">
    <h3 className="filterCategory">Select trip:{" "}<span className = "primaryFont black">{this.state.name}</span></h3>
            <TripNames 
            trips={trips}
            handleSelectTrip={(selectedTrip, tripId) =>
              this.selectTrip(selectedTrip, tripId)
            }
            />

            <h3 className="filterCategory">Select date:{" "}<span className = "primaryFont black" >{this.state.tripDay == "2000-01-02T01:01:01.001Z"? "" : tripDay}</span></h3>
            <TripDates
            name = {this.state.name}
            tripDay = {this.state.tripDay}
            tripDates={this.state.trip_dates}
            handleSelectDay={(selectedDay) =>
              this.selectDay(selectedDay)
            }
            
            />

            <h3 className="filterCategory">Select type:{" "}<span className = "primaryFont black">{this.state.type}</span></h3>
            <ItemTypes itemTypes={itemTypes}
            id = {id}
            handleSelectType={(selectedType) =>
              this.selectType(selectedType)
            }
            
            />

            <h3 className="filterCategory">Select traveler:{" "}<span className = "primaryFont black">{this.state.travName}</span></h3>
            <TripTravelers tripTravelers={this.state.traveler_names}
          
            handleSelectTraveler={(selectedTraveler) =>
              this.selectTraveler(selectedTraveler)
            }
            
            
            />
          </div>
        </form>
      </section>
    );
  }
}

export default ItemAdjust;


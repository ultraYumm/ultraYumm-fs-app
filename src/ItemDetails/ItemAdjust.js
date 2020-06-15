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

import Result from "../CustomItem/Result";



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
import { v4 as uuidv4 } from 'uuid';


import { DEFAULTITEM } from "../Defaults";


class ItemAdjust extends Component {
  static defaultProps = {
    item:  DEFAULTITEM,
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
    image: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png"

  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      selectedTripId: "",
      selectedTrip: {},
      id: "",
      serving_qty: 1,
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


    const onSubmitForm = (e) => {
      const newId =  uuidv4()
      const newName = this.state.food_name
      const newBrand = this.state.brand_name
      const newCalsPs = this.state.calsPerServing
      const newImage = this.state.image
      const newQty = this.state.serving_qty
      const newUnit = this.state.serving_unit
      const newWeight = this.state.serving_weight_grams
      const tripId = this.state.tripId
      const tripDay = this.state.tripDay
      const travName = this.state.travName
      const type = this.state.type
      
      e.preventDefault()
      this.props.handleNewItem(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit)

      this.props.handleNewPackItem(newId, tripId, tripDay, travName, type, newQty)
    }
    
      
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
    const totalWeightnf = (quant * weight)
    const totalCalnf = (quant * calsPs)
    
   
    const id = item.id

    const stateQty = parseInt(this.state.serving_qty)

    const stateCalsPs = parseInt(this.state.calsPerServing)
    const stateServWeight = parseInt(this.state.serving_weight_grams)

    const stateWeightnf = (stateQty * stateServWeight)

    const stateCalsnf = (stateQty * stateCalsPs)
    
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
            <SaveButton />
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
                    handleAdjustQuant = {(inputValue) =>
                      this.adjustQuant(inputValue)
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
                  >Calories per serving
                  </label>
                  <div className="dataInput">
                  <CalsQuant
                  input = {calsPs}
                  id = {id}
                  handleAdjustCals = {(inputValue, id) =>
                   this.adjustCals(inputValue, id)
                 }
                  />

                  </div>
                
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
                  <div className="dataResult skinBackground">
                    <Result
                    result =
                    {stateWeightnf}
                    placeholder = {totalWeightnf}/>
                  </div>
                </div>

                <div className="resultBox">
                  <label
                    htmlFor="custom-item-total-cal"
                    className="labelWidth white"
                  >
                    Total Calories
                  </label>
                  <div className="dataResult skinBackground">
                    <Result
                    result = {stateCalsnf} 
                    placeholder = {totalCalnf}
                    />
                    </div>
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


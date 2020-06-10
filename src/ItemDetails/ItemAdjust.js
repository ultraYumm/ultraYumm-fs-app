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
    calsPs: null,
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
    calsPs: null,
    serving_weight_grams: null,
    tripDay: "",
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
      calsPs: null,
      serving_weight_grams: null,
      tripDay: "",
      type: "",
      food_name: "",
      brand_name: "",
      packItems: {},
      travName: "",
      image: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png"
      //packItems: {PACKITEMS}

    };
  }
 
  adjustItemName = (newName, id) => {
    
    this.setState({
      food_name: newName,
      id: id
    }); 
  };

  adjustItemBrand = (newBrand) => {
    
    this.setState({
      brand_name: newBrand,
    });
  };


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

    const packItems = this.props.packItems
    const newPackItemsArray = []
    
    newPackItemsArray.push(
      {"id": this.state.id},
      {"tripId": this.state.tripId},
      {"tripDay": this.state.tripDay},
      {"travName": this.state.travName},
      {"type": this.state.type},
      {"serving_qty": this.state.serving_qty})

      console.log(newPackItemsArray)

      packItems.push(newPackItemsArray)

      console.log(packItems)


    const onSubmitForm = (e) => {
      
      e.preventDefault()
      this.props.handleNewPackItems(packItems)}
    
      
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

    const stateCalsPs = parseInt(this.state.calsPs)
    const stateServWeight = parseInt(this.state.serving_weight_grams)

    const stateWeight = (stateQty * stateServWeight).toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

    const stateCals = (stateQty * stateCalsPs).toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

    const text = this.props.text
    const tripName = this.props.tripName
    const forT = this.props.forT
    const onT = this.props.onT
    const is = this.props.is
    const currentT = this.props.currentT
    const newT = this.props.newT
    const s = this.props.s

    var tripDay = <Moment format= "MMM/DD" >{this.state.tripDay}</Moment>

    



    
    
    return (
      <section className="filterForm">
        <BackButton/>
            <div className= "adjustImage">
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
              handleAdjustName= {(inputValue, id) =>
                this.adjustItemName(inputValue, id)
              }
              id ={id}

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
    <h3 className="filterCategory">Trip:{" "}<span className = "primaryFont black">{this.state.name}</span></h3>
            <TripNames 
            id = {id}
            trips={trips}
            handleSelectTrip={(selectedTrip, id) =>
              this.selectTrip(selectedTrip, id)
            }
            />

            <h3 className="filterCategory">Date:{" "}<span className = "primaryFont black" >{tripDay/*isNaN(tripDay) ? "" : (tripDay)*/}</span></h3>
            <TripDates 
            tripDates={this.state.trip_dates}
            handleSelectDay={(selectedDay) =>
              this.selectDay(selectedDay)
            }
            
            />

            <h3 className="filterCategory">Type:{" "}<span className = "primaryFont black">{this.state.type}</span></h3>
            <ItemTypes itemTypes={itemTypes}
            id = {id}
            handleSelectType={(selectedType) =>
              this.selectType(selectedType)
            }
            
            />

            <h3 className="filterCategory">Traveler:{" "}<span className = "primaryFont black">{this.state.travName}</span></h3>
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


import "../Font/Font.css";
import "../FormElements/FormElements.css";
import React, { Component } from "react";
import { NavLink} from 'react-router-dom';
import config from "../config";
import GoButton from "../FormElements/GoButton";
import ServUnit from "../CustomItem/ServUnit";
import UnitQuant from "../CustomItem/UnitQuant";
import WeightQuant from "../CustomItem/WeightQuant";
import CalsQuant from "../CustomItem/CalsQuant";
import Result from "../CustomItem/Result";
import TripNames from "../CustomItem/TripNames";
import "../Tables/Tables.css";
import TripDates from "../TripDetails/TripDates";
import ItemTypes from "../CustomItem/ItemTypes";
import TripTravelers from "../TripDetails/TripTravelers";
import NewItemName from "../CustomItem//NewItemName";
import NewItemBrand from "../CustomItem/NewItemBrand";
import ItemImage from "../ItemDetails/ItemImage"
import Moment from 'react-moment';
import { v4 as uuidv4 } from 'uuid';
import { Auth } from 'aws-amplify';
import { ITEMS, DEFAULTITEM, TRIPS, PACKITEMS } from "../Defaults";

class ItemAdjust extends Component {
  static defaultProps = {
    selectedTrip: TRIPS[0],
    trips: TRIPS,
    items: ITEMS,
    tripItems:ITEMS,
    selectedTripItems: ITEMS,
    selectedItem: DEFAULTITEM,
    item:  DEFAULTITEM,
    serving_unit: "",
    cals_per_serving: null,
    packItems: {},
    name: "",
    selectedTripId: "",
    id: "",
    serving_qty: null,
    serving_weight_grams: null,
    trip_day: PACKITEMS[0].trip_day,
    type: "",
    food_name: "",
    brand_name: "",
    image: ITEMS[0].image

  }


  constructor(props) {
    super(props);
    
    const selectedTrip = this.props.selectedTrip
    const packItems = this.props.packItems
    const trips = this.props.trips.length === 0? TRIPS : this.props.trips
    const selectedItem = this.props.selectedItem === undefined ? PACKITEMS[0] : this.props.selectedItem



    this.state = {
      selectedItem: selectedItem,
      selectedTrip: this.props.selectedTrip.id === 1000000 ? this.props.trips[0] : this.props.selectedTrip,

      name: !selectedTrip[0]? TRIPS[0].name: selectedTrip[0].name,

      id:  selectedItem.id,
      serving_qty: selectedItem.serving_qty,
      serving_unit: selectedItem.serving_unit,
      cals_per_serving: selectedItem.cals_per_serving,
      serving_weight_grams: selectedItem.serving_weight_grams,
      food_name: selectedItem.food_name,
      brand_name: selectedItem.brand_name,
      packItems: {packItems},
      image: selectedItem.image,

      tripid: !selectedTrip[0]? TRIPS[0].id : selectedTrip[0].id,
      
      trip_dates: !selectedTrip[0]? trips[0].trip_dates : 
      selectedTrip[0].trip_dates.toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(','),
      

      traveler_names: !selectedTrip[0]? TRIPS[0].traveler_names : selectedTrip[0].traveler_names.toString().replace('{', "").replace("}","").split(/[ ,]+/),


      trip_day: !selectedTrip[0]? PACKITEMS[0].trip_day : selectedTrip[0].trip_dates[0].toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(',')[0],
      
      type: !selectedTrip[0] | selectedItem.type === undefined ? PACKITEMS[0].type : selectedItem.type,

      trav_name: !selectedTrip[0]? PACKITEMS[0].trav_name : selectedItem.trav_name,

      
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


  selectTrip = (selectedTrip, tripid) => {
    const tripName = selectedTrip.name
    const tripDates = selectedTrip.trip_dates
    const tripTravelers = selectedTrip.traveler_names
    this.setState({
      tripid: tripid,
      selectedTrip: selectedTrip,    
      name: tripName,
      trip_dates: tripDates,
      traveler_names: tripTravelers
    });
    this.props.handleSelectTrip(tripid, tripName)
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
      cals_per_serving: input
    });
  };

  selectDay = (input) => {
    
    this.setState({
      trip_day: input,
    });
  };


  selectType = (input) => {
    
    this.setState({
      type: input
    });
  };


  selectTraveler = (input) => {
    
    this.setState({
      trav_name: input,
    });
  };


  componentDidMount () { try {Auth.currentAuthenticatedUser()
    .catch(err => console.log(err))
    .then(user => {

    let id = user.attributes.sub
    let username = user.username

    this.props.getUser(id, username)
   
   
  })
}
catch (ex) {
  console.log("waiting for login", ex);
  alert("waiting for login");
}

    }

 

 
  
  render() {

  
      const onSubmitForm = (e) => {
      e.preventDefault()
      const newId =  uuidv4()

      const fixedSource = "nutritionix"
     
      const newName = this.state.food_name
      const newBrand = this.state.brand_name
      const newCalsPs = isNaN(this.state.cals_per_serving)? 0 : this.state.cals_per_serving
      const newImage = this.state.image
      const newQty = this.state.serving_qty
      const newUnit = this.state.serving_unit
      const newWeight = isNaN(this.state.serving_weight_grams)? 0 : this.state.serving_weight_grams 
      const tripid = this.state.tripid      
      const trip_day = this.state.trip_day
      const trav_name = this.state.trav_name === undefined ?  "TBD" : this.state.trav_name
      const type = this.state.type

      const newSource =this.props.selectedItem.full_nutrients || this.props.selectedItem.source === fixedSource?    fixedSource : this.props.selectedItem.source
    
      const API = config.API_UY_ENDPOINT   
      const  endpointI = config.endpointI
      const  endpointP = config.endpointP
     
      const urlI = API + endpointI;
      const urlP = API + endpointP;
      
      const item = {
        id: newId,
        
        food_name: this.props.selectedItem.full_nutrients || this.props.selectedItem.source === fixedSource? this.props.selectedItem.food_name: newName, 
        
        serving_unit:this.props.selectedItem.full_nutrients || this.props.selectedItem.source === fixedSource? this.props.selectedItem.serving_unit : newUnit, 
        
        brand_name: this.props.selectedItem.full_nutrients || this.props.selectedItem.source === fixedSource? this.props.selectedItem.brand_name: newBrand,
        
        serving_qty:  newQty,
        
        image: newImage,

        source: newSource,
        
        serving_weight_grams: this.props.selectedItem.full_nutrients ||this.props.selectedItem.source === fixedSource ? this.props.selectedItem.serving_weight_grams : newWeight,
        
        cals_per_serving:  this.props.selectedItem.full_nutrients || this.props.selectedItem.source === fixedSource? this.props.selectedItem.cals_per_serving : newCalsPs
      }
      
      const packItem = {
        id: newId,
        tripid: tripid,
        trip_day: trip_day,
        trav_name: trav_name,
        type: type,
        serving_qty: newQty
      }

      fetch(urlI, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${config.API_UY_KEY}`
        }
      })
        .then(res => {
          if (!res.ok) {
            // get the error message from the response,
            return res.json().then(error => {
              // then throw it
              throw error
            })
          
          }

        })
      
        .then((newId, newBrand, newSource,newCalsPs, newName, newImage, newWeight, newQty, newUnit) => {
          this.props.handleNewItem(newId, newBrand, newSource, newCalsPs, newName, newImage, newWeight, newQty, newUnit)
          

          fetch(urlP, {
            method: 'POST',
            body: JSON.stringify(packItem),
            headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${config.API_UY_KEY}`
            }
          })
            .then(res => {
              if (!res.ok) {
                // get the error message from the response,
                return res.json().then(error => {
                  // then throw it
                  throw error
                })
              }
              return res.json()
              
            })
            
            .then((newId, tripid, trip_day, trav_name, type, newQty) => {
              this.props.handleNewPackItem(newId, tripid, trip_day, trav_name, type, newQty)    
              
              this.props.getPackitems(e)
                    
            })

  
            .catch(error => {
              this.setState({ error })
            })
                
        })
       
        .catch(error => {
          this.setState({ error })
        })
        
        .then(this.props.getTrips(e))
       
        .then((
          this.props.routerProps.history.push("/trip/:tripName"))

        )

        
    }
 
    const trips = this.props.trips;   
    const itemTypes = this.props.itemTypes;
    const item = this.props.selectedItem;
    console.log(item)
    const image = item.image
    const name = item.food_name;
    
    const brand = !item.brand_name ? "common" : item.brand_name;

    const quant = Math.round(item.serving_qty);
    const unit = item.serving_unit
    const weight = Math.round(item.serving_weight_grams);
    const calsPs = Math.round(item.cals_per_serving);
    const totalWeightnf = (quant * weight)
    const totalCalnf = (quant * calsPs)
    const id = item.id
    const stateQty = parseInt(this.state.serving_qty)
    const stateCalsPs = parseInt(this.state.cals_per_serving)
    const stateServWeight = parseInt(this.state.serving_weight_grams)
    const stateWeightnf = (stateQty * stateServWeight)
    const stateCalsnf = (stateQty * stateCalsPs)
    const trip_day = <Moment format= "MMM/DD" >{this.state.trip_day}</Moment>
    const getTrips = this.props.getTrips
  
    const fixedSource = "nutritionix"

    return (
      <section className="filterForm"
      onMouseOver = {getTrips}>
         
        
       
         
          <div className = "adjustImage" >
          <ItemImage 
          image = {image}
          />
          </div>

        <form id="filter" onSubmit={onSubmitForm} className = "blueBackground">
        
           
          <h2 className="montebello white">{!this.props.selectedItem.full_nutrients? "make your own item" : "adjust and save as new"}<span className = "tooltiptext primaryFont white">change presets</span>&nbsp;<GoButton 
          
           
           goButtonText = {this.props.goButtonText}/>
          
                     
          </h2>
          <span className = "skin note">{this.props.selectedItem.full_nutrients || this.props.selectedItem.source === fixedSource? "name, unit, calorie and weight ratios are fixed for this searched item to preserve the integrity of your nutritional info & only new serving quantity can be saved" : "set your custom quantity, unit, weight and calorie ratios"}<br></br>
          <br></br><span
          className={ this.props.selectedItem.full_nutrients || this.props.selectedItem.source === fixedSource?  ' visible'  : ' invisible'}><NavLink to={`/add-custom/`}
          className = "noDeco white bold">
          go to make your own item to input all custom data
            </NavLink>
            </span></span>
         

                
            <div className= "white primaryFont"></div>  
                <div>
                  <div className = "newI">
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
                  </div>

            <div className= "calcBox">
              <div className= "inputsContainer">
                <div className= "inputBox">
                  <label
                    htmlFor= "serving quantity"
                    className= "labelWidth white"
                  ><i className ="fas fa-coins white mobileHide"></i>&nbsp;<strong>Serving Quantity</strong>
                  </label>
                  <div className= "dataInput">
                    <UnitQuant
                    input = {quant}
                    handleAdjustQuant = {(inputValue) =>
                      this.adjustQuant(inputValue)
                    }
                    />
                  </div>
                </div>

                <div className="inputBox">
                <label
                    htmlFor= "serving unit"
                    className= "labelWidth white"
                  ><i className= "fas fa-ruler-vertical white mobileHide"></i>&nbsp;Serving unit
                  </label>
                  <div className= "textInput">
                    <ServUnit
                    id = {id}
                    input = {unit}
                    handleAdjustUnit = {(inputValue, id) =>
                      this.adjustUnit(inputValue, id)
                    }
                    />
                  </div>
                </div>

                <div className="inputBox">
                  <label
                    htmlFor= "weight per serving"
                    className= "labelWidth white"
                  > <i className= "fas fa-balance-scale white mobileHide"></i>&nbsp;&nbsp;&nbsp;Weight per serving
                  </label>
                  <div className="dataInput">
                  <WeightQuant
                    input = {weight}
                    id = {id}
                   handleAdjustWeight = {(inputValue, id) =>
                    this.adjustWeight(inputValue, id)
                  }
                  />
                  </div>
                </div>

                <div className="inputBox">
                  <label
                    htmlFor="calories per serving"
                    className="labelWidth white"
                  ><i className ="fas fa-fire-alt white mobileHide"></i>&nbsp;Calories per serving
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
                    className="labelWidth white"
                  > <i className ="fas fa-hiking white mobileHide">
                  </i>&nbsp;
                  <strong>Total Weight<br></br> (grams)</strong>
                  </label>
                  <div className="cellBox redBackground">
                    <Result
                    result =
                    {stateWeightnf}
                    placeholder = {totalWeightnf}/>
                    </div>
               
                </div>

                <div className="resultBox">
               
                  <label
                    className="labelWidth white"
                  > <i className ="fas fa-fire-alt white mobileHide"></i>&nbsp;
                    <strong>Total Calories<br></br>(cals)</strong>
                  </label>
                  <div className="cellBox redBackground">
               
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
        
          <div className= "filterSelection"> 
          <div className = "plan">
        <NavLink
          to={this.props.username === undefined ? `/sign-in` : `/add-trip`}
          className = "noDeco bold goTo blue"><i className="fas fa-seedling"></i>
            {this.props.planTripText}
            </NavLink>
            </div>
    
              <h3 className="filterCategory"><i className ="fas fa-shoe-prints black"></i>&nbsp;Trip:{" "}<span className = "primaryFont black">{this.state.name.length === 0 ? "select or plan a new!" : this.state.name}</span></h3>
             
                <TripNames
                stateName = {this.state.name} 
                trips={trips}
                handleSelectTrip={(selectedTrip, tripid) =>
                  this.selectTrip(selectedTrip, tripid)
                }
                />
            </div>

            <div className= "filterSelection">
              <h3 className="filterCategory"><i className ="fas fa-calendar-day black"></i>&nbsp;Date:{" "}<span className = "primaryFont black" >{this.state.trip_day === PACKITEMS[0].trip_day | this.state.trip_day === "undefined" | this.state.trip_day === undefined | this.state.trip_dates === "" |  this.state.trip_dates[0] === "" | this.state.trip_dates === undefined |
              this.state.trip_dates === {} |
              this.state.trip_dates === "{}"
              ? "" : trip_day}</span></h3>
                <TripDates
                stateDate = {this.state.trip_day}
                defaultDay = {PACKITEMS[0].trip_day}
                tripDates={this.state.trip_dates}
                handleSelectDay={(selectedDay) =>
                  this.selectDay(selectedDay)
                }/>
            </div>

            <div className= "filterSelection">
              <h3 className="filterCategory"><i className ="fas fa-utensils black"></i>&nbsp;Type:{" "}<span className = "primaryFont black">{this.state.type}</span></h3>
                <ItemTypes itemTypes={itemTypes}
                id = {id}
                stateType = {!this.state.type? "TBD" : this.state.type}
                handleSelectType={(selectedType) =>
                  this.selectType(selectedType)
                }/>
             </div>

             <div className="filterSelection">
              <h3 className="filterCategory">  <i className ="fas fa-user-circle black"></i>&nbsp;traveler:{" "}<span className = "primaryFont black">{this.state.trav_name}</span></h3>
                <TripTravelers 
                stateName = {this.state.trav_name}
                tripTravelers={this.state.traveler_names}
                handleSelectTraveler={(selectedTraveler) =>
                  this.selectTraveler(selectedTraveler)
                }/>
             </div>
          </div>
          <div className = "mobileOnly">
          <GoButton
           goButtonText = {this.props.goButtonText}/>
        </div>
        </form>
      </section>
    );
  }
}

export default ItemAdjust;


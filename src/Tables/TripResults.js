import React, { Component } from "react";
import "../Font/Font.css";
import TripName from "../TripDetails/TripName";
import TripYear from "../TripDetails/TripYear";
import Moment from "react-moment";
import PrintButton from "../FormElements/PrintButton";
import AddCustomButton from "../FormElements/AddCustomButton";
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
import DeleteButton from '../FormElements/DeleteButton';
import ExcelButton from '../FormElements/ExcelButton';
import ItemImage from "../ItemDetails/ItemImage";
import ItemBrand from "../ItemDetails/ItemBrand";
import BrandHeader from "./BrandHeader";
import '../FormElements/FormElements.css';
import { ITEMS, TRIPS, PACKITEMS } from "../Defaults";
import { withRouter } from "react-router-dom";
import config from "../config";
import TripTravelers from "../TripDetails/TripTravelers";
import TripDates from "../TripDetails/TripDates";


class TripResults extends Component {
  static defaultProps = {
    selectedTrip: TRIPS[0],
    items: ITEMS,
    tripItems:ITEMS,
    selectedTripItems: ITEMS,
    results: PACKITEMS
 
    
  };

  constructor(props) {
    super(props);
    const selectedTrip = this.props.selectedTrip
    this.state = {
      serving_qty: null,
      id: "",
      idToDelete: "",
      nameOfDelete: "",
      items: [],
      tripItems: [],
      selectedTripItems: [],
      trav_name: "",
      trip_day: "",
      results: PACKITEMS,
      selectedTrip: selectedTrip.length === 0? TRIPS[0] : selectedTrip
          
      
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
      trip_day: "",
      type: ""
    });
  };

  selectDay = (input, id) => {
    
    this.setState({
      trip_day: input,
    });
  };



  selectTraveler = (input) => {
    
    this.setState({
      trav_name: input,
    });
  };



  selectItemToDelete = (id, name) => {
    
    this.setState({
      idToDelete: id,
      nameOfDelete: name
    });
    
  };

  undoFilter = () => {
    
    this.setState({
      trav_name: "",
      trip_day: ""
    });
    
  };
  

 

  render() {
    const selectedTrip = this.state.selectedTrip;
  
    const selectedTripItems = this.props.selectedTripItems;
    const tripItems = this.props.tripItems;
    
    const imageArray = tripItems.map((items) => items.image);
    const food_nameArray = tripItems.map((items) => items.food_name);
    const brandArray = tripItems.map((items) => items.brand_name);
    const fixedUnitArray = tripItems.map((items) => items.serving_unit);


    const fixedCalPerUnitArray = tripItems.map((items) => items.cals_per_serving);


    const fixedServingWeightArray = tripItems.map(
      (items) => items.serving_weight_grams
    );
   
    const results = selectedTripItems.map((item, i) => {
    const food_name = food_nameArray[i];
    const image = imageArray[i];
    const brand_name = brandArray[i];
    const serving_unit = fixedUnitArray[i];
    const cals_per_serving = fixedCalPerUnitArray[i];
    const serving_weight_grams = fixedServingWeightArray[i];
    const resultsObject = {
        image,
        food_name,
        brand_name,
        serving_unit,
        serving_weight_grams,
        cals_per_serving,
        ...item,
      };

      return resultsObject;
    });

    const filterResults = () => {
      if (selectedTrip[0].trip_dates === "{}") {
        const resultA = results.filter(result => result.trav_name === this.state.trav_name)
        return resultA
       }
     else return results.filter(result => (result.trip_day === this.state.trip_day || result.trav_name === this.state.trav_name)
     )
    }

    const filteredResults = filterResults ()

   

     const resultstoUse = () => {
       
       if (selectedTrip[0].trip_dates === "{}" && this.state.trav_name.length === 0) {
        return results
       }
       else if (selectedTrip[0].trip_dates === "{}" && this.state.trav_name.length > 0) {
        return filteredResults
       }
       else if (this.state.trip_day.length === 0 && this.state.trav_name.length === 0) {return results}
       else if (this.state.trip_day.length > 0 || this.state.trav_name.length > 0) {return filteredResults}}

     
     const datatoCalc = resultstoUse()

     const fixedCalPerUnitCalc = datatoCalc.map((items) => items.cals_per_serving);

     const selectServingQuantCalc = datatoCalc
       .map((items) => items.serving_qty)
       .sort();
 
     const fixedServingWeightCalc = datatoCalc.map(
       (items) => items.serving_weight_grams
     );
    
    const sum_CalServProducts = fixedCalPerUnitCalc.reduce((sum, val, i) => sum + (val * selectServingQuantCalc[i]), 0)

    const sum_WeightServProducts = fixedServingWeightCalc.reduce((sum, val, i) => sum + (val * selectServingQuantCalc[i]), 0)

    const getPackItems = this.props.getPackItems
    const getItems = this.props.getItems
     
    return (
      <div>
     
      <section className="lightBlueBackground"
      onMouseOver = {getItems}>      
       
        <div className = "lightBlueBackground sticky" 
        onMouseOver = {getPackItems}>
           <div className="charts sticky cloudBlueBackground">
          <TripCalorieGraph cals={sum_CalServProducts}/>
          <TripPackGraph weight={sum_WeightServProducts}/>


          <div className="filterSelection summary">
          <h2 className="filterCategory black">  Filters: &nbsp; <i className="fas fa-undo black" onClick = {this.undoFilter}></i> </h2> <br></br>
      
              <h3 className="filterCategory"> <i className ="fas fa-user-circle black"></i>&nbsp;by traveler</h3>
                <TripTravelers 
                stateName = {this.state.trav_name}
                tripTravelers={!selectedTrip[0]? TRIPS[0].traveler_names : selectedTrip[0].traveler_names}
                handleSelectTraveler={(selectedTraveler) =>
                  this.selectTraveler(selectedTraveler)
                }/>
             </div>

             <div className= "filterSelection summary">
              <h3 className="filterCategory"><i className ="fas fa-calendar-day black"></i>&nbsp;by date:{" "}</h3>
                <TripDates
                stateDate = {!results[0]? PACKITEMS[0].trip_day : this.state.trip_day}
                defaultDay = {!results[0]? PACKITEMS[0].trip_day : results[0].trip_day}
                tripDates={!selectedTrip[0]? TRIPS[0].trip_dates : selectedTrip[0].trip_dates}
                handleSelectDay={(selectedDay) =>
                  this.selectDay(selectedDay)
                }/>
            </div>

              

          </div>
        
          <div className = "iconButtonContainer sticky">
         
        </div>
          <h2 className="montebello black sticky resultsTitle">
         
            <div className="primaryFont bold white sticky resultsTitle">
              <TripName selectedTrip={!selectedTrip[0]? TRIPS[0] : selectedTrip}/><span className = "montebello">&nbsp;Results!&nbsp; 
              <TripYear selectedTrip= {!selectedTrip[0]? TRIPS[0] : selectedTrip[0]}/></span>
            </div>
          </h2>
        
       
           <div>
          <div className="iconButtonContainer"> 
             <div className = "excel">
             <ExcelButton
            />
            </div>
             </div>
             <div className="iconButtonContainer">
             <div className = "print">          
             <PrintButton/>
             </div>
             </div>
             </div>
             <div>
             <DeleteButton
            name = {this.state.nameOfDelete}
            idToDelete = {this.state.idToDelete}
          
            handleDeleteItem = {(idToDelete) =>
              this.props.handleDeletePackItem(idToDelete)
            
            }
            endpoint = {config.endpointP}
             />
          </div>

          <div className="filterButtonContainer moreContainer sticky">
            
            <NavLink to={`/add-custom/${!selectedTrip[0]? TRIPS[0].name :  selectedTrip[0].name}`}>
              <AddCustomButton 
               addButtonText = {this.props.addButtonText}
              
              />
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
           

              {resultstoUse().map((item, key) => (
                <tr className="one whiteBackground black" key = {key}>
                
                  <td className="date">
                  {item.trip_day === PACKITEMS[0].trip_day? "TBD" :<Moment format="ddd-MMM-DD">{item.trip_day}</Moment>}        
                  </td>

                  <td className="type">
                    {item.type}
                  </td>

                  <td className="traveler"> 
                    {item.trav_name}
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
                    {(item.serving_qty * item.cals_per_serving)
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      result = {Math.round(this.state.serving_qty * item.cals_per_serving).toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      />
                  <Delete
                  idToDelete = {(id, name) => this.selectItemToDelete(id, name)}
                  id = {item.id}
                  name = {item.food_name}
               
                  />
                 
                </tr>
              ))}
            </tbody>
          </table>

         
          {resultstoUse().map((item, key) => (
          <table id="results-filtered-mobile" className="primaryFont whiteBackground mobileOnly" key={key}>
            
            <tbody>
             <tr className = "mobile" >
              <td className = "noBorder"> 
                <ItemImage image = {item.image}/>
              </td>
             </tr>
            </tbody>

            <tbody>  
            <tr className="itemH">
              <ItemHeader/>
              <td>
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
            </tbody>

            <tbody>
              <tr>  
              <BrandHeader/>
                      <ItemBrand
                      brand = {!item.brand_name ? "common" : item.brand_name}
                      />
             </tr>
            </tbody>
              
            <tbody>
            <tr> 
            <DateHeader/>
            <td className="date">
                     {item.trip_day === PACKITEMS[0].trip_day? "TBD" :<Moment format="ddd-MMM-DD">{item.trip_day}</Moment>}     
            </td>

            </tr>
            </tbody>
            
            <tbody>
            <tr>
            <TypeHeader/>
              <td className="type">
                        {item.type}          
              </td>
            </tr>
            </tbody>

            <tbody>
            <tr>
            <TravlrHeader/>
              <td className="type">
              {item.trav_name}        
              </td>
            </tr>
            </tbody>

            <tbody>
            <tr>
              <UnitHeader/>
              <ServingUnit unit={item.serving_unit}/>
            </tr>
            </tbody>

            <tbody>
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
            </tbody>

            <tbody>
            <tr>
            <WeightGHeader/>
            <ServingWeight
                    weight = {item.serving_qty * item.serving_weight_grams}
                    result = {Math.round(this.state.serving_qty * item.serving_weight_grams).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />
            </tr>
            </tbody>

            <tbody>
            <tr>
            <TotalCalHeader/>
            <CalsPerServing
                      calories =
                      {(item.serving_qty * item.cals_per_serving)
                        .toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        result = {Math.round(this.state.serving_qty * item.cals_per_serving).toFixed(0)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        />
            </tr>
            </tbody>

            <tbody>
            <tr>
            <DeleteHeader/>
            <Delete           
             idToDelete = {(id, name) => this.selectItemToDelete(id, name)}
             id = {item.id}
             name = {item.food_name}
             
            />
            </tr>
            </tbody>
            </table>
          ))}
      </section>
      </div>
    );
  }
}

export default withRouter (TripResults);
